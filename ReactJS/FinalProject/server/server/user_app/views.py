from django.contrib.auth import get_user_model
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect, ensure_csrf_cookie
from django.utils.translation import gettext_lazy as _

from rest_framework import generics as api_views, serializers, status
from rest_framework import permissions
from rest_framework.response import Response

from server.user_app.serializers import UserCreateSerializer, UserSerializer

UserModel = get_user_model()


class UserListView(api_views.ListAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer


@method_decorator(csrf_protect, name='dispatch')
class UserCreateView(api_views.CreateAPIView):
    permission_classes = (permissions.AllowAny,)

    queryset = UserModel.objects.all()
    serializer_class = UserCreateSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=self.request.data)
        email = serializer.initial_data.get('email')
        password = serializer.initial_data.get('password')
        re_password = serializer.initial_data.get('re_password')

        is_existing_user_by_email = UserModel.objects.filter(email=email).exists()

        if is_existing_user_by_email:
            raise serializers.ValidationError({'message': _('A user with this email already exists')})

        if password != re_password:
            raise serializers.ValidationError({'message': _('Passwords do not match')})

        if not serializer.is_valid():
            return

        validated_data = serializer.validated_data
        validated_data.pop('re_password', None)

        UserModel.objects.create_user(**validated_data)
        return Response({'message': _('User created successfully')}, status=status.HTTP_201_CREATED)


@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFTokenView(api_views.GenericAPIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, *args, **kwargs):
        return Response({'success': 'CSRF token is set at cookie'})

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
