from django.urls import path,include
from rest_framework import routers
from CryptoCurrency import views
from rest_framework.documentation import include_docs_urls


router=routers.DefaultRouter()

router.register(r"crear",views.Cryptoview,"crear")

router.register(r"crea",views.CryptoHistoryView,"crea")

urlpatterns=[
   path("api/v1/",include(router.urls)),
  #  path("docs/",include_docs_urls(title="Documentacion",description="API_DESCRIPTION"))
 ]