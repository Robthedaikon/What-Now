

"""
URL configuration for What_Now project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from What_Now.apps.prompts.views import RandomLocationPromptEndpoint, RandomCharacterPromptEndpoint, RandomEmotionPromptEndpoint, RandomRelationshipPromptEndpoint, RandomLinePromptEndpoint

urlpatterns = [
    path('admin/', admin.site.urls),
    path('prompt/location/random/', RandomLocationPromptEndpoint.as_view(), name="random-location-prompt"),
    path('prompt/character/random/', RandomCharacterPromptEndpoint.as_view(), name="random-character-prompt"),
    path('prompt/emotion/random/', RandomEmotionPromptEndpoint.as_view(), name="random-emotion-prompt"),
    path('prompt/relationship/random/', RandomRelationshipPromptEndpoint.as_view(), name="random-relationship-prompt"),
    path('prompt/line/random/', RandomLinePromptEndpoint.as_view(), name="random-line-prompt"),
]
