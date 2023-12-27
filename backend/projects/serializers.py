from rest_framework import serializers
from projects.models import Project, Blog

# project serializer

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ['name','description','github','demo','image']

class BlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = ['title','cover_image','category','tags','card_description','body','created_date','published_date']