from django.urls import path, include

from Fruitipedia.base.views import IndexView, DashboardView, FruitCreateView, FruitDetailView, FruitEditView, \
    FruitDeleteView, ProfileCreateView, ProfileDetailView, ProfileEditView, ProfileDeleteView

urlpatterns = (
    path('', IndexView.as_view(), name='index'),
    path('dashboard/', DashboardView.as_view(), name='dashboard'),
    path('create/', FruitCreateView.as_view(), name='fruit create'),
    path('<int:pk>/', include([
        path('details/', FruitDetailView.as_view(), name='fruit details'),
        path('edit/', FruitEditView.as_view(), name='fruit edit'),
        path('delete/', FruitDeleteView.as_view(), name='fruit delete'),
    ])),
    path('profile/', include([
        path('create/', ProfileCreateView.as_view(), name='profile create'),
        path('details/', ProfileDetailView.as_view(), name='profile details'),
        path('edit/', ProfileEditView.as_view(), name='profile edit'),
        path('delete/', ProfileDeleteView.as_view(), name='profile delete'),
    ])),
)
