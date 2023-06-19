from django.urls import reverse_lazy
from django.views import generic as views

from CarColletion.base.forms import CarDeleteForm
from CarColletion.base.forms import ProfileCreateForm, ProfileForm, CarForm
from CarColletion.base.mixins import ProfileDataMixin
from CarColletion.base.models import Car, Profile


class IndexView(views.TemplateView):
    template_name = 'index.html'


class ProfileCreateView(views.CreateView):
    template_name = 'profile-create.html'
    model = Profile
    form_class = ProfileCreateForm
    success_url = reverse_lazy('catalogue')


class ProfileDetailsView(ProfileDataMixin, views.DetailView):
    template_name = 'profile-details.html'
    model = Profile


class ProfileUpdateView(ProfileDataMixin, views.UpdateView):
    template_name = 'profile-edit.html'
    model = Profile
    form_class = ProfileForm
    success_url = reverse_lazy('profile details')


class ProfileDeleteView(ProfileDataMixin, views.DeleteView):
    template_name = 'profile-delete.html'
    model = Profile
    success_url = reverse_lazy('index')

    def post(self, request, *args, **kwargs):
        [obj.delete() for obj in Car.objects.all()]
        return super().post(request, *args, **kwargs)


class CarCreateView(views.CreateView):
    template_name = 'car-create.html'
    model = Car
    form_class = CarForm
    success_url = reverse_lazy('catalogue')


class CarDetailsView(views.DetailView):
    template_name = 'car-details.html'
    model = Car


class CarUpdateView(views.UpdateView):
    template_name = 'car-edit.html'
    model = Car
    form_class = CarForm
    success_url = reverse_lazy('catalogue')


class CarDeleteView(CarUpdateView, views.DeleteView):
    template_name = 'car-delete.html'
    model = Car
    form_class = CarDeleteForm
    success_url = reverse_lazy('catalogue')

    def get_context_data(self, **kwargs):
        context_data = super(CarUpdateView, self).get_context_data(**kwargs)
        return context_data


class CarsListView(views.ListView):
    template_name = 'catalogue.html'
    model = Car
