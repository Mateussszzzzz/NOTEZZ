from django.shortcuts import render
from rest_framework import generics, status
from .serializers import NoteSerializer, CreateNoteSerializer
from .models import Note
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.


class NoteView(generics.ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


class CreateNoteView(APIView):
    serializer_class = CreateNoteSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            host = serializer.data.get('host')
            queryset = Note.objects.filter(host=host)
            if queryset.exists():
                room = queryset[0]
                room.host = host
                room.save(update_fields=['host'])
                return Response(NoteSerializer(room).data, status=status.HTTP_200_OK)
            else:
                room = Note(host=host)
                room.save()
                return Response(NoteSerializer(room).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
