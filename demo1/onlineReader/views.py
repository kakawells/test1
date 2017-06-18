# Create your views here.

from django.shortcuts import render


def show_students(request):
    student_list = [{id: 1, 'name': 'Jack'}, {id: 2, 'name': 'Rose'}]
    return render(request, 'student.html', {'students': student_list})