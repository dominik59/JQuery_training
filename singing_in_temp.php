<?php 

  //--------------------------------------------------------------------------
  // Example php script for fetching data from mysql database
  //--------------------------------------------------------------------------
  $host = "localhost";
  $user = "root";
  $pass = "";

  $databaseName = "przychodnia";
  $tableName = "uzytkownicy";
  $logi="";
  
  if(isset($_POST['login'])=== true)
  {
    $logi=$_POST['login'];
  }

  //--------------------------------------------------------------------------
  // 1) Connect to mysql database
  //--------------------------------------------------------------------------
  include 'DB.php';
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