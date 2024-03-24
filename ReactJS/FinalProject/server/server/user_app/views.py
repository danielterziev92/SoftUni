# from rest_framework import generics as api_views, serializers, status, viewsets
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework_simplejwt.views import TokenObtainPairView
#
# from server.product.models import ProductBaseInformation
# from server.user_app.serializers import AppTokenObtainPairSerializer, UserSerializer, UserCreateSerializer, \
#     AuthenticatedUserSerializer, UnauthenticatedUserSerializer
#
# from django.contrib.auth.models import User
#
#
# class AppTokenObtainPairView(TokenObtainPairView):
#     serializer_class = AppTokenObtainPairSerializer
#
#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=self.request.data)
#
#         username = serializer.initial_data.get('username')
#         password = serializer.initial_data.get('password')
#
#         if not username or not password:
#             raise serializers.ValidationError({'message': 'Попълнете всички полета'})
#
#         try:
#             user = User.objects.get(username=username)
#         except User.DoesNotExist:
#             raise serializers.ValidationError({'message': 'Потребител с това потребителско име не съществува'})
#
#         if not user.check_password(password):
#             raise serializers.ValidationError({'message': 'Грешна парола'})
#
#         return super().post(request, *args, **kwargs)
#
#
# class UserCreateView(api_views.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserCreateSerializer
#
#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=self.request.data)
#         username = serializer.initial_data.get('username')
#         email = serializer.initial_data.get('email')
#         password = serializer.initial_data.get('password')
#
#         existing_user_by_username = User.objects.filter(username=username).exists()
#         existing_user_by_email = User.objects.filter(email=email).exists()
#
#         if existing_user_by_username:
#             raise serializers.ValidationError({'message': 'Потребител с това потребителско име съществува'})
#
#         if existing_user_by_email:
#             raise serializers.ValidationError({'message': 'Потребител с този емейл съществува'})
#
#         if not serializer.is_valid():
#             return
#
#         validated_data = serializer.validated_data
#         User.objects.create_user(**validated_data)
#         return Response({'message': 'Data is valid'}, status=status.HTTP_200_OK)
#
#
# class UserRetrieveUpdateView(api_views.RetrieveUpdateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = [IsAuthenticated]
#
#
# class UserListView(api_views.ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
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
