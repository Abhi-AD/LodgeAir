import json
from asgiref.sync import sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer
from apps.chat.models import ConversationMessage, Conversation
from django.contrib.auth import get_user_model


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = f"chat_{self.room_name}"

        # Join the room
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        await self.accept()

    async def disconnect(self):
        # Leave the room
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    # Receive message from WebSocket
    async def receive(self, text_data):
        data = json.loads(text_data)
        conversation_id = data["data"]["conversation_id"]
        sent_to_id = data["data"]["sent_to_id"]
        name = data["data"]["name"]
        body = data["data"]["body"]

        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name, {"type": "chat_message", "body": body, "name": name}
        )
        await self.save_message(conversation_id, body, sent_to_id)

    # Send message to WebSocket
    async def chat_message(self, event):
        body = event["body"]
        name = event["name"]
        await self.send(text_data=json.dumps({"body": body, "name": name}))

    @sync_to_async
    def save_message(self, conversation_id, body, sent_to_id):
        try:
            User = get_user_model()
            user = User.objects.get(pk=self.scope["user"].id)  # Ensure user is valid
            conversation = Conversation.objects.get(
                pk=conversation_id
            )  # Validate conversation
            sent_to = User.objects.get(pk=sent_to_id)  # Validate recipient

            ConversationMessage.objects.create(
                conversation=conversation,
                body=body,
                sent_to=sent_to,
                created_by=user,
            )
            print("Message saved successfully.")
        except User.DoesNotExist:
            print("Error: User does not exist.")
        except Conversation.DoesNotExist:
            print("Error: Conversation does not exist.")
        except Exception as e:
            print(f"Error saving message: {e}")
