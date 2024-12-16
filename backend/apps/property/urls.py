from django.urls import path
from apps.property.api import properties_list, create_properties

urlpatterns = [
    path("properties-list/", properties_list, name="properties_list"),
    path("properties/create/", create_properties, name="create_properties"),
]
