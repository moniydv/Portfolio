from django.shortcuts import render

# Create your views here.
from projects.models import Project, Blog
from rest_framework import viewsets
from .serializers import ProjectSerializer, BlogSerializer

# Project Info viewset
# allows us to create a CRUD api without specifying methods for functionality

class ProjectView(viewsets.ModelViewSet):

    queryset = Project.objects.filter(show=True)
    serializer_class = ProjectSerializer


class BlogView(viewsets.ModelViewSet):

    queryset = Blog.objects.all() 
    serializer_class = BlogSerializer