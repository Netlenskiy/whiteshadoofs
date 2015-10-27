<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 12.09.15
 * Time: 17:24
 */
class User extends CActiveRecord
{

    /**
     * @param string $className
     * @return static
     *
     */
    public static function model($className = __CLASS__)
    {
        return parent::model($className);
    }

    /**
     * @return string Имя таблицы
     */
    public function tableName()
    {
        return 'user';
    }

    /**
     * @return array
     */
    public function attributeLabels()
    {
        return array(
            'email' => 'Email',
            'password' => 'пароль',
            'nick' => 'Имя',
        );
    }

    /**
     * @return array
     */
    public function rules()
    {
        return array(
            array('email, password', 'required'),
            array('email', 'email', 'allowName' => true, 'allowEmpty' => false),
            array('password', 'length', 'min' => 8, 'max' => 50),
            array('nick', 'required'),
            array('nick', 'length', 'min' => 3, 'max' => 50),
            array('nick',
                'unique',
                'allowEmpty' => false,
                'className' => 'User',
                'attributeName' => 'nick',
            )
        );
    }
    //@TODO Доделать валидацию ника и определить допустимую длину.

    /**
     * @return array
     */
    public function relations()
    {
        return array(
            'user_fk_to_role'=>array(
                self::BELONGS_TO,
                'Role',
                'user_fk_to_role',
            ),
        );
    }

}