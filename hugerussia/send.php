<?php
$fio = $_POST['name'];
$email = $_POST['email'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$fio = urldecode($fio);
$email = urldecode($email);
$fio = trim($fio);
$email = trim($email);
if (mail("smolyakov-serega@mail.ru", "Заявка с сайта", "Имя:".$fio.". E-mail: ".$email ,"From: smolyakov-serega@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>