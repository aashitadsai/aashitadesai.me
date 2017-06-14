<?php
	
	$to = "adesai16@stevens.edu";
	$subject = "Share your ideas!";
	$txt = $_POST["full_name"]."\r\n".$_POST["Email"]."\r\n".$_POST["message"];
	$headers = "From: aashita.desai@live.com\r\n";
	
	mail($to,$subject,$txt,$headers); //me
	
	$to = $_POST["Email"];
	$subject = "Hey ".$_POST["full_name"].", Thank you for your message.";
	$txt = "Hi ".$_POST["full_name"].",\r\n\n I appreciate your time. I shall get back to you soon.\r\n\nThank You, Aashita Desai";
	$headers = "From:aashita.desai@live.com\r\n";
	
	mail($to,$subject,$txt,$headers); //sender

?>