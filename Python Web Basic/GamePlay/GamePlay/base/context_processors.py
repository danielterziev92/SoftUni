from GamePlay.base.models import Profile


def get_profile(request):
    return {'profile': Profile.objects.first()}
