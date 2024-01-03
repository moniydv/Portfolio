from django.db import models
from django.utils import timezone

# Create your models here.
class Blog(models.Model):
    """ A single blog post """
    title = models.CharField(max_length=200)
    cover_image = models.ImageField(upload_to='blog-photos/%Y/%m/%d',blank=True,null=True)
    category = models.CharField(max_length=200,blank=True,null=True)
    tags = models.CharField(max_length=200,blank=True,null=True)
    card_description = models.CharField(max_length=300, blank=False, default='somevalue')
    body = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title


class Project(models.Model):
    """ A single project """
    name = models.CharField(max_length=30)
    description = models.TextField(max_length=200)
    github = models.URLField()
    demo = models.URLField(blank=True)
    image = models.FileField(upload_to="project-photos/",blank=True)
    show = models.BooleanField(default=True)

    def __str__(self):
        return self.name