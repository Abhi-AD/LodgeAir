import uuid
from django.conf import settings
from django.db import models
from apps.useraccount.models import User


# Create your models here.
class Property(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField()
    price_per_day = models.IntegerField()
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField(default=1)
    guests = models.IntegerField()
    country = models.CharField(max_length=255)
    country_code = models.CharField(max_length=10)
    category = models.CharField(max_length=255)
    favorited = models.ManyToManyField(User, related_name="favorites", blank=True)
    image = models.ImageField(upload_to="uploads/property")
    landlord = models.ForeignKey(
        User, related_name="properties", on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def image_url(self):
        return f"{settings.WEBSITE_URL}{self.image.url}"


class Reservation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    property = models.ForeignKey(
        Property, related_name="reservations", on_delete=models.CASCADE
    )
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    number_of_day = models.IntegerField()
    guests = models.IntegerField()
    total_price = models.FloatField()
    created_by = models.ForeignKey(
        User, related_name="reservations", on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)
