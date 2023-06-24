from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
from django.views import generic as views

from Fruitipedia.base.forms import FruitCreateForm, FruitUpdateForm, FruitDeleteForm, ProfileCreateForm
from Fruitipedia.base.forms import ProfileEditForm
from Fruitipedia.base.mixins import ProfileUserDataMixin
from Fruitipedia.base.models import Fruit, Profile


class IndexView(views.TemplateView):
    template_name = 'index.html'


class DashboardView(views.ListView):
    template_name = 'dashboard.html'
    model = Fruit


class FruitCreateView(views.CreateView):
    template_name = 'create-fruit.html'
    form_class = FruitCreateForm
    success_url = reverse_lazy('dashboard')


class FruitDetailView(views.DetailView):
    template_name = 'details-fruit.html'
    model = Fruit


class FruitEditView(views.UpdateView):
    template_name = 'edit-fruit.html'
    form_class = FruitUpdateForm
    model = Fruit
    success_url = reverse_lazy('dashboard')


class FruitDeleteView(FruitEditView, views.DeleteView):
    template_name = 'delete-fruit.html'
    form_class = FruitDeleteForm
    model = Fruit
    success_url = reverse_lazy('dashboard')

    def get_context_data(self, **kwargs):
        context_data = super(FruitEditView, self).get_context_data(**kwargs)
        return context_data

    def form_valid(self, form):
        success_url = self.get_success_url()
        self.object.delete()
        return HttpResponseRedirect(success_url)


class ProfileCreateView(views.CreateView):
    template_name = 'create-profile.html'
    form_class = ProfileCreateForm
    success_url = reverse_lazy('dashboard')


class ProfileDetailView(ProfileUserDataMixin, views.DetailView):
    template_name = 'details-profile.html'
    model = Profile


class ProfileEditView(ProfileUserDataMixin, views.UpdateView):
    template_name = 'edit-profile.html'
    form_class = ProfileEditForm
    model = Profile
    success_url = reverse_lazy('profile details')


class ProfileDeleteView(ProfileUserDataMixin, views.DeleteView):
    template_name = 'delete-profile.html'
    model = Profile
    success_url = reverse_lazy('index')

    def form_valid(self, form):
        for fruit in Fruit.objects.all():
            fruit.delete()

        return super().form_valid(form=form)
