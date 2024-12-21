from django.contrib import admin
from apps.chat.models import Conversation, ConversationMessage

# Register your models here.
admin.site.register(Conversation)
admin.site.register(ConversationMessage)
