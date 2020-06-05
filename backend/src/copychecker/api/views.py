from rest_framework.generics import (RetrieveAPIView, 
ListAPIView, 
CreateAPIView,
UpdateAPIView,
DestroyAPIView)
from ..models import PieceOfCopy, BadWord
from .serializers import PieceOfCopySerializer, BadWordSerializer
from rest_framework import viewsets


""" class PieceOfCopyListView(ListAPIView):
    queryset = PieceOfCopy.objects.all()
    serializer_class = PieceOfCopySerializer


class PieceOfCopyDetailView(RetrieveAPIView):
    queryset = PieceOfCopy.objects.all()
    serializer_class = PieceOfCopySerializer

class PieceOfCopyCreateView(CreateAPIView):
    queryset = PieceOfCopy.objects.all()
    serializer_class = PieceOfCopySerializer

class PieceOfCopyUpdateView(UpdateAPIView):
    queryset = PieceOfCopy.objects.all()
    serializer_class = PieceOfCopySerializer

class PieceOfCopyDeleteView(DestroyAPIView):
    queryset = PieceOfCopy.objects.all()
    serializer_class = PieceOfCopySerializer """

class PieceOfCopyViewSet(viewsets.ModelViewSet):
    serializer_class = PieceOfCopySerializer
    queryset = PieceOfCopy.objects.all()

class BadWordViewSet(viewsets.ModelViewSet):
    serializer_class = BadWordSerializer
    queryset = BadWord.objects.all()