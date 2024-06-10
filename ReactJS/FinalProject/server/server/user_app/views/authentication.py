from django.contrib.auth import authenticate, login, logout, get_user_model
from django.middleware.csrf import get_token
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie
from django.utils.translation import gettext_lazy as _

from rest_framework import generics as api_views, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from server.user_app.mixins import UserInfoMixin
from server.user_app.serializers import UserLoginSerializer

UserModel = get_user_model()


@method_decorator(csrf_protect, name='dispatch')
class LoginView(api_views.GenericAPIView, UserInfoMixin):
    permission_classes = (AllowAny,)
    authentication_classes = (SessionAuthentication,)
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=self.request.data)
        email = serializer.initial_data.get('email')
        password = serializer.initial_data.get('password')

        if not email:
            return Response({'message': _('Email is not provided.')}, status=status.HTTP_400_BAD_REQUEST)

        if not password:
            return Response({'message': _('Password is not provided.')}, status=status.HTTP_400_BAD_REQUEST)

        if not UserModel.objects.filter(email=email).exists():
            return Response({'message': _('Email is not registered.')}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(email=email, password=password)

        if user is None:
            return Response({'message': _('The password entered is not correct.')}, status=status.HTTP_400_BAD_REQUEST)

        if not user.is_active:
            return Response(
                {'message': _('Your account is not active. Please contact with administrator.')},
                status=status.HTTP_403_FORBIDDEN
            )

        login(request, user)
        user_data = self.get_user_basic_data(user=user)
        return Response({
            'message': _('Login successful.'),
            'user': user_data,
        }, status=status.HTTP_200_OK)


@method_decorator(ensure_csrf_cookie, name='dispatch')
class LogoutView(api_views.GenericAPIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return Response({'message': _('User is not authenticated.')}, status=status.HTTP_401_UNAUTHORIZED)

        logout(request)

        return Response({'message': _('You have been logged out.')})


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFTokenView(api_views.GenericAPIView):
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        return Response({'csrfToken': get_token(request)}, status=status.HTTP_200_OK)


@method_decorator(csrf_protect, name='dispatch')
class CheckAuthenticationView(api_views.RetrieveAPIView):
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        session_id = request.COOKIES.get('sessionid')
        is_authenticated = request.user.is_authenticated

        if not session_id or not is_authenticated:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

        return Response({'isAuthenticated': True}, status=status.HTTP_200_OK)
