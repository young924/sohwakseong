from rest_framework import serializers

from django.contrib.auth import get_user_model, authenticate


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ['nickname', 'password']
        extra_kwargs = {'password': {'write_only': True, 'min_length': 4}}

    def create(self, validated_data):
        return get_user_model().objects.create_user(**validated_data)


class AuthTokenSerializer(serializers.Serializer):
    nickname = serializers.CharField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False
    )

    def validate(self, attrs):
        nickname = attrs.get('nickname')
        password = attrs.get('password')

        user = authenticate(
            request=self.context.get('request'),
            nickname=nickname,
            password=password,
        )

        if not user:
            msg = {'인증 오류': '아이디 혹은 비밀번호가 틀렸습니다.'}
            raise serializers.ValidationError(msg, code='authentication')

        attrs['user'] = user
        return attrs
