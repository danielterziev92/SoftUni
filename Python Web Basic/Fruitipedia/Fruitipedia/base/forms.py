from django import forms

from Fruitipedia.base.models import Fruit, Profile


class ProfileCreateForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = '__all__'
        exclude = ('image_url', 'age',)
        widgets = {
            'first_name': forms.TextInput(attrs={
                'placeholder': 'First Name',
            }),
            'last_name': forms.TextInput(attrs={
                'placeholder': 'Last Name',
            }),
            'email': forms.EmailInput(attrs={
                'placeholder': 'Email',
            }),
            'password': forms.TextInput(attrs={
                'placeholder': 'Password',
                'type': 'password',
            })
        }


class ProfileEditForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = '__all__'
        labels = {
            'image_url': 'Image URL',
        }
        widgets = {
            'password': forms.TextInput(attrs={
                'type': 'password',
            })
        }


class FruitCreateForm(forms.ModelForm):
    class Meta:
        model = Fruit
        fields = '__all__'
        widgets = {
            'name': forms.TextInput(attrs={
                'id': 'name',
                'placeholder': 'Fruit Name',
            }),
            'image_url': forms.URLInput(attrs={
                'id': 'Fruit-image',
                'name': 'imageUrl',
                'placeholder': 'Fruit Image URL',
            }),
            'description': forms.Textarea(attrs={
                'id': 'fruit-description',
                'placeholder': 'Fruit Description',
                'rows': 10,
                'cols': 50,
            }),
            'nutrition': forms.Textarea(attrs={
                'id': 'fruit-nutrition',
                'placeholder': 'Nutrition Info',
                'rows': 10,
                'cols': 50,
            }),
        }


class FruitUpdateForm(forms.ModelForm):
    class Meta:
        model = Fruit
        fields = '__all__'
        labels = {
            'image_url': 'Image URL',
        }


class FruitDeleteForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.__disable_all_field()

    def __disable_all_field(self):
        for field in self.fields.values():
            field.widget.attrs['disabled'] = True
            field.required = False

    class Meta:
        model = Fruit
        fields = '__all__'
        labels = {
            'image_url': 'Image URL',
        }
