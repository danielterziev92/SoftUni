from django.urls import path, include

from server.product.groups.views import GroupListView, GroupDetailView, GroupCreateView
from server.product.product_addit_info.views import ProductInfoDetailView, ProductInfoCreateView
from server.product.product_base_info.views import ProductListView, ProductDetailView, ProductCreateView

urlpatterns = (
    path('groups/', GroupListView.as_view(), name='group-list'),
    path('group/<int:pk>/', GroupDetailView.as_view(), name='group-detail'),
    path('group/create/', GroupCreateView.as_view(), name='group-create'),
    path('products/', ProductListView.as_view(), name='product-list'),
    path('product/<int:pk>/', include([
        path('', ProductDetailView.as_view(), name='product-detail'),
        path('product/<int:pk>/info/', ProductInfoDetailView.as_view(), name='product-info-detail'),
        path('product/<int:pk>/info/create/', ProductInfoCreateView.as_view(), name='product-info-create'),
    ])),
    path('product/create/', ProductCreateView.as_view(), name='product-create'),
)

# endpoint /product/<int:pk>/barcodes to have GET, PATCH and DELETE methods
# endpoint /product/<int:pk>/barcodes/create to have only CREATE method
