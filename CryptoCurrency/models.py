from django.db import models

# Create your models here.
class CryptoCurrency (models.Model):
    name=models.CharField(max_length=500)
    image=models.ImageField(upload_to='CryptoCurrency/images/')
    def __str__(self):
        return self.name



class CryptoCurrencyHistory (models.Model):
    currency_name=models.ForeignKey(CryptoCurrency,on_delete=models.CASCADE)
    date=models.DateField()
    price=models.DecimalField(max_digits=15,decimal_places=2)   

   
    def __str__(self):
       return f'Name of money: {self.currency_name}'

        