from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from .models import Vacancies
from .serializers import VacanciesSerializer


class VacanciesViewSet(viewsets.ModelViewSet):
    queryset = Vacancies.objects.all()
    serializer_class = VacanciesSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['title', 'company']
