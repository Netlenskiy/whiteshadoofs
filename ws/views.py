#!/usr/bin/env python
# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.shortcuts import render, render_to_response
import ws.models as models

def main(request):
    if request.method == 'GET' and request.META['QUERY_STRING']:
        return HttpResponse(request.META['QUERY_STRING'])
    else:
        return render_to_response('index.html')


def objects_search(request):
    """Функция осуществляет поиск соответствующих get-запросу
    объектов в бд, передает их шаблону в качестве контекста. 
    
    """

    nothing_found = "Ничего не нашлось..."
    empty_title = 'Поле "Название" является обязательным.'

    if not request.GET['title']:
        return HttpResponse(empty_title)

    in_desc = True if request.GET['in_desc'] == 'true' else False

    if request.GET['country']:
        in_country = models.Object.objects.filter(
            address__locality__region__country__title__icontains=request.GET['country']
        )
    else:
        in_country = models.Object.objects.all()

    if request.GET['region']:
        in_region = in_country.filter(
            address__locality__region__title__icontains=request.GET['region']
        )
    else:
        in_region = in_country

    if request.GET['city']:
        in_locality = in_region.filter(
            address__locality__title__icontains=request.GET['locality']
        )
    else:
        in_locality = in_region

    if request.GET['street']:
        in_street = in_locality.filter(
            address__street__icontains=request.GET['street']
        )
    else:
        in_street = in_locality

    result = in_street.filter(title__icontains=request.GET['title'])
    result = list(result)
    if in_desc:
        result += in_street.filter(description__icontains=request.GET['title'])

    if not result:
        return HttpResponse(nothing_found)
    return render_to_response('search_result.html', {'result': result})
    

def fetch_placemarks(request):
    callback = request.GET['callback']
    bbox = request.GET['bbox']
    bbox = bbox.split(',', 3)

    for value in bbox:
        value = float(value)

    geo_objects = list(models.Geo_object.fetch(bbox))
    return render(request, 'pms.json', {'func': callback, 'bbox': geo_objects})


def geocoder(request):
    if request.GET['geo']:
        geo = request.GET['geo']









# public function actionFetchPlacemarks()
#     {
#         try {
#             $bbox = Yii::app()->request->getParam('bbox');
#             $callback = Yii::app()->request->getParam('callback');
#             $bbox = explode(',', $bbox);
#             foreach ($bbox as &$value) {
#                 $value = (float)$value;
#             }
#             $geo_object = new GeoObject();
#             header('X-Content-Type-Options: nosniff', true);
#             header('Content-Type: application/javascript', true);
#             echo $geo_object->fetchPlacemarks($bbox, $callback);
#         } catch (Exception $e) {
#             echo json_encode( array('error' => true ) );
#         }
#     }

# public function fetchPlacemarks(array $bbox, $callback)
#     {
#         try {
#             $criteria = new CDbCriteria();
#             $criteria->select = 'id, title, disclamer, face_link, latitude, longitude';
#             $criteria->addCondition('latitude>='  . $bbox[0]);
#             $criteria->addCondition('latitude<='  . $bbox[2]);
#             $criteria->addCondition('longitude>=' . $bbox[1]);
#             $criteria->addCondition('longitude<=' . $bbox[3]);
#             $placemarks = $this->findAll($criteria);
#             $response = array(
#                 'type' => 'FeatureCollection',
#                 'features' => array(),
#             );
#             foreach ($placemarks as $value) {
#                 $response['features'][] = array(
#                     'id'   => $value['id'],
#                     'geometry' => array(
#                         'type' => 'Point',
#                         'coordinates' => array($value['latitude'], $value['longitude']),
#                     ),
#                     'properties' => array(
#                         'title' => $value['title'],
#                         'disclamer' => $value['disclamer'],
#                         'face_link' => $value['face_link'],
# //                        'face_link' => 'http://ws/face/96_big.jpg',
#                         'gallery_link' => $value['gallery_link'],
#                         'category' => $value['category'],
#                         'object' => $value['object'],
#                     )
#                 );
#             }
#
# //            return $callback . '(' . json_encode($response) . ');';
#             return $callback . '(' . CJSON::encode($response) . ');';
#
#         } catch (Exception $e) {
#             throw new Exception();
#         }
#     }









