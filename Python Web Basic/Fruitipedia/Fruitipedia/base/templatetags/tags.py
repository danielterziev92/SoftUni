from django import template

from Fruitipedia.base.models import Fruit

register = template.Library()


@register.simple_tag(name='posts_count')
def get_posts_count():
    return Fruit.objects.all().count()
