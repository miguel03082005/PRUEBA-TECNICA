from django.db import models

class transaction(models.Model):  # Clase en mayúscula
    fecha = models.DateTimeField(auto_now_add=True)
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    tipo = models.CharField(max_length=60)  # ingreso o egreso
    categoria = models.CharField(max_length=60)
    descripcion = models.TextField() 

    def __str__(self):
        return f"{self.fecha} - {self.tipo} - {self.monto}"