<?php 

/*****************************************************************************
* Module: signing in /php/
* This module contains routines
* to let the user to sign into the platform uDUS.
*
* Here takes place checking the login, password and 
* rights to sign in (a Doctor has different rights over a Nurse or an Admin) 
*
******************************************************************************/
  
/*
** Example php script for fetching data from mysql database
**/

include "DB.php";

/*
** Parameters:
** logi - 
*/

$logi="";

/*
* Module: Settings
* Set default data
**/
if(isset($_POST['login'])=== true)
{
  $logi=$_POST['login'];
}

/*
* Module: Sign in
* Check the login, if the user passed correct password - sign him (her) into 
* the platform on proper user page
**/

//--------------------------------------------------------------------------
// 1) Connect to mysql database
//--------------------------------------------------------------------------
//include 'DB.php';
$con = mysql_connect($host,$user,$pass);
$dbs = mysql_select_db($databaseName, $con);

//--------------------------------------------------------------------------
// 2) Query database for data
//--------------------------------------------------------------------------

$result = mysql_query("SELECT uzytkownicy.haslo,uzytkownicy.permission FROM $tableName WHERE uzytkownicy.login ='".$logi."'" );          //query
while ( $row = mysql_fetch_row($result) )
{
  $data[] = $row;
}

//--------------------------------------------------------------------------
// 3) echo result as json 
//--------------------------------------------------------------------------
echo json_encode($data);

?>