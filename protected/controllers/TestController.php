<?php
/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 07.09.15
 * Time: 16:49
 */
error_reporting('E_ALL');

/**
 * Class TestController
 */
class TestController extends CController
{
    /**
     *
     */
    public function actionIndex()
    {
        echo 'index';
    }
    public function actionTest()
    {
        $obj = Object::model()->find('id=2');
        echo 'State: ' . $obj->state;
    }
}
