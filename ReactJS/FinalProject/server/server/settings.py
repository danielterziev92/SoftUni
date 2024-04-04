from datetime import timedelta
from pathlib import Path
import cloudinary

import server.product.apps
from decouple import config as de_config

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = 'django-insecure-u+fpwonwgyg^k7z-mri7@84rjz6ruo4py5vma)d2bzj4hkkz81'

DEBUG = True

ALLOWED_HOSTS = ('*',)

CSRF_TRUSTED_ORIGINS = ('https://localhost:8000', 'http://localhost:5173')

CORS_ALLOW_ALL_ORIGINS = True

CORS_ALLOW_CREDENTIALS = True

CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]

CORS_ALLOW_METHODS = [
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
]

CSRF_COOKIE_HTTPONLY = False

DJANGO_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
)

PROJECT_APPS = (
    'server.product.apps.ProductConfig',
    'server.user_app.apps.UserAppConfig',
)

THIRD_PARTY_APPS = (
    'rest_framework',
    'corsheaders',
)

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + PROJECT_APPS

MIDDLEWARE = (
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'server.user_app.middleware.SessionUpdateMiddleware',
)

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    )
}

ROOT_URLCONF = 'server.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates']
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'server.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATIC_URL = 'static/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'user_app.UserApp'

PASSWORD_RESET_TIMEOUT = 3 * 60 * 60

SESSION_EXPIRE_SECONDS = 30 * 24 * 60 * 60
SESSION_COOKIE_AGE = SESSION_EXPIRE_SECONDS

CSRF_COOKIE_SECURE = True

CSRF_COOKIE_SAMESITE = 'Lax'

# CLOUDINARY_STORAGE = {
#     'CLOUD_NAME': de_config('CLOUDINARY_CLOUD_NAME'),
#     'API_KEY': de_config('CLOUDINARY_API_KEY'),
#     'API_SECRET': de_config('CLOUDINARY_API_SECRET'),
# }
#
# cloudinary.config(
#     cloud_name=CLOUDINARY_STORAGE.get('CLOUD_NAME'),
#     api_key=CLOUDINARY_STORAGE.get('API_KEY'),
#     api_secret=CLOUDINARY_STORAGE.get('API_SECRET'),
# )
