from rest_framework import serializers
from apps.chat.models import Conversation, ConversationMessage
from apps.useraccount.serializers import UserDetailsSerializer


class ConversationListSerializer(serializers.ModelSerializer):
    users = UserDetailsSerializer(many=True, read_only=True)

    class Meta:
        model = Conversation
        fields = (
            "id",
            "users",
            "modified_at",
        )
