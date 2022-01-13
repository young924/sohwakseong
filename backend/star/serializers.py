from django.contrib.auth import get_user_model

from rest_framework import serializers

from .models import StarItem, Star
from account.serializers import UserSerializer


class StarItemSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = StarItem
        fields = ['id', 'title', 'emoticon']
        read_only_fields = ('id',)


class StarSerializer(serializers.ModelSerializer):
    item = serializers.PrimaryKeyRelatedField(
                queryset=StarItem.objects.all()
                )

    class Meta:
        model = Star
        fields = ['id', 'item', 'target_number', 'is_completed', 'yaw', 'pitch']
        read_only_fields = ('id', 'is_completed')


class StarListSerializer(serializers.ModelSerializer):
    item = StarItemSerializer(read_only=True)
    
    class Meta:
        model = Star
        fields = ['id', 'item', 'target_number', 'is_completed', 'yaw', 'pitch']
        read_only_fields = ('id', 'item', 'is_completed')
