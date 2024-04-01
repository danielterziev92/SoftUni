from django.contrib import admin

from server.user_app.models import UserApp, UserProfile, Company, CompanyMembers


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
        }),
    )

    def get_groups(self, obj):
        return ", ".join([group.name for group in obj.groups.all()])

    get_groups.short_description = 'Groups'


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('get_email', 'first_name', 'last_name', 'get_phone_number')
    readonly_fields = ('get_email', 'user')

    fieldsets = (
        ('User Profile', {
            'fields': ('user',)
        }),
        ('Personal Info', {
            'fields': ('first_name', 'last_name', 'phone')
        })
    )

    def get_email(self, obj):
        return obj.user.email

    def get_phone_number(self, obj):
        return f'+359{obj.phone}'

    get_email.short_description = 'email'

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return ['get_email', 'user']
        else:
            return []


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'owner', 'town',)
    search_fields = ('name', 'owner',)
    list_per_page = 20


@admin.register(CompanyMembers)
class CompanyMembersAdmin(admin.ModelAdmin):
    list_display = ('company', 'get_all_members')

    def get_all_members(self, obj):
        return ", ".join([str(member) for member in obj.members.all()])

    get_all_members.short_description = 'All members'
