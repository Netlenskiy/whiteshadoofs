<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 02.10.15
 * Time: 20:18
 */
class Registration extends RegAuthBaseModel
{
    private $nick;

    public static function model()
    {
        return parent::model();
    }

    public function tableName()
    {
        return 'user';
    }
    /**
     * @return array
     */
    public function rules()
    {
        $rules = parent::rules();
        array_push($rules, array('nick', 'required'));
        array_push($rules, array(
            'nick',
            'length',
            'min' => 3,
            'max' => 50
        ));
        array_push($rules, array(
            'nick',
            'unique',
            'allowEmpty' => false,
            'className' => 'User',
            'attributeName' => 'nick',
        ));
        return $rules;
    }

    /**
     * @return array
     */
    public function attributeLabels()
    {
        return array_merge(
            parent::attributeLabels(),
            array(
                'nick' => 'Имя',
            )
        );
    }


}