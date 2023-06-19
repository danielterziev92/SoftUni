from django.urls import include, path

from CarColletion.base.views import IndexView, ProfileCreateView, ProfileDetailsView, ProfileUpdateView, \
    ProfileDeleteView, CarsListView, CarCreateView, CarDetailsView, CarUpdateView, CarDeleteView

urlpatterns = (
    path('', IndexView.as_view(), name='index'),
    path('profile/', include([
        path('create/', ProfileCreateView.as_view(), name='profile create'),
        path('details/', ProfileDetailsView.as_view(), name='profile details'),
        path('edit/', ProfileUpdateView.as_view(), name='profile edit'),
        path('delete/', ProfileDeleteView.as_view(), name='profile delete'),
    ])),
    path('car/create', CarCreateView.as_view(), name='car create'),
    path('car/<int:pk>/', include([
        path('details', CarDetailsView.as_view(), name='car details'),
        path('edit', CarUpdateView.as_view(), name='car edit'),
        path('delete', CarDeleteView.as_view(), name='car delete'),
    ])),
    path('catalogue', CarsListView.as_view(), name='catalogue'),
)
