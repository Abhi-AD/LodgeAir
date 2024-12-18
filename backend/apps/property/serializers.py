from rest_framework import serializers
from apps.property.models import Property, Reservation
from apps.useraccount.serializers import UserDetailsSerializer


class PropertiesListSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Property
        fields = ["id", "title", "price_per_day", "image_url"]

    def get_image_url(self, obj):
        return obj.image_url()


class PropertySerializer(serializers.ModelSerializer):
    landlord = UserDetailsSerializer(read_only=True, many=False)

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
            "landlord",
        ]


class ReservationsListSerializer(serializers.ModelSerializer):
    property = PropertiesListSerializer(read_only=True, many=False)

    class Meta:
        model = Reservation
        fields = (
            "id",
            "start_date",
            "end_date",
            "number_of_day",
            "total_price",
            "property",
        )
