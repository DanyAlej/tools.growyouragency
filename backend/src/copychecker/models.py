from django.db import models

# Create your models here.


class PieceOfCopy(models.Model):
    headline = models.CharField(max_length=120, blank=True)
    body = models.TextField(blank=False)
    approved = models.BooleanField(default=True, blank=False)
    description = models.CharField(max_length=240, blank=True)
    # creative = models.ImageField(
    # upload_to='media/', height_field=None, width_field=None, max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.headline

class BadWord(models.Model):
    badword = models.CharField(max_length=30, blank=False)
    synonim = models.CharField(max_length=30, blank=False)
    synonim2 = models.CharField(max_length=30, blank=True)
    synonim3 = models.CharField(max_length=30, blank=True)
    synonim4 = models.CharField(max_length=30, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.headline
