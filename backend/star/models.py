from django.db import models
from django.conf import settings


class StarItem(models.Model):
    # 별마켓에 등록되는 소확성
    title = models.CharField(max_length=100)
    emoticon = models.CharField(max_length=1)


class Star(models.Model):
    # 별마켓에서 별을 담을 때 생성되는 소확성
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='stars'
        )
    item = models.ForeignKey(
        StarItem,
        on_delete=models.CASCADE,
        related_name='stars'
        )
    target_number = models.IntegerField()
    is_completed = models.BooleanField(default=False)
    coordinate1 = models.FloatField(null=True, blank=True)
    coordinate2 = models.FloatField(null=True, blank=True)
    


class DailyAchv(models.Model):
    # Daily Achievement : 하루 성취 / 그날 그날 달성 여부를 나타내는 모델
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='daily_achvs'
    )
    star = models.ForeignKey(
        Star,
        on_delete=models.CASCADE,
        related_name='daily_achvs'
    )
    date = models.DateField()
