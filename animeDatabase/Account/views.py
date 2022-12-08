from django.shortcuts import render
from Account.models import compte
from rest_framework import viewsets
from rest_framework import permissions
from Account.serializers import CompteFlowSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

## this explains how everything gets shown
class CompteViewSet(viewsets.ModelViewSet):
    queryset = compte.objects.all()
    serializer_class = CompteFlowSerializer
    permission_classes = [permissions.AllowAny]