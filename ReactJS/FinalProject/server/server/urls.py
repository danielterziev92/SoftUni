from django.contrib import admin
from django.urls import path, include

urlpatterns = (
    path('admin/', admin.site.urls),
    # path('api/', include('server.product.urls')),
    # path('api/', include('server.user_app.urls')),
)
