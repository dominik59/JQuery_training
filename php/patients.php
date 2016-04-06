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
  $id="";
  
/*
* Module: Settings
* Set default data
**/
  if(isset($_POST['mode'])=== true)
  {
    $mode=$_POST['mode'];
  }
  if(isset($_POST['id'])=== true)
  {
    $id=$_POST['id'];
  }

  /***********************************************
  * Module: Get Patient  data from DB
  * Query to find and get all data from 'pacjenci' table
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
    
    $result = mysql_query("SELECT pacjenci.pesel, pacjenci.imie, pacjenci.nazwisko, choroba.nazwa_choroby,choroba.objawy FROM uzytkownicy inner join wizyta inner JOIN pacjenci inner join choroba where uzytkownicy.id_pracownika = wizyta.lekarz and uzytkownicy.id_pracownika='".$id."' and wizyta.pesel_pacjenta = pacjenci.pesel AND wizyta.id_choroby=choroba.id_choroby" );          //query
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
    //--------------------------------------------------------------------------
    // 1) Connect to mysql database
    //--------------------------------------------------------------------------
    //include 'DB.php';
    $con = mysql_connect($host,$user,$pass);
    $dbs = mysql_select_db($databaseName, $con);

    //--------------------------------------------------------------------------
    // 2) Query database for data
    //--------------------------------------------------------------------------
    
    $result = mysql_query("SELECT * FROM pacjenci" );          //query
    while ( $row = mysql_fetch_row($result) )
    {
      $data[] = $row;
    }
    
    //--------------------------------------------------------------------------
    // 3) echo result as json 
    //--------------------------------------------------------------------------
    echo json_encode($data);
  }
  