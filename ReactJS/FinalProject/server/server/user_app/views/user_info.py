from django.contrib.auth import get_user_model
from django.contrib.sessions.models import Session
from django.http import Http404
from django.shortcuts import get_object_or_404
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect

from rest_framework import generics as api_views, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from server.company.models import Company
from server.user_app.models import UserProfile

UserModel = get_user_model()


@method_decorator(csrf_protect, name='dispatch')
class UserInfoAPIView(api_views.RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request, *args, **kwargs):
        try:
            session_id = request.COOKIES.get('sessionid')
            session = get_object_or_404(Session, session_key=session_id)

            user_pk = session.get_decoded().get('_auth_user_id')

            user = get_object_or_404(UserModel, pk=user_pk)
            user_profile = UserProfile.objects.filter(user_id=user_pk).first()
            company = Company.objects.filter(owner_id=user_pk).first()

            user_info = {
                'id': user_pk,
                'email': user.email,
            }

            if not user_profile:
                return Response(user_info, status=status.HTTP_200_OK)

            user_info['first_name'] = user_profile.first_name
            user_info['last_name'] = user_profile.last_name
            user_info['phone'] = user_profile.phone

            if not company:
                return Response(user_info, status=status.HTTP_200_OK)

            user_info['company_name'] = company.name

            return Response(user_info, status=status.HTTP_200_OK)
        except Http404:
            return Response({'message': 'Session not found'}, status=status.HTTP_406_NOT_ACCEPTABLE)
