from django.urls import path
from .views import StarItemAPIView, StarAPIView, DailyAchvToggleAPIView

app_name = 'star'

urlpatterns = [
    path('star-items/', StarItemAPIView.as_view(), name='star_items'),
    path('stars/', StarAPIView.as_view(), name='stars'),
    path('daily-achvs/', DailyAchvToggleAPIView.as_view(), name='daily_achvs'),
]