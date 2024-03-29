from django.urls import path

from server.user_app.views import UserListView, UserCreateView, GetCSRFTokenView

urlpatterns = (
    path('/', UserListView.as_view(), name='users_all'),
    path('create/', UserCreateView.as_view(), name='user_create'),

    path('crsf_cookie/', GetCSRFTokenView.as_view(), name='csrf_token')
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
