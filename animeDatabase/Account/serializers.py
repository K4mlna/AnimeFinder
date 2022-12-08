from rest_framework import serializers
from Account.models import compte

class CompteFlowSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = compte
        fields = ['pseudo_text', 'motdepasse_text']