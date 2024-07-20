from django.db import models

# Create your models here.
class Student(models.Model):
    username = models.CharField(max_length=250, unique=True)
    email = models.EmailField(max_length=300)
    password = models.CharField(max_length=250)
    gender = models.CharField(max_length=50)
    uni_id = models.ForeignKey('University', on_delete=models.CASCADE, related_name='students')

class University(models.Model):
    uni_name = models.CharField(max_length=250, unique=True)
    uni_descriptions = models.TextField()
    uni_logo = models.FileField(upload_to='uploads/uni/')

class Courses(models.Model):
    uni_id = models.ForeignKey('University', on_delete=models.CASCADE, related_name='courses')
    course_name = models.CharField(max_length=250, unique=True)
    course_logo = models.FileField(upload_to='uploads/course/') 

class Comments(models.Model):
    user_id = models.ForeignKey('Student', on_delete=models.CASCADE, related_name='comments')
    course_id = models.ForeignKey('Courses', on_delete=models.CASCADE, related_name='comments')
    comment_text = models.TextField()
    comment_date = models.DateTimeField(auto_now_add=True)

class Delete(models.Model):
    user_id = models.ForeignKey('Student', on_delete=models.CASCADE, related_name='deletes')
    course_id = models.ForeignKey('Courses', on_delete=models.CASCADE, related_name='deletes')
    delete_date = models.DateTimeField(auto_now_add=True)
    upload = models.ForeignKey('Upload', on_delete=models.CASCADE, related_name='deletes')

class Upload(models.Model):
    user_id = models.ForeignKey('Student', on_delete=models.CASCADE, related_name='uploads')
    course_id = models.ForeignKey('Courses', on_delete=models.CASCADE, related_name='uploads')
    title = models.CharField(max_length=250)
    description = models.TextField()
    file = models.FileField(upload_to='uploads/upload/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

class Rating(models.Model):
    user_id = models.ForeignKey('Student', on_delete=models.CASCADE, related_name='ratings')
    course_id = models.ForeignKey('Courses', on_delete=models.CASCADE, related_name='ratings')
    rating = models.IntegerField()
    create_at = models.DateTimeField(auto_now_add=True)

class Download(models.Model):
    user_id = models.ForeignKey('Student', on_delete=models.CASCADE, related_name='downloads')
    course_id = models.ForeignKey('Courses', on_delete=models.CASCADE, related_name='downloads_courses')
    download_date = models.DateTimeField(auto_now_add=True)
    file = models.ForeignKey('Upload', on_delete=models.CASCADE, related_name='downloads_files')

class Logout(models.Model):
    user_id = models.ForeignKey('Student', on_delete=models.CASCADE, related_name='logouts')
    logout_date = models.DateTimeField(auto_now_add=True)
    username = models.CharField(max_length=250)
    password = models.CharField(max_length=250)

class Update(models.Model):
    user_id = models.ForeignKey('Student', on_delete=models.CASCADE, related_name='updates')
    course_id = models.ForeignKey('Courses', on_delete=models.CASCADE, related_name='updates')
    title = models.CharField(max_length=200)
    description = models.TextField()
