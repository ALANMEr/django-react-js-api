from rest_framework import viewsets
from .serializer import CurrencySerializer,CurrencyHistorytSerializer
from .models import CryptoCurrency,CryptoCurrencyHistory
# Create your views here.
class Cryptoview(viewsets.ModelViewSet):
    serializer_class= CurrencySerializer
    queryset=CryptoCurrency.objects.all()


class CryptoHistoryView(viewsets.ModelViewSet):
    serializer_class= CurrencyHistorytSerializer
    queryset=CryptoCurrencyHistory.objects.all()



