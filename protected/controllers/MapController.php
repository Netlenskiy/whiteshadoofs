<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 27.09.15
 * Time: 10:48
 */

/**
 * Class MapController
 *
 */
class MapController extends CController
{
    /**
     * Получает из запроса геокоординаты, проверяет их,
     * передает модели, та возвращает сюда массив меток для отображения
     * на карте.
     * @var string bbox - строка вида '57.8776,41.1328,58.4351,43.2422',
     *             полученная из запроса. Первые два числа - геокоординаты
     *             верхнего левого угла видимой области карты, вторые два -
     *             нижнего правого.
     * @return string через 'echo'
     *
     */
    public function actionFetchPlacemarks()
    {
        try {
            $bbox = Yii::app()->request->getParam('bbox');
            $callback = Yii::app()->request->getParam('callback');
            $bbox = explode(',', $bbox);
            foreach ($bbox as &$value) {
                $value = (float)$value;
            }
            $geo_object = new GeoObject();
            echo $geo_object->fetchPlacemarks($bbox, $callback);
        } catch (Exception $e) {
            echo json_encode( array('error' => true ) );
        }
    }
}