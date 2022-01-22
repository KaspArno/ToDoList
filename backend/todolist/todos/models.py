from django.db import models

# Create your models here.
class ToDo(models.Model):
    description = models.CharField(max_length=200)
    done = models.BooleanField(default=False)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    due = models.DateTimeField(null=True)