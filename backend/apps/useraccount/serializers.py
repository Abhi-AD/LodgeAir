from rest_framework import serializers
from apps.useraccount.models import User


class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "name", "avatar_url"]
