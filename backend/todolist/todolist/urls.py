from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from todos.api import views

router = routers.DefaultRouter()
router.register('todos', views.TodoViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]