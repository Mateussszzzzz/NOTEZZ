from django.db import models
import string
import random


def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Note.objects.filter(code=code).count() == 0:
            break

    return code


class Note(models.Model):
    code = models.CharField(
        max_length=8, default=generate_unique_code, unique=True)
    host = models.CharField(max_length=50, unique=True, default='' )
    created_at = models.DateTimeField(auto_now_add=True)
