from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
import base64
from urllib.parse import urlencode
import environ


# initializing the environment variables 

env = environ.Env()

# reading the .env file

environ.Env.read_env()


# Create your views here.

def getAccessToken():
    client_id = env('CLIENT_ID')
    client_secret = env('CLIENT_SECRET')
    token_url = 'https://accounts.spotify.com/api/token'
    client_credentials = f'{client_id}:{client_secret}'
    client_b64 = base64.b64encode(client_credentials.encode())

    token_data = {
        'grant_type': 'client_credentials'
    }

    token_headers = {
        'Authorization': f'Basic {client_b64.decode()}'
    }

    req = requests.post(token_url, data=token_data, headers=token_headers)
    respone_data = req.json()
    token = respone_data['access_token']
    return token


def fetchAlbum(token):
    headers = {
        'Authorization': f'Bearer {token}'
    }
    endpoint = 'https://api.spotify.com/v1/search'
    data = urlencode(
        {
            'q': 'By Your Side',
            'type': 'track'
        }
    )

    lookup_url = f'{endpoint}?{data}'
    req = requests.get(lookup_url, headers=headers)
    response = req.json()
    return response


@api_view(['GET'])
def fetchData(request):
    token = getAccessToken()
    response = fetchAlbum(token)
    return Response(response)
