from django.urls import path

""" from .views import (PieceOfCopyListView, 
PieceOfCopyDetailView,
PieceOfCopyCreateView,
PieceOfCopyUpdateView,
PieceOfCopyDeleteView)
urlpatterns = [
    path('pieceOfCopy/', PieceOfCopyListView.as_view()),
    path('pieceOfCopy/<pk>', PieceOfCopyDetailView.as_view()),
    path('pieceOfCopy/create/', PieceOfCopyCreateView.as_view()),
    path('pieceOfCopy/<pk>/update/', PieceOfCopyUpdateView.as_view()),
    path('pieceOfCopy/<pk>/delete/', PieceOfCopyDeleteView.as_view()),
]
 """

from .views import PieceOfCopyViewSet, BadWordViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'pieceOfCopy', PieceOfCopyViewSet, basename='pieceofcopy')
router.register(r'badWords', BadWordViewSet, basename='badword')
urlpatterns = router.urls

#all the options GET, PUT, DELETE is on the detail view
# POST is on the list view 