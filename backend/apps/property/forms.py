from django.forms import ModelForm
from apps.property.models import Property


class PropertyForm(ModelForm):
    class Meta:
        model = Property
        fields = (
            "title",
            "description",
            "price_per_day",
            "bedrooms",
            "bathrooms",
            "guests",
            "country",
            "country_code",
            "category",
            "image",
        )
