from django.urls import path
from .views import StarItemAPIView, StarAPIView, FriendStarAPIView, DailyAchvToggleAPIView

app_name = 'star'

urlpatterns = [
    path('star-items/', StarItemAPIView.as_view(), name='star_items'),
    path('stars/', StarAPIView.as_view(), name='stars'),
    path('users/<int:user_id>/stars/', FriendStarAPIView.as_view(), name='stars'),
    path('daily-achvs/', DailyAchvToggleAPIView.as_view(), name='daily_achvs'),
]