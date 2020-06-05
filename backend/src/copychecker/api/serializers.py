from rest_framework import serializers
from ..models import PieceOfCopy, BadWord


class PieceOfCopySerializer(serializers.ModelSerializer):
    class Meta:
        model = PieceOfCopy
        fields = '__all__'

class BadWordSerializer(serializers.ModelSerializer):
    class Meta:
        model = BadWord
        fields = '__all__'
