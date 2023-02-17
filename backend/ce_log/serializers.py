from rest_framework import serializers
from .models import Credit

class CreditSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Credit
        fields = ['id', 'user_id', 'course_name', 'course_date', 'cost', 'credits', 'ethics', 'certificate']
        depth = 1

        