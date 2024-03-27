# from django import forms
# from django.contrib import admin
# from django.core.exceptions import ValidationError
#
# from server.product.models import Object, Group, Unit, Product, ProductBarcode, Barcode
#
#
# @admin.register(Object)
# class ObjectAdmin(admin.ModelAdmin):
#     list_display = ('name', 'is_active')
#     search_fields = ('name',)
#
#
# @admin.register(Group)
# class GroupAdmin(admin.ModelAdmin):
#     list_display = ('code', 'name', 'get_full_path')
#     list_display_links = ('name',)
#
#     def get_full_path(self, obj):
#         def _get_full_path(group):
#             if group.parent_category:
#                 return _get_full_path(group.parent_category) + ' > ' + group.name
#             return group.name
#
#         if obj.parent_category:
#             return _get_full_path(obj.parent_category)
#         return obj.name
#
#     get_full_path.short_description = 'Parent category'
#
#
# @admin.register(Unit)
# class UnitAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name',)
#     list_display_links = ('name',)
#     ordering = ('id',)
#
#
# # @admin.register(Product)
# # class ProductAdmin(admin.ModelAdmin):
# #
#
#
# @admin.register(Barcode)
# class BarcodeAdmin(admin.ModelAdmin):
#     list_display = ['barcode']
#     search_fields = ['barcode']
#
#
# class ProductBarcodeInline(admin.TabularInline):
#     model = ProductBarcode
#     extra = 1
#     autocomplete_fields = ['barcodes']
#
#
# @admin.register(Product)
# class ProductAdmin(admin.ModelAdmin):
#     list_display = ('code', 'name', 'type', 'vat_group', 'measure', 'group', 'updated_at', 'is_active',)
#     list_filter = ('group', 'type', 'measure', 'vat_group', 'is_active')
#     list_display_links = ('name',)
#     search_fields = ('code', 'name', 'barcodes__barcode')
#     ordering = ('code', '-updated_at')
#     inlines = [ProductBarcodeInline]
#
#     fieldsets = (
#         ('Basic Information', {
#             'fields': ('code', 'name',)
#         }),
#         ('More Details', {
#             'fields': ('type', 'vat_group', 'measure', 'group', 'is_active',)
#         }),
#     )
#
# # @admin.register(ProductBarcode)
# # class ProductBarcodeAdmin(admin.ModelAdmin):
# #     list_display = ('barcode', 'product')
# #     search_fields = ('barcode', 'product__code', 'product__name')
