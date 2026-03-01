from django.urls import path, include


urlpatterns = [
    path(route="", view=include("sort_app.urls"))
]
