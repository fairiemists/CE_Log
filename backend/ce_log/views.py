from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Credit
from .serializers import CreditSerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_credits(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    
    if request.method == 'POST':
        serializer = CreditSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        cars = Credit.objects.filter(user=request.user)
        serializer = CreditSerializer(cars, many=True)
        return Response(serializer.data)






