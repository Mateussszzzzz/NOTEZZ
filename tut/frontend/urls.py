from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('account', index),
    path('create', index),
    path('settings', index)
]
