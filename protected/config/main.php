<?php

// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
return array(
    'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
    'name' => 'Белые журавли',

    // preloading 'log' component
    'preload' => array('log'),

    // autoloading model and component classes
    'import' => array(
        'application.models.*',
        'application.components.*',
        'application.extensions.yiidebugtb.*', //our extension
    ),

    'modules' => array(
        // uncomment the following to enable the Gii tool

        /*'gii' => array(
            'class' => 'system.gii.GiiModule',
            'password' => 'qweqweqwe',
            // If removed, Gii defaults to localhost only. Edit carefully to taste.
            'ipFilters' => array('127.0.0.1', '::1'),
        ),*/

    ),

    // application components
    'components' => array(

        'user' => array(
            // enable cookie-based authentication
            'allowAutoLogin' => true,
        ),

        'request' => array(
            'enableCsrfValidation' => true,
        ),
        // uncomment the following to enable URLs in path-format

        'urlManager' => array(
            'urlFormat' => 'path',
            'rules' => array(
//				'/'=>'test/test',
//				'/site/search'=>'site/search',
                '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
                '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
                '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
            ),
        ),
        // database settings are configured in database.php
        'db' => require(dirname(__FILE__) . '/database.php'),

        'errorHandler' => array(
            // use 'site/error' action to display errors
            'errorAction' => 'site/error',
        ),

        'log' => array(
            'class' => 'CLogRouter',
            'routes' => array(
                array(
                    /*'class' => 'CWebLogRoute',
                    'showInFireBug' => true,
                    'levels' => 'profile',
                    'categories' => 'system.db.*',*/
                    'class' => 'CFileLogRoute',
                    'levels' => 'error, warning',
//                    'categories' => 'system.db.CDbConnection',

                ),/**/
                // uncomment the following to show log messages on web pages
                /*
                array(
                    'class'=>'CWebLogRoute',
                ),
                */
                /*array( // configuration for the toolbar
                    'class'=>'XWebDebugRouter',
                    'config'=>'alignLeft, opaque, runInDebug, fixedPos, collapsed, yamlStyle',
                    'levels'=>'error, warning, trace, profile, info',
                    'allowedIPs'=>array('127.0.0.1','::1','192.168.1.54','192\.168\.1[0-5]\.[0-9]{3}'),
                ),*/
            ),
        ),

    ),

    // application-level parameters that can be accessed
    // using Yii::app()->params['paramName']
    'params' => array(
        // this is used in contact page
        'adminEmail' => 'webmaster@example.com',
    ),
);
