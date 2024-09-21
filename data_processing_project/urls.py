from django.urls import path
from . import views

urlpatterns = [
    path('process-data/', views.process_data, name='process_data'),
     path('csrf-token/', views.get_csrf_token, name='get_csrf_token'),
    path('get-processed-data/', views.get_processed_data, name='get_processed_data'),
]
