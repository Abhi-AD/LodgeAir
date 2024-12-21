from django.http import JsonResponse

from rest_framework.decorators import api_view

from apps.chat.models import Conversation, ConversationMessage
from apps.chat.serializers import ConversationListSerializer

from apps.useraccount.models import User


@api_view(["GET"])
def conversations_list(request):
    serializer = ConversationListSerializer(request.user.conversations.all(), many=True)
    return JsonResponse(serializer.data, safe=False)
