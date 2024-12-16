from django.http import JsonResponse
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)

from apps.property.models import Property
from apps.property.forms import PropertyForm
from apps.property.serializers import PropertiesListSerializer, PropertySerializer


@api_view(["GET"])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    properties = Property.objects.all()
    serializer = PropertiesListSerializer(properties, many=True)
    return JsonResponse({"data": serializer.data})


@api_view(["GET"])
@authentication_classes([])
@permission_classes([])
def properties_detail(request, pk):
    property = Property.objects.get(id=pk)
    serializer = PropertySerializer(property)
    return JsonResponse(serializer.data)


@api_view(["POST", "FILES"])
def create_properties(request):
    print(request.user, "USER")
    form = PropertyForm(request.POST, request.FILES)
    if form.is_valid():
        property = form.save(commit=False)
        property.lanlord = request.user
        property.save()
        return JsonResponse({"sucess": True})
    else:
        return JsonResponse({"error": form.errors.as_json()}, status=400)
