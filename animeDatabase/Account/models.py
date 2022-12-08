from django.db import models

class compte(models.Model):
    pseudo_text = models.CharField(max_length=50)
    motdepasse_text = models.CharField(max_length=50)

# Efrei - EfreiAnime