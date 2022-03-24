from typing import Tuple
from django.db import models

# Create your models here.
class ToDo(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200, null=True)
    done = models.BooleanField(default=False)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    due = models.DateTimeField(null=True)