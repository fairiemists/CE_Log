from django.urls import path, include
from . import views

urlpatterns = [
    path('agent/', views.user_credits),
    path('<int:pk>/', views.user_credit),
    path('manager/', views.employee_credits)
]
