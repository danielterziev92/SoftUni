from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect

from rest_framework import generics as api_views, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from server.core.mixins.session_mixin import SessionMixin

from server.user_app.models import UserProfile


@method_decorator(csrf_protect, name='dispatch')
class DeleteUserProfilePicture(api_views.DestroyAPIView, SessionMixin):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def delete(self, request, *args, **kwargs):
        try:
            user_pk = self.get_user_pk(session_id=request.COOKIES.get('sessionid'))
            user = UserProfile.objects.get(user_id=user_pk)

            if not user.picture_url and user.picture_url == '':
                return Response({'message': 'Profile do not have a picture profile'}, status=status.HTTP_204_NO_CONTENT)

            user.picture_url = None
            user.save()

            return Response({'message': 'Profile picture deleted successfully'}, status=status.HTTP_200_OK)
        except UserProfile.DoesNotExist:
            return Response({'message': 'Profile does not exist'}, status=status.HTTP_404_NOT_FOUND)
