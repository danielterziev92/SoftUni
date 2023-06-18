from django.urls import include, path

from MyPlantsApp.base.views import CatalogueListView, PlantCreateView, ProfileCreateView, IndexView, PlantDetailView, \
    PlantDeleteView, PlantEditView, ProfileDetailView, ProfileUpdateView, ProfileDeleteView

urlpatterns = (
    path('', IndexView.as_view(), name='home page'),
    path('profile/', include([
        path('create/', ProfileCreateView.as_view(), name='profile create page'),
        path('details/', ProfileDetailView.as_view(), name='profile details page'),
        path('edit/', ProfileUpdateView.as_view(), name='profile edit page'),
        path('delete/', ProfileDeleteView.as_view(), name='profile delete page'),
    ])),
    path('catalogue/', CatalogueListView.as_view(), name='catalogue'),
    path('create/', PlantCreateView.as_view(), name='plant create page'),
    path('detail/<int:pk>', PlantDetailView.as_view(), name='plant details page'),
    path('edit/<int:pk>', PlantEditView.as_view(), name='plant edit page'),
    path('delete/<int:pk>', PlantDeleteView.as_view(), name='plant delete page'),
)
