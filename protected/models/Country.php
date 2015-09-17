<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 12.09.15
 * Time: 17:23
 */
class Country extends CActiveRecord
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
        return 'country';
    }

    /**
     * @return array
     */
    public function relations()
    {
        return [
            'region'=>[
                self::HAS_MANY,
                'Region',
                'country',
            ],
        ];
    }

}