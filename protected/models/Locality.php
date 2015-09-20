<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 12.09.15
 * Time: 17:23
 */
class Locality extends CActiveRecord
{
    /**
     * @param string $classname
     * @return static
     */
    public static function model($classname = __CLASS__)
    {
        return parent::model($classname);
    }

    /**
     * @return string
     */
    public function tableName()
    {
        return 'locality';
    }

    /**
     * @return array
     */
    public function relations()
    {
        return array(
            'region' => array(
                self::BELONGS_TO,
                'Region',
                'region',
                'with' => 'country',
            ),
            'address' => array(
                self::HAS_MANY,
                'Address',
                'address',
            ),
            'object' => array(
                self::HAS_MANY,
                'Object',
                'object',
            ),
        );
    }
}