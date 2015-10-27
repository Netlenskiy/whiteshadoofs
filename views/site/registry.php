<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<?PHP
    CHtml::beginForm('registry', 'post', []);
    CHtml::activeName(User::class, 'name');
    CHtml::activeName(User::class, 'nick');
    CHtml::activePasswordField(User::class, 'password', []);

    CHtml::endForm();
?>
</body>
</html>