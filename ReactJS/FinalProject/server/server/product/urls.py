from django.urls import path

# from server.product.views import GroupListCreateView, GroupRetrieveUpdateDestroyView, ProductListView, ProductDetailView

urlpatterns = (
    path('groups/', GroupListCreateView.as_view(), name='group-list-create'),
    # path('groups/<int:pk>/', GroupRetrieveUpdateDestroyView.as_view(), name='group-retrieve-update-destroy'),
    # path('products/', ProductListView.as_view(), name='product-list-create'),
    # path('products/<int:pk>/', ProductDetailView.as_view(), name='product-retrieve-update-destroy'),
)
