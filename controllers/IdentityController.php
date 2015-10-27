<?php

/**
 * Created by PhpStorm.
 * User: ivan
 * Date: 04.10.15
 * Time: 13:14
 */
class IdentityController extends CController
{
    public function actionIndex()
    {
        try {
            if (Yii::app()->user->isGuest) {
                $this->render('step_1');
            } elseif (Yii::app()->session['UNCONFIRMED_ID']) {
                $this->redirect('step_2');
            } else {
                $this->redirect('index');
            }
        } catch (Exception $e) {
            if (YII_DEBUG) {
                CVarDumper::dump($e);
            } else {
                echo 'Smthg is wrong...';
            }
        }

    }

    public function actionStep1()
    {
        try {
//            $email    = Yii::app()->request->getParam('email');
//            $password = Yii::app()->request->getParam('password');
//            $nick     = Yii::app()->request->getParam('nick');
            /*$email    = mysqli_real_escape_string(null, $email);
            $password = mysqli_real_escape_string(null, $password);
            $nick     = mysqli_real_escape_string(null, $nick);*/

            $user = new User();
            if (isset($_GET['User'])) {
                $user->attributes = $_GET['User'];
            }
            echo '<pre>';
            CVarDumper::dump($user->attributes);
            echo '</pre>';
            $user->validate();
            if ($user->hasErrors()) {
                echo '<pre>';
                CVarDumper::dump($user->getErrors());
                echo '</pre>';
                throw new CHttpException(505);
            }
            echo 'ok';
        } catch (Exception $e) {
            echo '<pre>';
            CVarDumper::dump($e);
            echo '</pre>';
        }


    }

}