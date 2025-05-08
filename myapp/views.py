from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import viewsets
from .models import *
from .serializers import UserSerializer, TransaccionesSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TransaccionesViewSet(viewsets.ModelViewSet):
    queryset = transaction.objects.all()
    serializer_class = TransaccionesSerializer