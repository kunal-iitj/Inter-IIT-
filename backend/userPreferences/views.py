from django.shortcuts import render
import csv 
from .models import UserPreference
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json

# Create your

@api_view(['POST'])
def fetchPreference(request):
    body = request.body.decode('utf-8')
    object = UserPreference(body['languages'])
    object.save()
    return None
