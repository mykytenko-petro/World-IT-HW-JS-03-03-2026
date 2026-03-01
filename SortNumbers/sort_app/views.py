from django.http import HttpRequest
from django.shortcuts import render


def render_sort(request: HttpRequest):
    return render(
        request=request,
        template_name="sort_app/sort.html"
    )