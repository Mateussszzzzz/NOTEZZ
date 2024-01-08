from rest_framework import serializers
from .models import Note


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('id', 'code', 'host'
                  , 'created_at')


class CreateNoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('host',)
