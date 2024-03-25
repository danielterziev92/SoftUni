from django.contrib import admin

from server.user_app.models import UserApp


@admin.register(UserApp)
class UserAppAdmin(admin.ModelAdmin):
    list_display = ('email', 'is_staff', 'is_superuser', 'get_groups', 'date_created', 'last_login')
    readonly_fields = ('last_login',)
    search_fields = ('email',)
    list_per_page = 20

    fieldsets = (
        ('Personal info', {
            'fields': ('email', 'password')
        }),
        ('Permissions', {
            'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions',)
        })
    )

    def get_groups(self, obj):
        return ", ".join([group.name for group in obj.groups.all()])

    get_groups.short_description = 'Groups'
