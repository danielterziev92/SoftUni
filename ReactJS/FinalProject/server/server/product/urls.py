from django.urls import path

from server.product.groups.views import GroupListView, GroupDetailView, GroupCreateView

urlpatterns = (
    path('groups/', GroupListView.as_view(), name='group-list'),
    path('group/<int:pk>/', GroupDetailView.as_view(), name='group-detail'),
    path('group/create/', GroupCreateView.as_view(), name='group-create'),
)
