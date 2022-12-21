from django.shortcuts import render
import csv 
from .models import UserPreference

# Create your


def writeCSV(id):
    row = UserPreference.objects.get(id= id)
    with open('') as file:
        file.write(row)

