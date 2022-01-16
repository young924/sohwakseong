from django.urls import path
from .views import StarItemAPIView, StarAPIView, FriendStarAPIView, \
                   DailyAchvToggleAPIView, StarDeleteAPIView

app_name = 'star'

urlpatterns = [
    path('star-items/', StarItemAPIView.as_view(), name='star_items'),
    path('stars/', StarAPIView.as_view(), name='stars'),
    path('stars/<int:star_id>', StarDeleteAPIView.as_view(), name='delete_star'),
    path('users/<int:user_id>/stars/', FriendStarAPIView.as_view(), name='friend_stars'),
    path('daily-achvs/', DailyAchvToggleAPIView.as_view(), name='daily_achvs'),
]