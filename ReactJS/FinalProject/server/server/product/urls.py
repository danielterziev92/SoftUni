from django.urls import path

from server.product.views import GroupListCreateView, GroupRetrieveUpdateDestroyView

urlpatterns = (
    path('groups/', GroupListCreateView.as_view(), name='group-list-create'),
    path('groups/<int:pk>', GroupRetrieveUpdateDestroyView.as_view(), name='group-retrieve-update-destroy'),
)
