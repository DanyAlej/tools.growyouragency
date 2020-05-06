from django.urls import path
from .views import PieceOfCopyListView, PieceOfCopyDetailView

urlpatterns = [
    path('', PieceOfCopyListView.as_view()),
    path('<pk>', PieceOfCopyDetailView.as_view())
]
