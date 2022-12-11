from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
import base64
from urllib.parse import urlencode
import environ


# initializing the environment variables 

env = environ.Env()
environ.Env.read_env()


# Create your views here.

def getAccessToken():
    client_id = env('CLIENT_ID')
    client_secret = env('CLIENT_SECRET')
    token_url = 'https://accounts.spotify.com/api/token'
    
    # encoding the client credentials
    client_credentials = f'{client_id}:{client_secret}'
    client_b64 = base64.b64encode(client_credentials.encode())

    token_data = {'grant_type': 'client_credentials'}
    token_headers = {'Authorization': f'Basic {client_b64.decode()}'}

    req = requests.post(token_url, data=token_data, headers=token_headers)
    respone_data = req.json()
    token = respone_data['access_token']
    return token


def makeSearchCall(token, searchQuery: str, filter: str):
    endpoint = 'https://api.spotify.com/v1/search'
    headers = {'Authorization': f'Bearer {token}'}
    data = urlencode({'q': searchQuery, 'type': filter})
    lookup_url = f'{endpoint}?{data}'
    req = requests.get(lookup_url, headers=headers)
    response = req.json()
    response = response['artists']['items'][0]
    return response

def searchForGivenPlaylist(token, category):
    endpoint = f'https://api.spotify.com/v1/browse/categories/{category}/playlists'
    headers = {'Authorization': f'Bearer {token}', 'Content-Type': 'application/json'}
    req = requests.get(endpoint, headers=headers)
    response = req.json()
    return response



@api_view(['GET'])
def fetchArtist(request):
    token = getAccessToken()
    artist = makeSearchCall(token, 'Drake', 'artist')
    required_response = dict()
    required_response['name'] = artist['name']
    required_response['images'] = artist['images']
    required_response['genres'] = artist['genres']
    return Response(artist)


@api_view(['GET'])
def fetchCategoryPlaylist(request):
    token = getAccessToken()
    playlist = searchForGivenPlaylist(token, 'workout')
    return Response(playlist)