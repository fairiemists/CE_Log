from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Credit
from .serializers import CreditSerializer
from django.shortcuts import get_object_or_404

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
        credits = Credit.objects.filter(user=request.user)
        serializer = CreditSerializer(credits, many=True)
        return Response(serializer.data)
    

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_credit(request, pk):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    credit = get_object_or_404(Credit, pk=pk)

    if request.method == 'PUT':
        serializer = CreditSerializer(credit, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
    elif request.method == 'DELETE':
        credit.delete()
        return Response (status=status.HTTP_204_NO_CONTENT)
    

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def employee_credits(request):

    if request.method == 'GET':
        credits = Credit.objects.all()
        serializer = CreditSerializer(credits, many=True)
        return Response(serializer.data)






