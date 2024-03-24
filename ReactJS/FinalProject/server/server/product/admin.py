from django.contrib import admin

from server.product.models import Object


@admin.register(Object)
class ObjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_active')
    search_fields = ('name',)
