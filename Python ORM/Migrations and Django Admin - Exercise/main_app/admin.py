from django.contrib import admin

from main_app.models import EventRegistration, Movie


@admin.register(EventRegistration)
class EventRegistrationAdmin(admin.ModelAdmin):
    list_display = ('event_name', 'participant_name', 'registration_date',)
    list_filter = ('event_name', 'registration_date',)
    search_fields = ('event_name', 'participant_name',)


@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ('title', 'director', 'release_year', 'genre',)
    list_filter = ('release_year', 'genre',)
    search_fields = ('title', 'director',)
