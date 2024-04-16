from django.urls import path

from server.user_app.views.authentication import LoginView, LogoutView, CheckAuthenticationView
from server.user_app.views.user_list import UserListView
from server.user_app.views.user_info import UserInfoAPIView
from server.user_app.views.user_create import UserCreateView

urlpatterns = (
    path('all/', UserListView.as_view(), name='users-all'),
    path('create/', UserCreateView.as_view(), name='user_create'),
    path('login/', LoginView.as_view(), name='user_login'),
    path('logout/', LogoutView.as_view(), name='user_logout'),
    path('check-auth/', CheckAuthenticationView.as_view(), name='user_authentication'),
    path('user-info/', UserInfoAPIView.as_view(), name='user-info')
    # path('', UserProductsView.as_view(), name='index'),
    # path('token/', include([
    #     path('', AppTokenObtainPairView.as_view(), name='token_obtain_pair'),
    #     path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    #     path('blacklist/', TokenBlacklistView.as_view(), name='token_blacklist'),
    # ])),
    # path('user/', include([
    #     path('create/', UserCreateView.as_view(), name='user-create'),
    #     path('<int:pk>/', UserRetrieveUpdateView.as_view(), name='user-retrieve-update'),
    # ])),
    # path('users/', UserListView.as_view(), name='user-list'),
)
