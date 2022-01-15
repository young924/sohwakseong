from .serializers import UserSerializer, AuthTokenSerializer

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.settings import api_settings
from rest_framework.authtoken.views import ObtainAuthToken

from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404


class PublicUserAPIView(APIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        user_id = request.query_params.get('user_id')
        word = request.query_params.get('word')
        if not (user_id or word):
            msg = 'user_id 혹은 word 쿼리스트링을 포함하여 요청을 보내주세요.'
            return Response({'msg': msg}, status=status.HTTP_400_BAD_REQUEST)
        
        if user_id:
            user = get_user_model().objects.filter(id=user_id)
        if word:
            user = get_user_model().objects.filter(nickname__contains=word)

        serializer = UserSerializer(user, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class PrivateUserAPIView(APIView):

    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserTokenView(ObtainAuthToken):
    serializer_class = AuthTokenSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES
