from django.db import models


class Location(models.Model):
    name = models.CharField(max_length=200, unique=True)


class Character(models.Model):
    name = models.CharField(max_length=200, unique=True)


class Relationship(models.Model):
    name = models.CharField(max_length=200, unique=True)


class Emotion(models.Model):
    name = models.CharField(max_length=200, unique=True)


class Line(models.Model):
    name = models.CharField(max_length=200, unique=True)
