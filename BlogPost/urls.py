from django.urls import path,include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from BlogPost import views

router=routers.DefaultRouter()
router.register(r"blogs",views.BlogView,"blog")

urlpatterns=[
  path("api/v1/",include(router.urls)),
  path("docs/",include_docs_urls(title="Documentation"))
 ]