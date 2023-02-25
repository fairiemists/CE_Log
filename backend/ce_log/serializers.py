from rest_framework import serializers
from .models import Credit
from .models import MyModel

class CreditSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Credit
        fields = ['id', 'user_id', 'agent_first_name', 'agent_last_name', 'course_name', 'course_date', 'cost', 'credits', 'ethics', 'certificate']
        depth = 1

        
class MyModelSerializer(serializers.ModelSerializer):

    creator = serializers.ReadOnlyField(source='creator.username')
    creator_id = serializers.ReadOnlyField(source='creator.id')
    image_url = serializers.ImageField(required=False)

    class Meta:
        model = MyModel
        fields = ['id', 'creator', 'creator_id', 'title', 'description', 'image_url']

        