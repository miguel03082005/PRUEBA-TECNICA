from django.contrib.auth.models import User
from django.urls import include, path
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'transacciones', TransaccionesViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]