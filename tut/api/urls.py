from django.urls import path
from .views import NoteView, CreateNoteView

urlpatterns = [
    path('note', NoteView.as_view()),
    path('create-note', CreateNoteView.as_view())
]
