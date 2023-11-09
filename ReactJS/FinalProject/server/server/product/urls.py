from django.urls import path

from server.product.views import GroupListView, GroupCreateView, GroupRetrieveView, GroupUpdateView, GroupDeleteView

urlpatterns = (
    path('groups/', GroupListView.as_view(), name='group-list'),
    path('groups/create', GroupCreateView.as_view(), name='group-create'),
    path('groups/<int:pk>', GroupRetrieveView.as_view(), name='group-retrieve'),
    path('groups/<int:pk>/update', GroupUpdateView.as_view(), name='group-update'),
    path('groups/<int:pk>/delete', GroupDeleteView.as_view(), name='group-delete'),
)
