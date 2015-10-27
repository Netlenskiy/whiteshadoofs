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

    public function relations()
    {
        return array(
            'address'=>array(
                self::BELONGS_TO,
                'Address',
                'address',
                'with'=>'locality',
            ),
        );
    }
}