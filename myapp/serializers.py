from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class TransaccionesSerializer(serializers.ModelSerializer):
    class Meta:
        model = transaction
        fields = '__all__'
