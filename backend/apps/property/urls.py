from django.urls import path
from apps.property.api import properties_list

urlpatterns = [path("properties-list/", properties_list, name="properties_list")]
