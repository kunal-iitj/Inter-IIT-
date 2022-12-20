from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
import base64
from urllib.parse import urlencode
import environ
import json
import random

# initializing the environment variables 

env = environ.Env()
environ.Env.read_env()




# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    base_url = 'http://127.0.0.1:8000/'
    routes = { 
        'artist': f'{base_url}api/artists/',
        'genres': f'{base_url}api/genres/',
        'featured_playlist': f'{base_url}api/featuredPlaylist'
    }

    return Response(routes)


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


def fetchArtist(request, givenArtist):
    token = getAccessToken()
    artist = makeSearchCall(token, givenArtist, 'artist')
    required_response = dict()
    required_response['name'] = artist['name']
    required_response['images'] = artist['images']
    required_response['genres'] = artist['genres']
    return required_response


@api_view(['GET'])
def fetchRecommendedArtists(request):
    givenArtists = ['Drake', 'Weekend']
    responseList  = []
    for artist in givenArtists:
        responseList.append(fetchArtist(request, artist))
    return Response(responseList)


@api_view(['GET'])
def fetchGenres(request):
    token = getAccessToken()
    endpoint = 'https://api.spotify.com/v1/recommendations/available-genre-seeds'
    headers = {'Authorization': f'Bearer {token}', 'Content-Type': 'application/json'}
    req = requests.get(endpoint, headers=headers)
    response = req.json()
    resulting_genres = response['genres']
    required_response = random.sample(resulting_genres, 10)
    final_response = {'genres': required_response}
    return Response(final_response)


@api_view(['GET'])
def fetchFeaturedPlaylists(request):
    token = getAccessToken()
    endpoint = 'https://api.spotify.com/v1/browse/featured-playlists'
    headers = {'Authorization': f'Bearer {token}', 'Content-Type': 'application/json'}
    req = requests.get(endpoint, headers=headers)
    response = req.json()
    return Response(response)
