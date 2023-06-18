from django import forms

from MyPlantsApp.base.models import Plant, Profile


class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = '__all__'
        widgets = {
            'username': forms.TextInput(
                attrs={'minlength': Profile.USERNAME_MIN_LENGTH, 'maxlength': Profile.USERNAME_MAX_LENGTH}
            )
        }


class ProfileCreateForm(ProfileForm):
    class Meta:
        model = Profile
        fields = '__all__'
        exclude = ('profile_picture',)


class PlantForm(forms.ModelForm):
    class Meta:
        model = Plant
        fields = '__all__'
        labels = {
            'image_url': 'Image URL',
        }
