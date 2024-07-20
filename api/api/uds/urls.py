from django.urls import path
from . import views

urlpatterns = [
    path('students/', views.students, name='students'),
    path('course/', views.course , name='course'),
    path('upload/', views.upload, name='upload'),
    path('upload/<int:id>/', views.upload, name='upload_detail_delete'),  # For DELETE requests
    path('university/', views.university, name='university'),
]

