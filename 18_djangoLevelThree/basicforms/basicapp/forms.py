from django import forms
from django.core import validators

## create a personalized validator from validators
# def check_for_z(value):
#     if value[0].lower() != 'z':
#         raise forms.ValidationError("Name deeds to start with Z")
#     ## add to the class field:
#     ## name= forms.CharField(validators=[check_for_z])

class FormName(forms.Form):
    name= forms.CharField()
    email = forms.EmailField()
    verify_email = forms.EmailField(label="Enter your email again:")
    text=forms.CharField(widget=forms.Textarea)

    ## add a validator parameter to avoid the clean method
    botcatcher = forms.CharField(required=False,widget=forms.HiddenInput, validators=[validators.MaxLengthValidator(0)])

    ## catch a bot with clean for a specific validation
    # def clean_botcatcher(self):
    #     botcatcher = self.cleaned_data['botcatcher']
    #     if len(botcatcher) > 0:
    #         raise forms.ValidationError("Gotcha Bot")
    #     return botcatcher

    ## use clean to the entire form
    def clean(self):
        all_clean_data = super().clean()
        email = all_clean_data['email']
        vmail = all_clean_data['verify_email']

        if email != vmail:
            raise forms.ValidationError("MAKE SURE EMAILS MATCH")