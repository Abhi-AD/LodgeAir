from django.contrib import admin
from apps.property.models import Property, Reservation

# Register your models here.
admin.site.register(Property)
admin.site.register(Reservation)
