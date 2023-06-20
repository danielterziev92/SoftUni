from django.urls import include, path

from GamePlay.base.views import IndexView, DashboardListView, ProfileCrateView, ProfileDetailView, ProfileUpdateView, \
    ProfileDeleteView, GameCreateView, GameDetailView, GameUpdateView, GameDeleteView

urlpatterns = (
    path('', IndexView.as_view(), name='index'),
    path('dashboard', DashboardListView.as_view(), name='dashboard'),
    path('profile/', include([
        path('create/', ProfileCrateView.as_view(), name='profile create'),
        path('details/', ProfileDetailView.as_view(), name='profile details'),
        path('edit/', ProfileUpdateView.as_view(), name='profile edit'),
        path('delete/', ProfileDeleteView.as_view(), name='profile delete'),
    ])),
    path('game/', include([
        path('create/', GameCreateView.as_view(), name='game create'),
        path('details/<int:pk>/', GameDetailView.as_view(), name='game details'),
        path('edit/<int:pk>/', GameUpdateView.as_view(), name='game edit'),
        path('delete/<int:pk>/', GameDeleteView.as_view(), name='game delete'),
    ])),
)
