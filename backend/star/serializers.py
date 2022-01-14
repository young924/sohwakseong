from django.contrib.auth import get_user_model

from rest_framework import serializers

from .models import DailyAchv, StarItem, Star
from account.serializers import UserSerializer


class StarItemSerializer(serializers.ModelSerializer):
    user_count = serializers.SerializerMethodField()
    
    class Meta:
        model = StarItem
        fields = ['id', 'title', 'emoticon', 'user_count']
        read_only_fields = ('id',)

    def get_user_count(self, obj):
        return obj.stars.count()


class StarCreateSerializer(serializers.ModelSerializer):
    item = serializers.PrimaryKeyRelatedField(
                queryset=StarItem.objects.all()
                )

    class Meta:
        model = Star
        fields = ['id', 'item', 'target_number', 'is_completed', 'yaw', 'pitch']
        read_only_fields = ('id', 'is_completed')


class StarListSerializer(serializers.ModelSerializer):
    achv_rate = serializers.SerializerMethodField()
    item = StarItemSerializer(read_only=True)
    
    class Meta:
        model = Star
        fields = ['id', 'item', 'target_number', 'is_completed', 'yaw', 'pitch', 'achv_rate']
        read_only_fields = ('id', 'item', 'is_completed')

    def get_achv_rate(self, obj):
        current_achvs = obj.daily_achvs.count()
        target_achvs = obj.target_number
        print(current_achvs / target_achvs)
        return int(current_achvs / target_achvs * 100)
