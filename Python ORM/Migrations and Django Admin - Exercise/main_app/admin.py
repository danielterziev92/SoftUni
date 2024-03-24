from django.contrib import admin

from main_app.models import EventRegistration, Movie, Student


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


@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'age', 'grade',)
    list_filter = ('age', 'grade', 'date_of_birth',)
    search_fields = ('first_name',)
    fieldsets = (
        ('Personal Information', {
            'fields': ('first_name', 'last_name', 'age', 'date_of_birth',)
        }),
        ('Academic Information', {
            'fields': ('grade',)
        })
    )
