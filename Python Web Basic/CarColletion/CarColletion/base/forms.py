from django import forms
from django.core.exceptions import ValidationError

from CarColletion.base.models import Car
from CarColletion.base.models import Profile


class ProfileCreateForm(forms.ModelForm):
    def clean_username(self):
        username = self.cleaned_data.get('username')
        if len(username) < 2:
            raise ValidationError('The username must be a minimum of 2 chars')

        return username

    class Meta:
        model = Profile
        fields = ('username', 'email', 'age', 'password')


class ProfileForm(ProfileCreateForm):
    class Meta:
        model = Profile
        fields = '__all__'
        widgets = {
            'password': forms.TextInput(attrs={
                'type': 'password'
            })
        }
        labels = {
            'first_name': 'First Name',
            'last_name': 'Last Name',
            'profile_picture': 'Profile Picture',
        }


class CarForm(forms.ModelForm):
    class Meta:
        model = Car
        fields = '__all__'


class CarDeleteForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.__set_disabled_fields()

    def save(self, commit=True):
        if commit:
            self.instance.delete()
        return self.instance

    def __set_disabled_fields(self):
        for field in self.fields.values():
            field.widget.attrs['disabled'] = True
            field.required = False

    class Meta:
        model = Car
        fields = '__all__'
