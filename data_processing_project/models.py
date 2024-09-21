from django.db import models

class ProcessedData(models.Model):
    column_name = models.CharField(max_length=255)
    data_type = models.CharField(max_length=50)
    is_override = models.BooleanField(default=False)

    def __str__(self):
        return self.column_name  # Customize as per your requirements
