from django import template

from MyPlantsApp.base.common import get_all_plant_types

register = template.Library()


@register.simple_tag(name='plant_type')
def get_plant_type(value):
    types = get_all_plant_types()
    return types[value]


@register.simple_tag(name='range_count')
def get_range(value: int):
    return [x for x in range(value)]
