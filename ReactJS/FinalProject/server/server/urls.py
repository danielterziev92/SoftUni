from django.contrib import admin
from django.urls import path, include

from server.user_app.views import GetCSRFTokenView

urlpatterns = (
    path('admin/', admin.site.urls),
    path('api/crsf-token/', GetCSRFTokenView.as_view(), name='csrf_token'),
    path('api-auth/', include('rest_framework.urls')),
    path('api/user/', include('server.user_app.urls')),

    # path('api/', include('server.product.urls')),
    # path('api/', include('server.user_app.urls')),
)
