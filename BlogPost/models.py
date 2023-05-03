from django.db import models

# Create your models here.
class BlogPost(models.Model):
    title=models.CharField(max_length=500)
    link=models.URLField(blank=True)