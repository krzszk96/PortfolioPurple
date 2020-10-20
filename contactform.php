<?php

if(isset ($_POST['submit'])){
  $title = $_POST['title'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];

  $mailTo = "myweb@serwer45272.lh.pl";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an e-mail from your website\n\n".$message; 

  mail($mailTo, $title, $txt, $headers);
  header("Location: index.php?mailsent");
}