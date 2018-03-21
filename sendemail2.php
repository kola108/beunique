<?php
$strEmail = "8169233@ukr.net";
$name=$_POST['name'];
$phone=$_POST['phone'];
$headers = 'From: beunique.kiev.ua <noreply@beunique.kiev.ua>';

mail("$strEmail", "Запись на курс: callback от $name", "Имя: $name\r\nТелефон: $phone", $headers);
?>