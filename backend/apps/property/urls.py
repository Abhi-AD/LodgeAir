from django.urls import path
from apps.property.api import (
    properties_list,
    create_properties,
    properties_detail,
    book_property,
    property_reservations,
    toggle_favorite,
)

urlpatterns = [
    path("properties-list/", properties_list, name="properties_list"),
    path("properties/create/", create_properties, name="create_properties"),
    path("properties/<uuid:pk>/", properties_detail, name="properties_detail"),
    path("properties/<uuid:pk>/book/", book_property, name="book_property"),
    path(
        "properties/<uuid:pk>/reservations/",
        property_reservations,
        name="property_reservations",
    ),
    path(
        "properties/<uuid:pk>/toggle_favorite/", toggle_favorite, name="toggle_favorite"
    ),
]
