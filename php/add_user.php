<?php 

  //--------------------------------------------------------------------------
  // Example php script for fetching data from mysql database
  //--------------------------------------------------------------------------
  include "DB.php";
  /*
  Add a new user to the Data Base
  */

  //required informations
  $login="";
  $password="";
  $name="";
  $surname="";
  $curdate="";
  
  //set default data
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

  //mode 1 -> add Doctor
  if(isset($_POST['mode'])=== true && $_POST['mode']==1)
  {
    //--------------------------------------------------------------------------
    // 1) Connect to mysql database
    //--------------------------------------------------------------------------
    //include 'DB.php';
    $con = mysql_connect($host,$user,$pass);
    $dbs = mysql_select_db($databaseName, $con);

    //--------------------------------------------------------------------------
    // 2) Query database for data
    //--------------------------------------------------------------------------
    
    $result = mysql_query("INSERT INTO `uzytkownicy` (`login`, `haslo`, `permission`, `Data_zatrudnienia`, `Imie`, `Nazwisko`) VALUES('".$login."', '".$password."', 'doctor', '".$curdate."','".$name."','".$surname."');" );          //query
    
    
    //--------------------------------------------------------------------------
    // 3) echo result as json 
    //--------------------------------------------------------------------------
    echo json_encode($result);
  }

  //mode 2 -> add Nurse
  else if (isset($_POST['mode'])=== true && $_POST['mode']==2)
  {
    //--------------------------------------------------------------------------
    // 1) Connect to mysql database
    //--------------------------------------------------------------------------
    //include 'DB.php';
    $con = mysql_connect($host,$user,$pass);
    $dbs = mysql_select_db($databaseName, $con);

    //--------------------------------------------------------------------------
    // 2) Query database for data
    //--------------------------------------------------------------------------
    
    $result = mysql_query("INSERT INTO `uzytkownicy` (`login`, `haslo`, `permission`, `Data_zatrudnienia`, `Imie`, `Nazwisko`) VALUES('".$login."', '".$password."', 'nurse', '".$curdate."','".$name."','".$surname."');" );          //query
    
    
    //--------------------------------------------------------------------------
    // 3) echo result as json 
    //--------------------------------------------------------------------------
    echo json_encode($result);
  }
  

?>