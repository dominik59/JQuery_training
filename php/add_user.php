<?php
/*****************************************************************************
* Name : add_user.php
* This module contains routines
* to add a new user to the Data Base.
* You can easily add a new /Doctor/ or a /Nurse/ to the DB from *Admin* position
*
******************************************************************************/



/*
** Example php script for fetching data from mysql database
**/
include "DB.php";

/*
** Parameters:
** login - Login to the password
** password - Password to the platform (employee choose by himself/herself)
** name - Name of the employee
** surname - Surname of the employee
** curdate - Date, when the employee started work
**/
$login="";
$password="";
$name="";
$surname="";
$curdate="";

/*
* Module: Settings
* Set default data
**/
if(isset($_POST['login'])=== true)
{
  $login=$_POST['login'];
}
if(isset($_POST['password'])=== true)
{
  $password=$_POST['password'];
}
if(isset($_POST['name'])=== true)
{
  $name=$_POST['name'];
}
if(isset($_POST['surname'])=== true)
{
  $surname=$_POST['surname'];
}
if(isset($_POST['curdate'])=== true)
{
  $curdate=$_POST['curdate'];
}

/**********************************************
* Module: Add /Doctor/
* Add a new Doctor to the Data Base
***********************************************/
if(isset($_POST['mode'])=== true && $_POST['mode']==1)
{
  /*
  ** 1) Connect to mysql database
  */
  //include 'DB.php';
  $con = mysql_connect($host,$user,$pass);
  $dbs = mysql_select_db($databaseName, $con);
 
  /*
  ** 2) Query database for data
  */
  $result = mysql_query("INSERT INTO `uzytkownicy` (`login`, `haslo`, `permission`, `Data_zatrudnienia`, `Imie`, `Nazwisko`) VALUES('".$login."', '".$password."', 'doctor', '".$curdate."','".$name."','".$surname."');" );          //query
      
  /*
  ** 3) echo result as json
  */
  echo json_encode($result);
}

/*
** Module: Add /Nurse/
* Add a new Nurse to the Data Base
**/
else if (isset($_POST['mode'])=== true && $_POST['mode']==2)
{
  /*
  ** 1) Connect to mysql database
  */
  //include 'DB.php';
  $con = mysql_connect($host,$user,$pass);
  $dbs = mysql_select_db($databaseName, $con);

  /*
  ** 2) Query database for data
  */ 
  $result = mysql_query("INSERT INTO `uzytkownicy` (`login`, `haslo`, `permission`, `Data_zatrudnienia`, `Imie`, `Nazwisko`) VALUES('".$login."', '".$password."', 'nurse', '".$curdate."','".$name."','".$surname."');" );          //query
  
  
  /*
  ** 3) echo result as json 
  */
  echo json_encode($result);
}


?>