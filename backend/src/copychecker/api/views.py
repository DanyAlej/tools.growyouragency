from rest_framework.generics import (RetrieveAPIView, 
ListAPIView, 
CreateAPIView,
UpdateAPIView,
DestroyAPIView)
from ..models import PieceOfCopy, BadWord
from .serializers import PieceOfCopySerializer, BadWordSerializer
from rest_framework import viewsets


class PieceOfCopyViewSet(viewsets.ModelViewSet):
    serializer_class = PieceOfCopySerializer
    queryset = PieceOfCopy.objects.all()

class BadWordViewSet(viewsets.ModelViewSet):
    serializer_class = BadWordSerializer
    queryset = BadWord.objects.all()