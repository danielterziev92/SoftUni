from django.contrib.auth import get_user_model

from rest_framework import generics as api_views

from server.user_app.serializers import UserSerializer

UserModel = get_user_model()


class UserListView(api_views.ListAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
