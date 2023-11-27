from rest_framework_simplejwt.views import TokenObtainPairView

from server.user_app.serializers import AppTokenObtainPairSerializer


class AppTokenObtainPairView(TokenObtainPairView):
    serializer_class = AppTokenObtainPairSerializer
