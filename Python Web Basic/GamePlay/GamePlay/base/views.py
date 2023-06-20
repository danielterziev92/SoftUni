from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
from django.views import generic as views

from GamePlay.base.forms import GameDeleteForm
from GamePlay.base.forms import ProfileCreateForm, GameCreateForm, GameForm
from GamePlay.base.forms import ProfileForm
from GamePlay.base.mixins import ProfileUserDataMixin
from GamePlay.base.models import Profile, Game


class IndexView(views.TemplateView):
    template_name = 'home-page.html'


class DashboardListView(views.ListView):
    template_name = 'dashboard.html'
    model = Game


class ProfileCrateView(views.CreateView):
    template_name = 'create-profile.html'
    form_class = ProfileCreateForm
    success_url = reverse_lazy('index')


class ProfileDetailView(ProfileUserDataMixin, views.DetailView):
    template_name = 'details-profile.html'
    model = Profile


class ProfileUpdateView(ProfileUserDataMixin, views.UpdateView):
    template_name = 'edit-profile.html'
    form_class = ProfileForm
    model = Profile
    success_url = reverse_lazy('profile details')


class ProfileDeleteView(ProfileUserDataMixin, views.DeleteView):
    template_name = 'delete-profile.html'
    model = Profile
    success_url = reverse_lazy('index')

    def form_valid(self, form):
        for game in Game.objects.all():
            game.delete()

        return super().form_valid(form=form)


class GameCreateView(views.CreateView):
    template_name = 'create-game.html'
    form_class = GameCreateForm
    success_url = reverse_lazy('dashboard')


class GameDetailView(views.DetailView):
    template_name = 'details-game.html'
    model = Game


class GameUpdateView(views.UpdateView):
    template_name = 'edit-game.html'
    form_class = GameForm
    model = Game
    success_url = reverse_lazy('dashboard')


class GameDeleteView(GameUpdateView, views.DeleteView):
    template_name = 'delete-game.html'
    form_class = GameDeleteForm
    model = Game
    success_url = reverse_lazy('dashboard')

    def get_context_data(self, **kwargs):
        context_data = super(GameUpdateView, self).get_context_data(**kwargs)
        return context_data

    def form_valid(self, form):
        success_url = self.get_success_url()
        self.object.delete()
        return HttpResponseRedirect(success_url)
