from django.urls import path

from apps.chat.api import conversations_list, conversations_detail


urlpatterns = [
    path("", conversations_list, name="conversations_list"),
    path("<uuid:pk>/", conversations_detail, name="conversations_detail"),
]
