from enum import StrEnum
from random import randint

import logging

from django.db.models.functions import Length
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.request import Request
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


def _get_prompt_model_class(prompt_type: str):
    match (prompt_type):
        case PromptType.LINE:
            return Line
        case PromptType.LOCATION:
            return Location
        case PromptType.CHARACTER:
            return Character
        case PromptType.EMOTION:
            return Emotion
        case PromptType.RELATIONSHIP:
            return Relationship
        case _:
            return None


class MatchingPromptsEndpoint(APIView):
    def get(self, request):
        value = request.GET.get('value')
        prompt_type = request.GET.get('prompt_type')

        if not value:
            return Response({"error": "No value provided"})
        if not prompt_type:
            return Response({"error": "No prompt type provided"})

        prompt_model = _get_prompt_model_class(prompt_type)
        if not prompt_model:
            return Response({"error": f"Invalid prompt type ({prompt_type}))"})

        prompts = prompt_model.objects.filter(name__icontains=value).order_by(Length('name').asc())
        prompts = prompts[:5] if len(prompts) > 5 else prompts
        return Response(
            {
                "status": 200,
                "search_value": value,
                "matching_prompts": [prompt.name for prompt in prompts],
            }
        )


class CreateNewPromptEndpoint(APIView):
    def post(self, request: Request):
        request_schema = CreateNewPromptSerializer(data=request.data)
        request_schema.is_valid(raise_exception=True)
        request_data = request_schema.data
        value = request_data['value'].strip()
        prompt_type = request_data['prompt_type']

        prompt_model = _get_prompt_model_class(prompt_type)
        if not prompt_model:
                return Response({"error": "Invalid prompt type"})

        new_line, created = prompt_model.objects.get_or_create(name=value)
        return Response(
            {
                "created": created,
                "new_line": new_line.name,
                "status": 200,
            }
        )


class PromptType(StrEnum):
    LINE = "line"
    LOCATION = "location"
    CHARACTER = "character"
    EMOTION = "emotion"
    RELATIONSHIP = "relationship"

    @classmethod
    def values(cls):
        return [item.value for item in cls]


class CreateNewPromptSerializer(serializers.Serializer):
    value = serializers.CharField(max_length=200, allow_blank=False, allow_null=False)
    prompt_type = serializers.CharField(max_length=50, allow_blank=False, allow_null=False)

    def validate_prompt_type(self, value):
        if value not in PromptType.values():
            raise serializers.ValidationError("Invalid prompt type")
        return value
