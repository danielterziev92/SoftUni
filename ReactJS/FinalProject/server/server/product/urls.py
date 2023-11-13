from django.urls import path

from server.product.groups.views import GroupListView, GroupDetailView, GroupCreateView
from server.product.product_base_info.views import ProductListView, ProductDetailView, ProductCreateView

urlpatterns = (
    path('groups/', GroupListView.as_view(), name='group-list'),
    path('group/<int:pk>/', GroupDetailView.as_view(), name='group-detail'),
    path('group/create/', GroupCreateView.as_view(), name='group-create'),
    path('products/', ProductListView.as_view(), name='product-list'),
    path('product/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('product/create/', ProductCreateView.as_view(), name='product-create'),
)
