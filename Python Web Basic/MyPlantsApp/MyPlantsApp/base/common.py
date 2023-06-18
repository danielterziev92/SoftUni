from MyPlantsApp.base.models import Plant
from MyPlantsApp.base.models import Profile


def get_all_plant_types():
    types = {}
    for key, value in Plant.TYPE_CHOICES.get_all_choices():
        types[key] = value

    return types


class UserDataMixin(object):
    def get(self, request, *args, **kwargs):
        self.kwargs['pk'] = Profile.objects.all().first().pk
        return super().get(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        self.kwargs['pk'] = Profile.objects.all().first().pk
        return super().post(request, *args, **kwargs)
