from django.urls import path, include

from rest_framework_simplejwt.views import TokenRefreshView, TokenBlacklistView

from server.user_app.views import AppTokenObtainPairView, UserCreateView, UserRetrieveUpdateView, UserListView, \
    UserProductsView

urlpatterns = (
    path('', UserProductsView.as_view(), name='index'),
    path('token/', include([
        path('', AppTokenObtainPairView.as_view(), name='token_obtain_pair'),
        path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
        path('blacklist/', TokenBlacklistView.as_view(), name='token_blacklist'),
    ])),
    path('user/', include([
        path('create/', UserCreateView.as_view(), name='user-create'),
        path('<int:pk>/', UserRetrieveUpdateView.as_view(), name='user-retrieve-update'),
    ])),
    path('users/', UserListView.as_view(), name='user-list'),
)
