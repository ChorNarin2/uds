from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import StudentSerializer, CoursesSerializer,UploadSerializer, UniversitySerializer


# seeding and getting data from student info
@api_view(['GET', 'POST'])
def students(request):
    if request.method == 'GET':
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("What the fuck it success", status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# seeding course fileds 
@api_view(['GET','POST'])
def course(request):
    if request.method == 'GET':
        courses = Courses.objects.all()
        serializer = CoursesSerializer(courses, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        serializer = CoursesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("what the fuck ok", status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

# seeding about upload 
@api_view(['GET', 'POST', 'DELETE'])
def upload(request, id=None):
    if request.method == 'GET':
        uploads = Upload.objects.all()
        serializer = UploadSerializer(uploads, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        serializer = UploadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Upload created successfully", status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        if id is not None:
            try:
                upload = Upload.objects.get(id=id)
                upload.delete()
                return Response("What the fuck deleing", status=status.HTTP_204_NO_CONTENT)
            except Upload.DoesNotExist:
                return Response("Upload not found", status=status.HTTP_404_NOT_FOUND)
        return Response("ID not provided", status=status.HTTP_400_BAD_REQUEST)   
    

# Deleting document in the table uploading
@api_view(['DELETE'])
def delete_upload(request, pk):
    upload = Upload.objects.get(id=pk)
    upload.delete()
    return Response("Upload deleted successfully", status=status.HTTP_204_NO_CONTENT)
    

#seeding universities to database
@api_view(['GET', 'POST'])
def university(request):
    if request.method == 'GET':
        universities = University.objects.all()
        serializer = UniversitySerializer(universities, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        serializer = UniversitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("University created successfully", status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)