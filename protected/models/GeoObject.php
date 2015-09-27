<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 27.09.15
 * Time: 23:13
 */
class GeoObject extends CActiveRecord
{
    public static function model($classname=__CLASS__)
    {
        return parent::model($classname);
    }

    public function tableName()
    {
        return 'geo_object';
    }

    public function relations()
    {
        return array(
            'objext' => array(
                self::HAS_ONE,
                'Object',
                'object',
            ),
        );
    }

    /**
     * @return string
     * @throws Exception Если что-то не так с соединением, перебрасывается выше.
     * @param array $bbox - массив координат верхнего левого $bbox[0], $bbox[1]
     *                    и нижнего правого $bbox[2], $bbox[3] углов видимой области
     *                    карты.
     * @param string функция обратного вызова, в которую оборачивается ответ
     *                       серверу. (Обеспечивает формат JSONP)
     * @TODO to do projection and exceptions
     *
     */
    public function fetchPlacemarks(array $bbox, $callback)
    {
        try {
            $criteria = new CDbCriteria();
            $criteria->select = 'id, latitude, longitude';
            $criteria->addCondition('latitude>='  . $bbox[0]);
            $criteria->addCondition('latitude<='  . $bbox[2]);
            $criteria->addCondition('longitude>=' . $bbox[1]);
            $criteria->addCondition('longitude<=' . $bbox[3]);
            $placemarks = $this->findAll($criteria);
            $response = array(
                'type' => 'FeatureCollection',
                'features' => array(),
            );
            foreach ($placemarks as $value) {
                $response['features'][] = array(
                    'type' => 'Feature',
                    'id'   => $value['id'],
                    'geometry' => array(
                        'type' => 'Point',
                        'coordinates' => array($value['latitude'], $value['longitude']),
                    ),
                );
            }

            return $callback . '(' . json_encode($response) . ');';

        } catch (Exception $e) {
            throw new Exception();
        }
    }
}