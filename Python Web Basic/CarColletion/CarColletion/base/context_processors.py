from CarColletion.base.models import Profile


def get_user_profile(request):
    return {'profile': Profile.objects.first()}
