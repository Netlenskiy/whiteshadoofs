<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 12.09.15
 * Time: 16:27
 *
 */
class Object extends CActiveRecord
{
    public static function model($classname=__CLASS__)
    {
        return parent::model($classname);
    }

    /**
     * @return string
     */
    public function tableName()
    {
        return 'object';
    }

    /**
     * @return string
     */
    public static function __toString()
    {
        return 'CActiveRecord';
    }

    public function relations()
    {
        return [
            'address'=>[
                self::BELONGS_TO,
                'Address',
                'address',
                'with'=>'locality',
            ]
        ];
    }
}