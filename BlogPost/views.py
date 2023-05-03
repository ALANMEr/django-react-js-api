from rest_framework import viewsets
from .serializer import BlogPostSerializer
from .models import BlogPost
# Create your views here.
class BlogView(viewsets.ModelViewSet):
    serializer_class= BlogPostSerializer
    queryset=BlogPost.objects.all()
