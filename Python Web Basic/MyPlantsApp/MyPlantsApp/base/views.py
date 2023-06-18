from django.urls import reverse_lazy
from django.views import generic as views

from MyPlantsApp.base.common import UserDataMixin
from MyPlantsApp.base.forms import PlantForm, ProfileCreateForm, ProfileForm
from MyPlantsApp.base.models import Plant, Profile


class IndexView(views.TemplateView):
    template_name = 'home-page.html'


class ProfileCreateView(views.CreateView):
    template_name = 'create-profile.html'
    form_class = ProfileCreateForm
    success_url = reverse_lazy('catalogue')


class ProfileDetailView(UserDataMixin, views.DetailView):
    template_name = 'profile-details.html'
    model = Profile
    extra_context = {
        'plants': Plant.objects.all()
    }


class ProfileUpdateView(UserDataMixin, views.UpdateView):
    template_name = 'edit-profile.html'
    form_class = ProfileForm
    success_url = reverse_lazy('profile details page')

    def get_queryset(self):
        return Profile.objects.all()


class ProfileDeleteView(UserDataMixin, views.DeleteView):
    template_name = 'delete-profile.html'
    model = Profile
    success_url = reverse_lazy('home page')


class CatalogueListView(views.ListView):
    template_name = 'catalogue.html'

    def get_queryset(self):
        return Plant.objects.all()


class PlantCreateView(views.CreateView):
    template_name = 'create-plant.html'
    form_class = PlantForm
    success_url = reverse_lazy('catalogue')


class PlantDetailView(views.DetailView):
    template_name = 'plant-details.html'
    model = Plant


class PlantEditView(views.UpdateView):
    template_name = 'edit-plant.html'
    form_class = PlantForm
    model = Plant
    success_url = reverse_lazy('catalogue')


class PlantDeleteView(views.DeleteView):
    template_name = 'delete-plant.html'
    model = Plant
    success_url = reverse_lazy('catalogue')
