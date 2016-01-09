<?php
/*
Check the data (login, password) during the user logging
*/
if(isset($_POST['login'])=== true && empty($_POST['login'])===false)
{
	require 'user_name_connection.php';
	$query = mysql_query("SELECT uzytkownicy.haslo AND uzytkownicy.permission FROM `uzytkownicy` WHERE  uzytkownicy.login ='". mysql_real_escape_string(trim($_POST['login'])) ."'");

}
echo(mysql_num_rows($query)!==0) ? mysql_result($query, 0) : 'Name not found';