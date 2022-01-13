from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

from .serializers import StarItemSerializer, StarSerializer, StarListSerializer
from .models import StarItem, Star


class StarItemAPIView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        serializer = StarItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        filter = request.query_params.get('filter')
        word = request.query_params.get('word')
        # filter 쿼리스트링은 all(전체 조회) 아니면 search(검색)이어야 한다.
        if not (filter and (filter in ['all', 'search'])):
            msg = '잘못된 요청입니다. 올바른 filter 쿼리스트링을 포함하여 요청을 보내주세요.'
            return Response({'msg': msg}, status=status.HTTP_400_BAD_REQUEST)
        # 검색하는 경우에는, 검색어가 없으면 안 됨
        elif (filter == 'search' and not word):
            msg = '잘못된 요청입니다. 검색어를 담은 word 쿼리스트링이 포함되어야 합니다.'
            return Response({'msg': msg}, status=status.HTTP_400_BAD_REQUEST)
        
        if filter == 'all':
            star_items = StarItem.objects.all()
        elif filter == 'search':
            star_items = StarItem.objects.filter(title__contains=word)

        serializer = StarItemSerializer(star_items, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class StarAPIView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        serializer = StarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        filter = request.query_params.get('filter')
        user_id = request.query_params.get('user_id')
        date = request.query_params.get('date')
        # filter 쿼리스트링은 me(마이페이지) user_id(유저 검색) 아니면 calendar(달력용)이어야 한다.
        if not (filter and (filter in ['me', 'user_id', 'calendar'])):
            msg = '잘못된 요청입니다. 올바른 filter 쿼리스트링을 포함하여 요청을 보내주세요.'
            return Response({'msg': msg}, status=status.HTTP_400_BAD_REQUEST)
        # 유저 검색하는 경우에는, 유저 id가 없으면 안 됨
        elif (filter == 'user_id' and not user_id):
            msg = '잘못된 요청입니다. 유저 id를 담은 user_id 쿼리스트링이 포함되어야 합니다.'
            return Response({'msg': msg}, status=status.HTTP_400_BAD_REQUEST)
        elif (filter == 'calendar' and not date):
            msg = '잘못된 요청입니다. 유저 날짜를 담은 date 쿼리스트링이 포함되어야 합니다.'
            return Response({'msg': msg}, status=status.HTTP_400_BAD_REQUEST)

        if filter == 'calendar':
            uncompleted_stars_list = []
            completed_stars_list = []
            uncompleted_stars = request.user.stars.all().filter(is_completed=False)
            for star in uncompleted_stars:
                is_achieved = bool(star.daily_achvs.filter(date=date))
                star_data = {
                    'id': star.id,
                    'title': star.item.title,
                    'is_achieved': is_achieved
                    }
                uncompleted_stars_list.append(star_data)
            daily_achvs = request.user.daily_achvs.all().filter(date=date
                          ).filter(star__is_completed=True)
            for achv in daily_achvs:
                star_data = {
                    'id': achv.star.id,
                    'title': achv.star.item.title,
                    'is_achieved': True
                }
                completed_stars_list.append(star_data)
            result = {
                'uncompleted_stars': uncompleted_stars_list,
                'completed_stars': completed_stars_list,
                }
            return Response(result, status=status.HTTP_200_OK)

        if filter == 'me':
            stars = request.user.stars.all()
        if filter == 'user_id':
            stars = Star.objects.filter(user__id=user_id)
        serializer = StarListSerializer(stars, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
