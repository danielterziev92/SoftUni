from django.http import Http404
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect
from django.utils.translation import gettext_lazy as _

from rest_framework import generics as api_views, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from server.company.models import Company
from server.user_app.mixins import UserInfoMixin


@method_decorator(csrf_protect, name='dispatch')
class UserInfoAPIView(api_views.RetrieveAPIView, UserInfoMixin):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request, *args, **kwargs):
        try:
            user_info = self.get_user_profile_data(request=request)
            company = Company.objects.filter(owner_id=user_info['id']).first()

            if not user_info:
                return Response(user_info, status=status.HTTP_200_OK)

            if not company:
                return Response(user_info, status=status.HTTP_200_OK)

            user_info['company_id'] = company.pk

            return Response(user_info, status=status.HTTP_200_OK)
        except Http404:
            return Response({'message': _('Session not found')}, status=status.HTTP_406_NOT_ACCEPTABLE)
