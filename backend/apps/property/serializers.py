from rest_framework import serializers
from apps.property.models import Property


class PropertiesListSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Property
        fields = ["id", "title", "price_per_day", "image_url"]

    def get_image_url(self, obj):
        return obj.image_url()  # Call the method to get the image URL


class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = "__all__"  # This will include all the fields in the Property model
