from django.db import models
from django.contrib.auth.models import AbstractUser

class Users(AbstractUser):
    username = models.CharField(max_length=200,null=True)
    password = models.CharField(max_length=200,null=True)
    status = models.IntegerField(null=True)

    def __str__(self):
        return self.username, self.password, self.status


class AdwData(models.Model):
    refresh_token = models.CharField(max_length=200,null=True)
    customer_id = models.CharField(max_length=200,null=True)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE,null=True)


