//////////////////////////niezależne od strony
$( document ).ready(function() {
	$('#change_employees_permission_button').on("click",function(){
		$.fn.peity.defaults.line = {
		  delimiter: ",",
		  fill: "#c6d9fd",
		  height: 200,
		  max: null,
		  min: 0,
		  stroke: "#4d89f9",
		  strokeWidth: 1,
		  width: document.getElementById('space_id').clientWidth
		  
		}
		$.fn.peity.defaults.bar = {
		  delimiter: ",",
		  fill: ["#4d89f9"],
		  height: 200,
		  max: null,
		  min: 0,
		  padding: 0.1,
		  width: document.getElementById('space_id').clientWidth
		}
		
		$(".bar-colours-2").peity("bar",{
			fill:function(value){
				return value > 0 ? "yellow" : "red"
			}
		});
	});
});
//////////////////////////niezależne od strony

/*****************************************************************************
* Name : scripts /js/
* This module is reflected main page.
*
******************************************************************************/

$( document ).ready(function() {
	$('#button1').on('click',function(){
		var login = $('#login_id').val();
		/**
		* Function: Ajax
		* AJAX allows reloading page's parts, when user can still use our page (because it's often an asychronius process).
		**/
		 $.ajax({   					 // te {{ }} są po to, by generator pominal to przy dokumentacji
		   type:"POST",               
	       url: 'php/singing_in.php',  //the script to call to get data          
	       data: {login:login},   			
	                              			//you can insert url argumnets here to pass to api.php
	                                        //for example "id=5&parent=6"
	      dataType: 'json',                 //data format      
	      success: function(data)           //on recieve of reply
	      {
	      	//alert(data[0][0]);
	      	cur_usr_id=data[0][0];

	      	var pass = data[0][1];
	      	var perm = data[0][2];

	      	/**
	      	* Module: Check permission
	      	* Check the permission and load a proper page
	      	**/
	      	if($('#password_id').val()==pass)
	      	{
	      		if(perm=="admin")
	      		{
	      			$.mobile.changePage( $("#admin_page"), "slide", true, true);
	      		}
	      		if(perm=="nurse")
	      		{
	      			$.mobile.changePage($('#nurse_page'),"slide",true,true);
	      		}
	      		if(perm=="doctor")
	      		{
	      			$.mobile.changePage($('#doctor_page'),"slide",true,true);
	      		}
	      	}
	        
	      } 
	    });



				
	});
	/**
	* Module: Visibility Button
	* Button to cover up the password's characters.
	**/
    $( "#flip_switch_id" ).on( 'slidestop', function() {
    	
    	if($("#flip_switch_id").val()=="Tak")
    	{
    		$('#password_id').attr('type', 'text');
    		

    	}
    	else
    	{
    		$("#password_id").prop("type","password");
    		
    	}
    });

    //settings of the buttton to change visibility of the password
	$("#flip_switch_div_id").hide();
	$("#button1").prop("disabled",true);
	$("#button1").prop("disabled",false);
	$("#password_id").bind("tap",function (){
		$("#flip_switch_div_id").show(500);
	});
	$("#login_id").bind("tap",function(){
		$("#flip_switch_div_id").hide(500);
	});
});
//////////////////////////////end of main page



/***********************************************moze porozdzielac te strony-> 
*osobno dla admina, pielegniarki, i lekarza - w sensie, ze kazdy modul w osobnym skrypcie?
******************************************
*/




//////////////////////////////admin_page

//////////////////////////////admin_page


//////////////////////////////nurse_page

//////////////////////////////nurse_page


/**
* Module: Delete user
* Delete user from the /Admin/ position.
**/
$( document ).ready(function() {
	$('#delete_doctor_button').bind("click",function(){
	var name=1;
	 $.ajax({ 						  
		   type:"POST",                
	       url: 'php/delete_user.php',         //the script to call to get data          
	       data: {mode: "1"},			 
	                              			//you can insert url argumnets here to pass to api.php
	                                       //for example "id=5&parent=6"
	      dataType: 'json',                //data format      
	      success: function(data)          //on recieve of reply
	      {
	      	//alert(data);
	      	for (i in data){
	      		var login=data[i][1];
	      		var password=data[i][2];
	      		var permission=data[i][3];
	      		var hire_date=data[i][4];
	      		var name=data[i][5];
	      		var surname=data[i][6];
	      		//alert(data[i]);
	      		if(permission=="doctor")
	      		{
	      			document.getElementById('delete_doctor_page_ul').innerHTML=document.getElementById('delete_doctor_page_ul').innerHTML+'<li style="background:#fff"data-role="fieldcontain" class="ui-field-contain ui-body ui-br ui-li ui-li-static ui-body-c"> <label style="border:none" for="add_new_doctor_login" class="ui-input-text"><b>'+'Login: </b>'+login+'<b><br> Imie i Nazwisko: </b>'+name+' '+surname+'</label></li>';
	      		}
	      		if(permission=="nurse")
	      		{
	      			document.getElementById('delete_nurse_page_ul').innerHTML=document.getElementById('delete_nurse_page_ul').innerHTML+'<li style="background:#fff"data-role="fieldcontain" class="ui-field-contain ui-body ui-br ui-li ui-li-static ui-body-c"> <label style="border:none" for="add_new_doctor_login" class="ui-input-text"><b>'+'Login: </b>'+login+'<b><br> Imie i Nazwisko: </b>'+name+' '+surname+'</label></li>';
	      		}
	      		
	      	}
	      	//document.getElementById('delete_doctor_page_div').innerHTML=document.getElementById('delete_doctor_page_div').innerHTML+'<li style="background:#fff" data-role="fieldcontain" class="ui-field-contain ui-body ui-br ui-li ui-li-static ui-body-c">		    		<label style="border:none" for="add_new_doctor_login" class="ui-input-text">Wpisz login osoby do usunięcia:</label>		 <br>   		<input type="text" name="name" id="add_new_doctor_login" value="" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset"></li>';
	      	
	        
	      } 
	    });
	//delete a doctor
	//document.getElementById('delete_doctor_page_ul').innerHTML='<li data-role="fieldcontain" class="ui-field-contain ui-body ui-br ui-li ui-li-static ui-body-c"> <label style="border:none" for="add_new_doctor_login" class="ui-input-text">'+'<b>Aktualnie zatrudnieni doktorzy:</b>'+'</label></li>';
	//delete a nurse
	//document.getElementById('delete_nurse_page_ul').innerHTML='<li data-role="fieldcontain" class="ui-field-contain ui-body ui-br ui-li ui-li-static ui-body-c"> <label style="border:none" for="add_new_doctor_login" class="ui-input-text">'+'<b>Aktualnie zatrudnione pielęgniarki:</b>'+'</label></li>';
	});
//document.getElementById('delete_doctor_page_div').innerHTML='<li style="background:#fff" data-role="fieldcontain" class="ui-field-contain ui-body ui-br ui-li ui-li-static ui-body-c">		    		<label style="border:none" for="add_new_doctor_login" class="ui-input-text"><b>Login osoby do usunięcia:</b></label></li>		 <li style="background:#fff" data-role="fieldcontain" class="ui-field-contain ui-body ui-br ui-li ui-li-static ui-body-c">   		<input type="text" name="name" id="add_new_doctor_login" value="" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset"></li>';
});


$( document ).ready(function() {
	$('#delete_user_accept').bind("click",function(){
	var login=$('#delete_doctor_login').val();
	console.log(login);
	 $.ajax({ 							 
		  type:"POST",                    
	      url: 'php/delete_user.php', 	                 //the script to call to get data          
	      data: {mode: "2", login:login}, 
	                              //you can insert url argumnets here to pass to api.php
	                                       //for example "id=5&parent=6"
	      dataType: 'json',                //data format      
	      
//alert about succes/ failure of deleting the user	    
	      success: function(data)          //on recieve of reply
	      {
	      	if(data==true)
	      	{
	      		$('#pop_up_h1').text("SUKCES");
	      		$('#pop_up_p').text("Z bazy danych pomyślnie usunięto wymagane rekordy");
	      	}
	      	else
	      	{
	      		$('#pop_up_h1').text("PORAŻKA");
	      		$('#pop_up_p').text("Podczas usuwania z bazy danych wystąpił błąd, może być to spowodowane błędnie wpisanym loginem, prosimy spróbować ponownie.");
	      	}

	      }

	  });
	});
});

/**
* end of delete_user
**/

/**
* Module: Add Doctor
* Add new Doctor's page from the /Admin/ position. 
**/
$( document ).ready(function() {
	$('#add_new_doctor_button').on('click',function(){

		//Doctor's data
		var login= $('#add_new_doctor_login').val();
		var password= $('#add_new_doctor_password').val();
		var name = $('#add_new_doctor_name').val();
		var surname = $('#add_new_doctor_surname').val();
		var curdate = $('#add_new_doctor_date_input').val();
		var mode=1; //doctor
		//alert(curdate);
		 $.ajax({ 					
		   type:"POST",  				                                   
	       url: 'php/add_user.php',	               //the script to call to get data          
	       data: {mode:mode, login:login, password:password, name:name, surname:surname, curdate:curdate},
	                              //you can insert url argumnets here to pass to api.php
	                                       //for example "id=5&parent=6"
	      dataType: 'json',                //data format      
	      success: function(data)          //on recieve of reply
	      {
	      	//alert(data);
//alert about succes of adding a new Doctor to the DataBase
	      	var status = data;
	      	if(data==true)
	      	{
	      		$('#pop_up_h1').text("Dodano do bazy");
	      		$('#pop_up_p').text("Do bazy danych dodano wszystkie wymagane rekordy");
	      		//$.mobile.changePage( $("#pop_up_page"), "flip", true, true);
	      	}
	      	/*var pass = data[0][0];
	      	var perm = data[0][1];
	      	if($('#password_id').val()==pass)
	      	{
	      		if(perm=="admin")
	      		{
	      			$.mobile.changePage( $("#admin_page"), "slide", true, true);
	      		}
	      		if(perm=="nurse")
	      		{
	      			$.mobile.changePage($('#nurse_page'),"slide",true,true);
	      		}
	      		if(perm=="doctor")
	      		{
	      			$.mobile.changePage($('#add_new_doctor_page'),"slide",true,true);
	      		}
	      	}*/
	        
	      }
	    }); 
	});
});
/**
* end of add_new_doctor_page
**/

/**
* Module: Add Nurse
* Add new Nurse's page from the /Admin/ position. 
**/
$( document ).ready(function() {
	$('#add_new_nurse_button').on('click',function(){
		//Nurse's data
		var login= $('#add_new_nurse_login').val();
		var password= $('#add_new_nurse_password').val();
		var name = $('#add_new_nurse_name').val();
		var surname = $('#add_new_nurse_surname').val();
		var curdate = $('#add_new_nurse_date_input').val();
		var mode=2; // it's a Nurse
		//alert(curdate);
		 $.ajax({ 					
		   type:"POST",     			                               
	       url: 'php/add_user.php', 	                  //the script to call to get data          
	       data: {mode:mode, login:login, password:password, name:name, surname:surname, curdate:curdate}, 
	                              //you can insert url argumnets here to pass to api.php
	                                       //for example "id=5&parent=6"
	      dataType: 'json',                //data format      
	      success: function(data)          //on recieve of reply
	      {
	      	//alert(data);
//alert about a succes of adding a new Nurse to the DataBase
	      	var status = data;
	      	if(data==true)
	      	{
	      		$('#pop_up_h1').text("Dodano do bazy");
	      		$('#pop_up_p').text("Do bazy danych dodano wszystkie wymagane rekordy");
	      		//$.mobile.changePage( $("#pop_up_page"), "flip", true, true);
	      	}
	      	/*var pass = data[0][0];
	      	var perm = data[0][1];
	      	if($('#password_id').val()==pass)
	      	{
	      		if(perm=="admin")
	      		{
	      			$.mobile.changePage( $("#admin_page"), "slide", true, true);
	      		}
	      		if(perm=="nurse")
	      		{
	      			$.mobile.changePage($('#nurse_page'),"slide",true,true);
	      		}
	      		if(perm=="doctor")
	      		{
	      			$.mobile.changePage($('#add_new_doctor_page'),"slide",true,true);
	      		}
	      	}*/
	        
	      }
	    }); 
	});
});
/**
* end of add_new_nurse_page
**/


/**
* Module: Show employees
* Display all hired employees from the /Admin/ position.
**/
$(document).ready(function() {
	$('#show_all_employees_button').on("click",function(){
		var mode = 3;// all employees
   		  $.ajax({ 					   
		   type:"POST",    			                                  
    	   url: 'php/delete_user.php',                  //the script to call to get data          
	       data: {mode:mode}, 		  
	                              //you can insert url argumnets here to pass to api.php
	                                       //for example "id=5&parent=6"
	      dataType: 'json',                //data format      
	      success: function(data)          //on recieve of reply
	      {
	      	//alert(data);
	      	var json = data;
	      	//alert(json);
//display data of hired employees
	      	$('#example').columns({
	      		data:json,
	      		schema: [
                  {"header":"Login", "key":"0"},
                  {"header":"Poziom dostępu", "key":"1"},
                  {"header":"Data Zatrudnienia", "key":"2"},
                  {"header":"Imie", "key":"3"},
                  {"header":"Nazwisko", "key":"4"}
              ]
	      		
		    });
		    //alert(document.getElementById('example').innerHTML);
	      	
	        
	      }
	    });
	});
	
	

    

});
/**
* end of show_all_employees
**/


/**
* Module: Show patients
* Display all patients assigned to certain doctor.
**/
$(document).ready(function() {
	$('#show_all_patients_button').on("click",function(){
		var mode = 1;// all patients
   		  $.ajax({ 					   
		   type:"POST",    			                                  
    	   url: 'php/patients.php',                  //the script to call to get data          
	       data: {mode:mode,id:cur_usr_id}, 		  
	                              //you can insert url argumnets here to pass to api.php
	                                       //for example "id=5&parent=6"
	      dataType: 'json',                //data format      
	      success: function(data)          //on recieve of reply
	      {
	      	//alert(data);
	      	var json = data;
	      	console.log(json);
	      	//alert(json);
//display data of hired employees
	      	$('#show_all_patient_list').columns({
	      		data:json,
	      		schema: [
                  {"header":"PESEL", "key":"0"},
                  {"header":"Imie", "key":"1"},
                  {"header":"Nazwisko", "key":"2"},
                  {"header":"Nr. tel", "key":"3"},
                  {"header":"Miejscowość", "key":"4"},
                  {"header":"Kod pocztowy", "key":"5"},
                  {"header":"Ulica", "key":"6"},
                  {"header":"Nr domu", "key":"7"},
                  {"header":"Nr mieszkania", "key":"8"}
              ]
	      		
		    });
		    //alert(document.getElementById('example').innerHTML);
	      	
	        
	      }
	    });
	});
	
	

    

});
/**
* end of show_all_patients
**/

//////////////////////////////////change_employees_permission

$(document).ready(function(){
	
	
	//$( "#selectable" ).selectable();
	//$( "#selectable" ).on( "selectableselected", function( event, ui ) {a.push(ui.selected.innerHTML);a=_.uniq(a);console.log(a);/*alert(_.uniq(a));*/} );
	x=0;
	nr_of_users=0;
	$('#change_employees_permission_button').on("click",function(){
		$("#selectable").empty();
		$("#selectable1").empty();
		$.ajax({ 						  
		   type:"POST",                
	       url: 'php/delete_user.php',         //the script to call to get data          
	       data: {mode: "4"},			 
	                              			//you can insert url argumnets here to pass to api.php
	                                       //for example "id=5&parent=6"
	      dataType: 'json',                //data format      
	      success: function(data)          //on recieve of reply
	      {
	      	//alert(data);
	      	for (i in data){
	      		var login=data[i][0];
	      		var name=data[i][1];
	      		var surname=data[i][2];
	      		//alert(data[i]);
		      	$("#selectable").append("<li"+" id=\"selectable_row"+ i +'\"'+">" + login + ' ' + name + ' ' + surname + "</li>");
	      		nr_of_users=nr_of_users+1;
	      	}
	      	//document.getElementById('delete_doctor_page_div').innerHTML=document.getElementById('delete_doctor_page_div').innerHTML+'<li style="background:#fff" data-role="fieldcontain" class="ui-field-contain ui-body ui-br ui-li ui-li-static ui-body-c">		    		<label style="border:none" for="add_new_doctor_login" class="ui-input-text">Wpisz login osoby do usunięcia:</label>		 <br>   		<input type="text" name="name" id="add_new_doctor_login" value="" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset"></li>';
	      	
			
	        
	      } 
	    });
		
	});

	$('#change_employees_permission_button').on("click",function(){
		$("#selectable1").append("<li>" +'Pielęgniarka'+ "</li>");
		$("#selectable1").append("<li>" +'Lekarz'+ "</li>");
		$("#selectable1").append("<li>" +'Administrator'+ "</li>");
		
	});
	
	$( "#selectable" ).selectable({
      stop: function() {
        var a=[];
        $( ".ui-selected", this ).each(function() {
          var index = $( "#selectable li" ).index( this );
          a.push(( index + 1 ) );

        });
        console.log(a);
      }
    });

    $("#selectable1").selectable({
      stop: function() {
        var a=0;
        $( ".ui-selected", this ).each(function() {
          var index = $( "#selectable1 li" ).index( this );
          a=(( index + 1 ) );

        });
        console.log(a);
      }
    });

    $("#change_user_permission_accept").on("click",function(){
    	
    	
		
    });

	
	$('#change_employees_text').bind("input",function(){
		
		//console.log($("#change_employees_text").val());
		var temp='';
		x=0;
		for (var i=0;i<nr_of_users;i++)
		{
			//console.log(nr_of_users);
			temp=$('#selectable_row'+x).text().toLowerCase();
			//console.log();
			//alert(typeof(temp));
			if(temp.indexOf($('#change_employees_text').val())==-1)
			{
				$("#selectable_row"+x).hide();
			}
			x++;
			//console.log(i);
		}
		$("#selectable_row"+x).hide();
		
		
	});
});




//////////////////////////////////change_employees_permission