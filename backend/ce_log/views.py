from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Credit
from .serializers import CreditSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_credits(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")

    return Response('ok')


