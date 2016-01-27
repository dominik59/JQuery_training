<?php 

/*****************************************************************************
* Name: delete user /php/
* This module contains routines
* to delete an existing user from the Data Base.
* You can easily delete a Doctor or a Nurse from the DB from Admin position.
*
******************************************************************************/


/*
** Example php script for fetching data from mysql database
*/
include "DB.php";

/*
** Parameters:
** mode - Mode which specify what is needed to do: 1) getting data from the DB; 
**        2) deleting user from the DB
** login - Login of user, who will be deleted from the Data Base
**/
  $mode="";
  $login="";
  
/*
* Module: Settings
* Set default data
**/
  if(isset($_POST['mode'])=== true)
  {
    $mode=$_POST['mode'];
  }

  /***********************************************
  * Module: Get data from DB
  * Query to find and get all data from table, 
  * which name is stored in variable "tableName"
  ************************************************/
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

  /***********************************************************
  * Module:  Delete user
  * Query to delete user's data from the DataBase, 
  * whose login is transfered by variable "login"
  ***********************************************************/
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
    
    $result = mysql_query("DELETE * FROM $tableName WHERE $tableName.login='".$login."';" );          //query
    
    
    //--------------------------------------------------------------------------
    // 3) echo result as json 
    //--------------------------------------------------------------------------
    echo json_encode($result);
  }
 


/*
!!!!!!!!!!!!
!!!!!!!!!!!!!

  //DO PRZENIESIENIA
!!!!!!!!!!!!!!

!!!!!!!!!!!
*/

  /*****************************************************************************
  * Module: Display user
  * Display user's data (without password) -> login, permission, data of starting job, name and surname
  * in the admin's page
  *****************************************************************************/
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
    
    $result = mysql_query("SELECT login, permission, Data_zatrudnienia, Imie, Nazwisko FROM $tableName " );  //query
    while ( $row = mysql_fetch_row($result) )
    {
      $data[] = $row;
    }
    
    //--------------------------------------------------------------------------
    // 3) echo result as json 
    //--------------------------------------------------------------------------
    echo json_encode($data);
  }

  if($mode=="4")
  {
    $con = mysql_connect($host,$user,$pass);
    $dbs = mysql_select_db($databaseName, $con);

    $result = mysql_query("SELECT login, Imie, Nazwisko FROM $tableName " );  //query
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