from rest_framework import serializers
from .models import CryptoCurrency,CryptoCurrencyHistory

class CurrencySerializer(serializers.ModelSerializer):
    class Meta:
        model=CryptoCurrency
        fields='__all__'

class CurrencyHistorytSerializer(serializers.ModelSerializer):
    class Meta:
        model=CryptoCurrencyHistory
        fields='__all__'        


