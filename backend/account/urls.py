from django.urls import path

from .views import PublicUserAPIView, UserTokenView

app_name = 'account'

urlpatterns = [
    path('user/', PublicUserAPIView.as_view(), name='user'),
    path('token/obtain/', UserTokenView.as_view(), name='obtain_token'),
]