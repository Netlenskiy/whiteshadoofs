<?php /* @var $this Controller */
namespace yii\helpers;
?>
<!DOCTYPE html>
<html>
<head>
	<?PHP echo
	Html::tag('meta', null, ['initial-scale'=> 1.0, 'user-scalable' => 'no', 'maximum-scale' => 1, 'name' => 'viewport']);
    Html::tag('meta', null, ['http-equiv' => 'Content-Type', 'content' => 'text/html; charset=utf-8']);
    Html::tag('meta', null, ['language' => 'ru']);
	Html::cssFile('/css/document.css');
	Html::cssFile('/css/header.css');
	Html::cssFile('/css/menu.css');
	Html::cssFile('/css/main_section.css');
	Html::cssFile('/css/left_panel.css');
	Html::cssFile('/css/map.css');
	Html::cssFile('/css/gallery.css');
	Html::cssFile('/css/top_message.css');

	Html::jsFile('/js/jquery-2.1.3.min.js');
	Html::jsFile('http://api-maps.yandex.ru/2.1/?lang=ru_RU&mode=debug');
	Html::jsFile('/js/menu.js');
	Html::jsFile('/js/gallery.js');
	Html::jsFile('/js/data.js');
	?>

	<title><?php echo Html::encode(\Yii::$app->name); ?></title>
</head>

<body>
	<?PHP
	$top_message = 'Проект находится в стадии разработки.';
	echo Html::tag('div', $top_message, ['id' => 'top_message']);
	?>
	<div id="main_wrapper">
		<?php echo $content; ?>

		<footer id="footer"></footer>
	</div>
<!--    --><?php /*$this->widget('application.extensions.email.debug'); */?>
</body>
<?PHP echo
Html::jsFile('/js/init.js'),
Html::jsFile('/js/map.js'),
Html::jsFile('/js/mediator.js'),
Html::jsFile('/js/script.js');
?>
</html>
