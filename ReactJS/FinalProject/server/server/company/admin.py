from django.contrib import admin

from server.company.models import Company, CompanyMembers


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
