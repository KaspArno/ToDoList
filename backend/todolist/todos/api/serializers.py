from rest_framework import serializers

from todos.models import ToDo

class ToDoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ToDo
        fields = ['name', 'description', 'done', 'created', 'updated', 'due']