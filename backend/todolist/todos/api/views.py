from rest_framework import viewsets
from todos.api.serializers import ToDoSerializer

from todos.models import ToDo

class TodoViewSet(viewsets.ModelViewSet):
    queryset = ToDo.objects.all().order_by('-created')
    serializer_class = ToDoSerializer