from rest_framework.generics import RetrieveAPIView, ListAPIView
from ..models import PieceOfCopy
from .serializers import PieceOfCopySerializer


class PieceOfCopyListView(ListAPIView):
    queryset = PieceOfCopy.objects.all()
    serializer_class = PieceOfCopySerializer


class PieceOfCopyDetailView(RetrieveAPIView):
    queryset = PieceOfCopy.objects.all()
    serializer_class = PieceOfCopySerializer
