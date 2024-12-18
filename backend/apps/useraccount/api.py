from django.http import JsonResponse
from apps.useraccount.models import User
from rest_framework.decorators import (
    api_view,
    authentication_classes,
    permission_classes,
)
from apps.useraccount.serializers import UserDetailsSerializer


@api_view(["GET"])
@authentication_classes([])
@permission_classes([])
def landlord_detail(request, pk):
    user = User.objects.get(pk=pk)
    serializer = UserDetailsSerializer(user, many=False)
    return JsonResponse(serializer.data, safe=False)
