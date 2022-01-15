from django.urls import path

from .views import PublicUserAPIView, PrivateUserAPIView, UserTokenView

app_name = 'account'

urlpatterns = [
    path('users/', PublicUserAPIView.as_view()),
    path('users/me/', PrivateUserAPIView.as_view()),
    path('token/obtain/', UserTokenView.as_view(), name='obtain_token'),
]