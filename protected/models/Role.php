<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 12.09.15
 * Time: 17:24
 */
class Role extends CActiveRecord
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
        return 'role';
    }

    /**
     * @return array
     */
    public function relations()
    {
        return [
            'user'=>[
                self::HAS_MANY,
                'User',
                'user_fk_to_role',
            ],
        ];
    }

}