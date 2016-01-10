<?php
/*****************************************************************************
* Name : user_name_connection.php
* This module contains routines
* to make connection with the Data Base.
* 
******************************************************************************/

/**
* Module: Connection
* Connect to the Data Base
**/

mysql_connect('localhost','root','');
mysql_select_db("przychodnia");