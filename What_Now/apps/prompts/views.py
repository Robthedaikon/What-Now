from random import randint

from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from What_Now.apps.prompts.models import Location, Relationship, Emotion, Character, Line


# Create your views here.
class RandomLocationPromptEndpoint(APIView):
    def get(self, request, *args, **kwargs):
        locations = Location.objects.all()
        random_id = randint(0, len(locations) - 1)
        location = locations[random_id]
        return Response(
            {
                "id": location.id,
                "name": location.name,
            }
        )


class RandomCharacterPromptEndpoint(APIView):
    def get(self, request, *args, **kwargs):
        characters = Character.objects.all()
        random_id = randint(0, len(characters) - 1)
        character = characters[random_id]
        return Response(
            {
                "id": character.id,
                "name": character.name,
            }
        )


class RandomEmotionPromptEndpoint(APIView):
    def get(self, request, *args, **kwargs):
        emotions = Emotion.objects.all()
        random_id = randint(0, len(emotions) - 1)
        emotion = emotions[random_id]
        return Response(
            {
                "id": emotion.id,
                "name": emotion.name,
            }
        )


class RandomRelationshipPromptEndpoint(APIView):
    def get(self, request, *args, **kwargs):
        relationships = Relationship.objects.all()
        random_id = randint(0, len(relationships) - 1)
        relationship = relationships[random_id]
        return Response(
            {
                "id": relationship.id,
                "name": relationship.name,
            }
        )


class RandomLinePromptEndpoint(APIView):
    def get(self, request, *args, **kwargs):
        lines = Line.objects.all()
        random_id = randint(0, len(lines) - 1)
        line = lines[random_id]
        return Response(
            {
                "id": line.id,
                "name": line.name,
            }
        )