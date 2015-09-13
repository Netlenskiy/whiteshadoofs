<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 12.09.15
 * Time: 17:22
 */
class Address extends CActiveRecord
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
        return 'address';
    }

    /**
     * @return array
     */
    public function relations()
    {
        return [
            'address_fk_to_locality'=>[
                self::BELONGS_TO,
                'Locality',
                'address_fk_to_locality',
            ],
        ];
    }

}