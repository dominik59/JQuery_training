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

$login="";
$mode="";

/*
* Module: Settings
* Set default data
**/
if(isset($_POST['mode'])=== true)
{
  $mode=$_POST['mode'];
}
if(isset($_POST['login'])=== true)
{
  $login=$_POST['login'];
}

/*
* Module: Sign in
* Check the login, if the user passed correct password - sign him (her) into 
* the platform on proper user page
**/
if($mode==1)
{
		//--------------------------------------------------------------------------
	// 1) Connect to mysql database
	//--------------------------------------------------------------------------

		$con = mysql_connect($host,$user,$pass);
		$dbs = mysql_select_db($databaseName, $con);

	//--------------------------------------------------------------------------
	// 2) Query database for data
	//--------------------------------------------------------------------------

	$result = mysql_query("UPDATE uzytkownicy SET permission='nurse' WHERE login='".$login."'");  

	        //query
	

	//--------------------------------------------------------------------------
	// 3) echo result as json 
	//--------------------------------------------------------------------------
	echo json_encode($result);
}
if($mode==2)
{
		//--------------------------------------------------------------------------
	// 1) Connect to mysql database
	//--------------------------------------------------------------------------

		$con = mysql_connect($host,$user,$pass);
		$dbs = mysql_select_db($databaseName, $con);

	//--------------------------------------------------------------------------
	// 2) Query database for data
	//--------------------------------------------------------------------------

	$result = mysql_query("UPDATE uzytkownicy SET permission='doctor' WHERE login='".$login."'");  

	        //query
	

	//--------------------------------------------------------------------------
	// 3) echo result as json 
	//--------------------------------------------------------------------------
	echo json_encode($result);
}
if($mode==3)
{
		//--------------------------------------------------------------------------
	// 1) Connect to mysql database
	//--------------------------------------------------------------------------

		$con = mysql_connect($host,$user,$pass);
		$dbs = mysql_select_db($databaseName, $con);

	//--------------------------------------------------------------------------
	// 2) Query database for data
	//--------------------------------------------------------------------------

	$result = mysql_query("UPDATE uzytkownicy SET permission='admin' WHERE login='".$login."'");  

	        //query
	

	//--------------------------------------------------------------------------
	// 3) echo result as json 
	//--------------------------------------------------------------------------
	echo json_encode($result);
}




?>