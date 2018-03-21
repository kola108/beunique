<?php
$strEmail = "8169233@ukr.net";
$name=$_POST['name'];
$phone=$_POST['phone'];
$time=$_POST['time'];
$addInfo=$_POST['addInfo'];
$headers = 'From: beunique.kiev.ua <noreply@beunique.kiev.ua>';

mail("$strEmail", "Запись на курс от $name", "Имя: $name\r\nТелефон: $phone\r\nВремя: $time\r\nДоп. инфо: $addInfo", $headers);
?>