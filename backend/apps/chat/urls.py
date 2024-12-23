from django.urls import path

from apps.chat.api import conversations_list, conversations_detail, conversations_start


urlpatterns = [
    path("", conversations_list, name="conversations_list"),
    path("<uuid:pk>/", conversations_detail, name="conversations_detail"),
    path("start/<uuid:user_id>/", conversations_start, name="conversations_start"),
]
