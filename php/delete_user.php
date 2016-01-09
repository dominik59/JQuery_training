<?php 

  //--------------------------------------------------------------------------
  // Example php script for fetching data from mysql database
  //--------------------------------------------------------------------------
  include "DB.php";

/*
  Delete user from the Data Base
  */

  $mode="";
  $login="";
  
  if(isset($_POST['mode'])=== true)
  {
    $mode=$_POST['mode'];
  }
  if($mode=="1")
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
    
    $result = mysql_query("SELECT * FROM $tableName " );          //query
    while ( $row = mysql_fetch_row($result) )
    {
      $data[] = $row;
    }
    
    //--------------------------------------------------------------------------
    // 3) echo result as json 
    //--------------------------------------------------------------------------
    echo json_encode($data);
  }

  if($mode=="2")
  {
    if(isset($_POST['login'])=== true)
    {
      $login=$_POST['login'];
    }
    //--------------------------------------------------------------------------
    // 1) Connect to mysql database
    //--------------------------------------------------------------------------
    //include 'DB.php';
    $con = mysql_connect($host,$user,$pass);
    $dbs = mysql_select_db($databaseName, $con);

    //--------------------------------------------------------------------------
    // 2) Query database for data
    //--------------------------------------------------------------------------
    
    $result = mysql_query("DELETE FROM $tableName WHERE $tableName.login='".$login."';" );          //query
    
    
    //--------------------------------------------------------------------------
    // 3) echo result as json 
    //--------------------------------------------------------------------------
    echo json_encode($result);
  }
  
  if($mode=="3")
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
    
    $result = mysql_query("SELECT login, permission, Data_zatrudnienia, Imie, Nazwisko FROM $tableName " );          //query
    while ( $row = mysql_fetch_row($result) )
    {
      $data[] = $row;
    }
    
    //--------------------------------------------------------------------------
    // 3) echo result as json 
    //--------------------------------------------------------------------------
    echo json_encode($data);
  }
  

?>