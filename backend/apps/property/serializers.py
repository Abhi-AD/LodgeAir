from rest_framework import serializers
from apps.property.models import Property
from apps.useraccount.serializers import UserDetailsSerializer


class PropertiesListSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Property
        fields = ["id", "title", "price_per_day", "image_url"]

    def get_image_url(self, obj):
        return obj.image_url()


class PropertySerializer(serializers.ModelSerializer):
    lanlord = UserDetailsSerializer(read_only=True, many=False)

    class Meta:
        model = Property
        fields = [
            "id",
            "title",
            "description",
            "price_per_day",
            "image_url",
            "bedrooms",
            "bathrooms",
            "guests",
            "lanlord",
        ]
