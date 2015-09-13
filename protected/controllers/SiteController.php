<?php

class SiteController extends Controller
{
    /**
     * @param $str String Удаляет кавычки из строки-аргумента,
     * @return mixed Возвращает "очищенную" строку
     */
    function quotes_delete($str)
    {
        $temp = str_ireplace("'", '', $str);
        $temp = str_ireplace("\"", '', $temp);

        return $temp;
    }
    /**
     * Declares class-based actions.
     */

    public function actions()
    {
        return array(
            // captcha action renders the CAPTCHA image displayed on the contact page
            /*'captcha'=>array(
                'class'=>'CCaptchaAction',
                'backColor'=>0xFFFFFF,
            ),*/
            // page action renders "static" pages stored under 'protected/views/site/pages'
            // They can be accessed via: index.php?r=site/page&view=FileName
            /*'page'=>array(
                'class'=>'CViewAction',
            ),*/
        );
    }

    /**
     * This is the default 'index' action that is invoked
     * when an action is not explicitly requested by users.
     */
    public function actionIndex()
    {
        // renders the view file 'protected/views/site/index.php'
        // using the default layout 'protected/views/layouts/main.php'

        $this->render('index');
    }

    public function actionSearch()
    {
//      gets: in_desc, title, country, region, city, street

        if (!isset($_GET['title']) || !$_GET['title']) {
            echo "'Название' обязательно для заполнения";
            Yii::app()->end();
        }

        $criteria = new CDbCriteria;
        $criteria->alias = 'object';
        $criteria->select = 'title';
        $title = $this::quotes_delete(Yii::app()->getRequest()->getParam('title'));
        $criteria->condition = 'title=' . '\'' . $title . '\'';

        if (isset($_GET['country']) && $_GET['country']) {
            $country = $this::quotes_delete("'", '', Yii::app()->getRequest()->getParam('country'));


            $condition = 'country=' . '\'' . $country . '\'';
            $criteria->addCondition($condition);
        }
        if (isset($_GET['region']) && $_GET['region']) {
            $region = $this::quotes_delete(Yii::app()->getRequest()->getParam('region'));
            $condition = 'region=' . '\'' . $region . '\'';
            $criteria->addCondition($condition);
        }
        if (isset($_GET['city']) && $_GET['city']) {
            $city = $this::quotes_delete(Yii::app()->getRequest()->getParam('city'));
            $condition = 'city=' . '\'' . $city . '\'';
            $criteria->addCondition($condition);
        }
        if (isset($_GET['street']) && $_GET['street']) {
            $street = $this::quotes_delete(Yii::app()->getRequest()->getParam('street'));
            $condition = 'street=' . '\'' . $street . '\'';
            $criteria->addCondition($condition);
        }
        $objects = Object::model()->findAll($criteria);
        $obj_titles = '';
        foreach ($objects as $t) {
            $obj_titles .= $t->attributes['title'];
            $obj_titles .= ' ';
        }

        echo $obj_titles;
        Yii::app()->end();
    }


    /**
     * This is the action to handle external exceptions.
     */
    public function actionError()
    {
        if ($error = Yii::app()->errorHandler->error) {
            if (Yii::app()->request->isAjaxRequest)
                echo $error['message'];
            else
                $this->render('error', $error);
        }
    }

    /**
     * Displays the contact page
     */
    public function actionContact()
    {
        $model = new ContactForm;
        if (isset($_POST['ContactForm'])) {
            $model->attributes = $_POST['ContactForm'];
            if ($model->validate()) {
                $name = '=?UTF-8?B?' . base64_encode($model->name) . '?=';
                $subject = '=?UTF-8?B?' . base64_encode($model->subject) . '?=';
                $headers = "From: $name <{$model->email}>\r\n" .
                    "Reply-To: {$model->email}\r\n" .
                    "MIME-Version: 1.0\r\n" .
                    "Content-Type: text/plain; charset=UTF-8";

                mail(Yii::app()->params['adminEmail'], $subject, $model->body, $headers);
                Yii::app()->user->setFlash('contact', 'Thank you for contacting us. We will respond to you as soon as possible.');
                $this->refresh();
            }
        }
        $this->render('contact', array('model' => $model));
    }

    /**
     * Displays the login page
     */
    public function actionLogin()
    {
        $model = new LoginForm;

        // if it is ajax validation request
        if (isset($_POST['ajax']) && $_POST['ajax'] === 'login-form') {
            echo CActiveForm::validate($model);
            Yii::app()->end();
        }

        // collect user input data
        if (isset($_POST['LoginForm'])) {
            $model->attributes = $_POST['LoginForm'];
            // validate user input and redirect to the previous page if valid
            if ($model->validate() && $model->login())
                $this->redirect(Yii::app()->user->returnUrl);
        }
        // display the login form
        $this->render('login', array('model' => $model));
    }

    /**
     * Logs out the current user and redirect to homepage.
     */
    public function actionLogout()
    {
        Yii::app()->user->logout();
        $this->redirect(Yii::app()->homeUrl);
    }
}