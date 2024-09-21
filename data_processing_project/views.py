from django.shortcuts import render
from django.http import JsonResponse
from .models import ProcessedData
from .infer_data_types import infer_and_convert_data_types
import pandas as pd
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})

@csrf_exempt
def process_data(request):
    if request.method == 'POST' and request.FILES.get('file'):
        uploaded_file = request.FILES['file']
        df = pd.read_csv(uploaded_file)
        
        # Infer and convert data types
        df = infer_and_convert_data_types(df)

        # Process DataFrame and store in the database
        processed_data = []
        for col in df.columns:
            processed_data.append({
                'column_name': col,
                'data_type': str(df[col].dtype)
            })
        
        # Clear previous data and save new processed data
        ProcessedData.objects.all().delete()
        ProcessedData.objects.bulk_create([ProcessedData(**item) for item in processed_data])

        return JsonResponse({'status': 'success'})
    
    return JsonResponse({'status': 'error'})

def get_processed_data(request):
    processed_data = ProcessedData.objects.all()
    data_list = [{'column_name': item.column_name, 'data_type': item.data_type} for item in processed_data]
    return JsonResponse(data_list, safe=False)
