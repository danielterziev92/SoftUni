from django.urls import path

from server.user_app.views.authentication import LoginView, LogoutView, CheckAuthenticationView
from server.user_app.views.user_delete import DeleteUserProfilePicture
from server.user_app.views.user_list import UserListView
from server.user_app.views.user_info import UserInfoAPIView
from server.user_app.views.user_create import UserCreateView
from server.user_app.views.user_update import UserUpdateAPIView

urlpatterns = (
    path('all/', UserListView.as_view(), name='users-all'),
    path('create/', UserCreateView.as_view(), name='user-create'),
    path('login/', LoginView.as_view(), name='user-login'),
    path('logout/', LogoutView.as_view(), name='user-logout'),
    path('check-auth/', CheckAuthenticationView.as_view(), name='user-authentication'),
    path('info/', UserInfoAPIView.as_view(), name='user-info'),
    path('edit/', UserUpdateAPIView.as_view(), name='user-edit'),
    path('delete-profile-picture/', DeleteUserProfilePicture.as_view(), name='user-delete-profile-picture'),
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
