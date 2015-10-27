<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 12.09.15
 * Time: 17:22
 */
class Arangement extends CActiveRecord
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
        return 'arangement';
    }

}