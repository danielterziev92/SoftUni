from django.utils import timezone
from datetime import timedelta
from django.conf import settings


class SessionUpdateMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.user.is_authenticated:
            new_expiry_date = timezone.now() + timedelta(seconds=settings.SESSION_EXPIRE_SECONDS)
            request.session.set_expiry(new_expiry_date)

        response = self.get_response(request)
        return response
