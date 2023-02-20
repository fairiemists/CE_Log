from rest_framework import serializers
from .models import Credit

class CreditSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Credit
        fields = ['id', 'user_id', 'agent_first_name', 'agent_last_name', 'course_name', 'course_date', 'cost', 'credits', 'ethics', 'certificate']
        depth = 1

        