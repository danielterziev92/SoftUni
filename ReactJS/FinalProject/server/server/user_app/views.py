from django.contrib.auth import get_user_model, authenticate, login, logout
from django.contrib.sessions.models import Session
from django.http import JsonResponse, Http404
from django.middleware.csrf import get_token
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie
from django.utils.decorators import method_decorator
from django.utils.translation import gettext_lazy as _

from rest_framework import generics as api_views, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response

from server.user_app.models import UserProfile, Company
from server.user_app.serializers import UserCreateSerializer, UserSerializer, UserLoginSerializer, UserProfileSerializer

UserModel = get_user_model()


class UserListView(api_views.ListAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer


@method_decorator(csrf_protect, name='dispatch')
class UserCreateView(api_views.CreateAPIView):
    permission_classes = (AllowAny,)

    queryset = UserModel.objects.all()
    serializer_class = UserCreateSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=self.request.data)
        email = serializer.initial_data.get('email')
        password = serializer.initial_data.get('password')
        re_password = serializer.initial_data.get('re_password')

        is_existing_user_by_email = UserModel.objects.filter(email=email).exists()

        if is_existing_user_by_email:
            return Response({'message': _('A user with this email already exists.')},
                            status=status.HTTP_400_BAD_REQUEST)

        if password != re_password:
            return Response({'message': _('Passwords do not match.')}, status=status.HTTP_400_BAD_REQUEST)

        if not serializer.is_valid():
            return

        validated_data = serializer.validated_data
        validated_data.pop('re_password', None)

        UserModel.objects.create_user(**validated_data)
        return Response({'message': _('User created successfully.')}, status=status.HTTP_201_CREATED)


@method_decorator(csrf_protect, name='dispatch')
class LoginView(api_views.GenericAPIView):
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

        user = authenticate(email=email, password=password)

        if user is None:
            return Response({'message': _('User does not exist.')}, status=status.HTTP_400_BAD_REQUEST)

        if not user.is_active:
            return Response(
                {'message': _('Your account is not active. Please contact with administrator.')},
                status=status.HTTP_403_FORBIDDEN
            )

        login(request, user)
        return Response({
            'message': _('Login successful.'),
            'user': {
                'id': user.pk,
                'email': user.email,
            },
        }, status=status.HTTP_200_OK)


@method_decorator(ensure_csrf_cookie, name='dispatch')
class LogoutView(api_views.GenericAPIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def post(self, request, *args, **kwargs):
        logout(request)

        response = JsonResponse({'message': 'You have been logged out.'})
        response.delete_cookie('csrftoken')

        return response


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFTokenView(api_views.GenericAPIView):
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        return Response(
            {
                'message': _('CSRF token is set at cookie.'),
                'csrfToken': get_token(request)
            }, status=status.HTTP_200_OK)


class CheckAuthenticationView(api_views.GenericAPIView):
    def get(self, request, *args, **kwargs):
        is_authenticated = request.user.is_authenticated

        if not is_authenticated:
            return Response(
                {
                    'message': _('Authentication credentials were not provided'),
                    'is_authenticated': True
                },
                status=status.HTTP_403_FORBIDDEN
            )

        return Response(
            {
                'message': _('User is authenticated.'),
                'is_authenticated': True
            }, status=status.HTTP_200_OK)


@method_decorator(csrf_protect, name='dispatch')
class UserInfoAPIView(api_views.RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)
    serializer_class = UserProfileSerializer

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

# class UserRetrieveUpdateView(api_views.RetrieveUpdateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = [IsAuthenticated]
#
#

#
#
# class UserProductsView(APIView):
#
#     def get(self, request, *args, **kwargs):
#         if request.user.is_authenticated:
#             serializer = AuthenticatedUserSerializer(request.user)
#         else:
#             # For unauthenticated users, retrieve all users and count of their products
#             users = User.objects.all()
#             data = UnauthenticatedUserSerializer(users, many=True).data
#             for user_data in data:
#                 user_data['product_count'] = ProductBaseInformation.objects.filter(user_id=user_data['id']).count()
#
#             return Response(data, status=status.HTTP_200_OK)
#
#         return Response(serializer.data, status=status.HTTP_200_OK)
