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
    public static function model($classname=__CLASS__)
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
        return [
            'region'=>[
                self::BELONGS_TO,
                'Region',
                'locality_fk_to_region',
            ],
            'address'=>[
                self::HAS_MANY,
                'Address',
                'address_fk_to_locality',
            ],
        ];
    }
}