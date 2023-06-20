from django import template

from GamePlay.base.models import Game
from GamePlay.base.models import Profile

register = template.Library()


@register.simple_tag(name='profile_name')
def get_profile_name(profile: Profile):
    if profile.first_name and profile.last_name:
        return f'{profile.first_name} {profile.last_name}'

    if profile.first_name:
        return profile.first_name

    if profile.last_name:
        return profile.last_name


@register.simple_tag(name='all_games')
def get_total_games():
    return Game.objects.all().count()


@register.simple_tag(name='average_rating')
def get_average_rating_games():
    result = []
    for game in Game.objects.all():
        result.append(game.rating)

    if not result:
        return '0.0'

    return sum(result) / len(result)
