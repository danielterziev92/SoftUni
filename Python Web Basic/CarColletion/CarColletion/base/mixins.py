from CarColletion.base.models import Profile


class ProfileDataMixin(object):
    def get(self, request, *args, **kwargs):
        self.kwargs['pk'] = Profile.objects.first().pk
        return super().get(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        self.kwargs['pk'] = Profile.objects.first().pk
        return super().post(request, *args, **kwargs)
