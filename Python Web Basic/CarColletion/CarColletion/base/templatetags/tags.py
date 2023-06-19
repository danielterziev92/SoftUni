from django import template

from CarColletion.base.models import Car, Profile

register = template.Library()


@register.simple_tag(name='profile_name')
def get_profile_name(value: Profile):
    if value.first_name and value.last_name:
        return value.get_full_name()

    if value.first_name:
        return value.first_name

    if value.last_name:
        return value.last_name

    return False


@register.simple_tag(name='cars_count')
def get_cars_count():
    return Car.objects.all().count()


@register.simple_tag(name='cars_total_amount')
def get_cars_total_amount():
    result = sum([float(car.price) for car in Car.objects.all()])
    return f'{result:.3f}'
