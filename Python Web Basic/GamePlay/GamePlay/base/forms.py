from django import forms

from GamePlay.base.models import Profile, Game


class ProfileCreateForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ('email', 'age', 'password',)
        widgets = {
            'password': forms.PasswordInput(attrs={
                'autocomplete': 'off',
            }),
        }


class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = '__all__'
        widgets = {
            'password': forms.TextInput(attrs={
                'type': 'password',
            }),
        }
        labels = {
            'first_name': 'First Name',
            'last_name': 'Last Name',
            'profile': 'Profile Picture',
        }


class GameCreateForm(forms.ModelForm):
    class Meta:
        model = Game
        fields = '__all__'
        labels = {
            'max_level': 'Max Level',
            'image_url': 'Image URL',
        }


class GameForm(forms.ModelForm):
    class Meta:
        model = Game
        fields = '__all__'


class GameDeleteForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.__disable_all_field()

    def __disable_all_field(self):
        for field in self.fields.values():
            field.widget.attrs['disabled'] = True
            field.required = False

    class Meta:
        model = Game
        fields = '__all__'
