<?php /* @var $this Controller */ ?>
<!DOCTYPE html>
<html>
<head>
	<?PHP echo
	CHtml::metaTag('initial-scale=1.0, user-scalable=no, maximum-scale=1','viewport'),
	CHtml::metaTag('text/html; charset=utf-8', null,'Content-Type'),
	CHtml::metaTag('ru', 'language'),
	CHtml::linkTag('stylesheet', 'text/css', '/css/document.css'),
	CHtml::cssFile('/css/header.css'),
	CHtml::cssFile('/css/menu.css'),
	CHtml::cssFile('/css/main_section.css'),
	CHtml::cssFile('/css/left_panel.css'),
	CHtml::cssFile('/css/map.css'),
	CHtml::cssFile('/css/gallery.css'),
	CHtml::cssFile('/css/top_message.css'),

	CHtml::scriptFile('/js/jquery-2.1.3.min.js'),
	CHtml::scriptFile('http://api-maps.yandex.ru/2.1/?lang=ru_RU&mode=debug'),
	CHtml::scriptFile('/js/menu.js'),
	CHtml::scriptFile('/js/gallery.js'),
	CHtml::scriptFile('/js/data.js');
	?>

	<title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>

<body>
	<?PHP
	$top_message = 'Проект находится в стадии разработки.';
	echo CHtml::tag('div', array('id' => 'top_message'), $top_message, true);
	?>
	<div id="main_wrapper">
		<?php echo $content; ?>

		<footer id="footer"></footer>
	</div>
</body>
<?PHP echo
CHtml::scriptFile('/js/init.js'),
CHtml::scriptFile('/js/map.js'),
CHtml::scriptFile('/js/mediator.js'),
CHtml::scriptFile('/js/script.js');
?>
</html>
