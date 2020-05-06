from rest_framework import serializers
from ..models import PieceOfCopy


class PieceOfCopySerializer(serializers.ModelSerializer):
    class Meta:
        model = PieceOfCopy
        fields = '__all__'
