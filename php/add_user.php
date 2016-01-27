<?php
/*****************************************************************************
* Name : add user /php/
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
$pesel="";
$name="";
$surname="";
$phonenumber="";
$city="";
$postcode="";
$street="";
$buildingnumber="";
$flatnumber="";

/*
* Module: Settings
* Set default data
**/
if(isset($_POST['pesel'])=== true)
{
  $pesel=$_POST['pesel'];
}
if(isset($_POST['name'])=== true)
{
  $name=$_POST['name'];
}
if(isset($_POST['surname'])=== true)
{
  $surname=$_POST['surname'];
}
if(isset($_POST['phonenumber'])=== true)
{
  $phonenumber=$_POST['phonenumber'];
}
if(isset($_POST['city'])=== true)
{
  $city=$_POST['city'];
}
if(isset($_POST['postcode'])=== true)
{
  $postcode=$_POST['postcode'];
}
if(isset($_POST['street'])=== true)
{
  $street=$_POST['street'];
}
if(isset($_POST['buildingnumber'])=== true)
{
  $buildingnumber=$_POST['buildingnumber'];
}
if(isset($_POST['flatnumber'])=== true)
{
  $flatnumber=$_POST['flatnumber'];
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
else if (isset($_POST['mode'])=== true && $_POST['mode']==3)
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
  $result = mysql_query("INSERT INTO `pacjenci` (`pesel`, `imie`, `nazwisko`, `nr_tel`, `miejscowosc`, `kod_poczt`,`ulica`, `nr_domu`, `nr_mieszk`) VALUES('".$pesel."', '".$name."', '".$surname."','".$phonenumber."','".$city."','".$postcode."' ,'".$street."' ,'".$buildingnumber."' ,'".$flatnumber."');" );          //query
  
  
  /*
  ** 3) echo result as json 
  */
  echo json_encode($result);
}


?>