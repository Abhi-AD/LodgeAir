from django.urls import path

from apps.chat.api import conversations_list


urlpatterns = [
    path("", conversations_list, name="conversations_list"),
]
