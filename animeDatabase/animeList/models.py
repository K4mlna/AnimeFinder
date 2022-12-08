from django.db import models

class anime(models.Model):
    name_text = models.CharField(max_length=200)
    note = models.IntegerField(default=0)