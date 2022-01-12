from django.urls import path

from .views import PublicUserAPIView, UserTokenView

urlpatterns = [
    path('user/', PublicUserAPIView.as_view(), name='user'),
    path('token/obtain/', UserTokenView.as_view(), name='obtain_token'),
]