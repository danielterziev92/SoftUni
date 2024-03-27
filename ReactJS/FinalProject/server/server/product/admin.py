from django.contrib import admin

from server.product.models import Object, Group, Unit


@admin.register(Object)
class ObjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_active')
    search_fields = ('name',)


@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    list_display = ('code', 'name', 'get_full_path')
    list_display_links = ('name',)

    def get_full_path(self, obj):
        def _get_full_path(group):
            if group.parent_category:
                return _get_full_path(group.parent_category) + ' > ' + group.name
            return group.name

        if obj.parent_category:
            return _get_full_path(obj.parent_category)
        return obj.name

    get_full_path.short_description = 'Parent category'


@admin.register(Unit)
class UnitAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)
    list_display_links = ('name',)
    ordering = ('id',)

# @admin.register(Product)
# class ProductAdmin(admin.ModelAdmin):
#     list_display = ('code', 'name', 'delivery_price', 'is_active', 'group',)
