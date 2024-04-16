from django.http import Http404
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect

from rest_framework import generics as api_views, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from server.company.models import Company
from server.core.mixins.session_mixin import SessionMixin
from server.user_app.models import UserProfile


@method_decorator(csrf_protect, name='dispatch')
class UserInfoAPIView(api_views.RetrieveAPIView, SessionMixin):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request, *args, **kwargs):
        try:
            user = SessionMixin.get_user_pk(session_id=request.COOKIES.get('sessionid'))
            user_profile = UserProfile.objects.filter(user_id=user.pk).first()
            company = Company.objects.filter(owner_id=user.pk).first()

            user_info = {
                'id': user.pk,
                'email': user.email,
            }

            if not user_profile:
                return Response(user_info, status=status.HTTP_200_OK)

            user_info['first_name'] = user_profile.first_name
            user_info['last_name'] = user_profile.last_name
            user_info['phone'] = user_profile.phone
            user_info['picture_url'] = f'{user_profile.picture_url.url}.jpg' or ''

            if not company:
                return Response(user_info, status=status.HTTP_200_OK)

            user_info['company_id'] = company.pk

            return Response(user_info, status=status.HTTP_200_OK)
        except Http404:
            return Response({'message': 'Session not found'}, status=status.HTTP_406_NOT_ACCEPTABLE)
