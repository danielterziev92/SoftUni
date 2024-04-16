from django.contrib.auth import get_user_model
from django.contrib.sessions.models import Session
from django.shortcuts import get_object_or_404

UserModel = get_user_model()


class SessionMixin:
    @staticmethod
    def get_user_pk(session_id):
        session = get_object_or_404(Session, session_key=session_id)

        user_pk = session.get_decoded().get('_auth_user_id')

        user = get_object_or_404(UserModel, pk=user_pk)

        return user
