from django.contrib.auth import get_user_model
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect

from rest_framework import generics as api_views
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated

from server.user_app.serializers import UserUpdateSerializer

UserModel = get_user_model()


@method_decorator(csrf_protect, name='dispatch')
class UserUpdateAPIView(api_views.UpdateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserUpdateSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get_object(self):
        return self.request.user
