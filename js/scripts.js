
//////////////////////////strona główna
$( document ).ready(function() {
	$('#button1').on('click',function(){
		var login = $('#login_id').val();
		$.ajax({ 
		  type:"POST",                                     
	      url: 'php/singing_in.php',                  //the script to call to get data          
	      data: {login},
	                              //you can insert url argumnets here to pass to api.php
	                                       //for example "id=5&parent=6"
	      dataType: 'json',                //data format      
	      success: function(data)          //on recieve of reply
	      {
	      	//alert(data[0][0]);
	      	var pass = data[0][0];
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
	      			$.mobile.changePage($('#doctor_page'),"slide",true,true);
	      		}
	      	}
	        
	      } 
	    });



				
	});

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
//////////////////////////////strona główna


//////////////////////////////admin_page

//////////////////////////////admin_page


//////////////////////////////nurse_page

//////////////////////////////nurse_page


//////////////////////////////delete_user
$( document ).ready(function() {
	$('#delete_doctor_button').bind("click",function(){
	var name=1;
	$.ajax({ 
		  type:"POST",                                     
	      url: 'php/delete_user.php',                  //the script to call to get data          
	      data: {mode: "1"},
	                              //you can insert url argumnets here to pass to api.php
	                                       //for example "id=5&parent=6"
	      dataType: 'json',                //data format      
	      success: function(data)          //on recieve of reply
	      {
	      	//alert(data);
	      	for (i in data){
	      		var login=data[i][0];
	      		var password=data[i][1];
	      		var permission=data[i][2];
	      		var hire_date=data[i][3];
	      		var name=data[i][4];
	      		var surname=data[i][5];
	      		//alert(data[i]);
	      		if(permission=="doctor")
	      		{
	      			document.getElementById('delete_doctor_page_ul').innerHTML=document.getElementById('delete_doctor_page_ul').innerHTML+'<li style="background:#fff"data-role="fieldcontain" class="ui-field-contain ui-body ui-br ui-li ui-li-static ui-body-c"> <label style="border:none" for="add_new_doctor_login" class="ui-input-text"><b>'+'Login: </b>'+login+'<b> Imie i Nazwisko: </b>'+name+' '+surname+'</label></li>';
	      		}
	      		if(permission=="nurse")
	      		{
	      			document.getElementById('delete_nurse_page_ul').innerHTML=document.getElementById('delete_nurse_page_ul').innerHTML+'<li style="background:#fff"data-role="fieldcontain" class="ui-field-contain ui-body ui-br ui-li ui-li-static ui-body-c"> <label style="border:none" for="add_new_doctor_login" class="ui-input-text"><b>'+'Login: </b>'+login+'<b> Imie i Nazwisko: </b>'+name+' '+surname+'</label></li>';
	      		}
	      		
	      	}
	      	//document.getElementById('delete_doctor_page_div').innerHTML=document.getElementById('delete_doctor_page_div').innerHTML+'<li style="background:#fff" data-role="fieldcontain" class="ui-field-contain ui-body ui-br ui-li ui-li-static ui-body-c">		    		<label style="border:none" for="add_new_doctor_login" class="ui-input-text">Wpisz login osoby do usunięcia:</label>		 <br>   		<input type="text" name="name" id="add_new_doctor_login" value="" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset"></li>';
	      	
	        
	      } 
	    });
	
	document.getElementById('delete_doctor_page_ul').innerHTML='<li data-role="fieldcontain" class="ui-field-contain ui-body ui-br ui-li ui-li-static ui-body-c"> <label style="border:none" for="add_new_doctor_login" class="ui-input-text">'+'<b>Aktualnie zatrudnieni doktorzy:</b>'+'</label></li>';
	document.getElementById('delete_nurse_page_ul').innerHTML='<li data-role="fieldcontain" class="ui-field-contain ui-body ui-br ui-li ui-li-static ui-body-c"> <label style="border:none" for="add_new_doctor_login" class="ui-input-text">'+'<b>Aktualnie zatrudnione pielęgniarki:</b>'+'</label></li>';
	});
//document.getElementById('delete_doctor_page_div').innerHTML='<li style="background:#fff" data-role="fieldcontain" class="ui-field-contain ui-body ui-br ui-li ui-li-static ui-body-c">		    		<label style="border:none" for="add_new_doctor_login" class="ui-input-text"><b>Login osoby do usunięcia:</b></label></li>		 <li style="background:#fff" data-role="fieldcontain" class="ui-field-contain ui-body ui-br ui-li ui-li-static ui-body-c">   		<input type="text" name="name" id="add_new_doctor_login" value="" class="ui-input-text ui-body-c ui-corner-all ui-shadow-inset"></li>';
});

$( document ).ready(function() {
	$('#delete_user_accept').bind("click",function(){
	var login=$('#delete_doctor_login').val();
	$.ajax({ 
		  type:"POST",                                     
	      url: 'php/delete_user.php',                  //the script to call to get data          
	      data: {mode: "2", login:login},
	                              //you can insert url argumnets here to pass to api.php
	                                       //for example "id=5&parent=6"
	      dataType: 'json',                //data format      
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

//////////////////////////////delete_user


//////////////////////////////add_new_doctor_page
$( document ).ready(function() {
	$('#add_new_doctor_button').on('click',function(){
		var login= $('#add_new_doctor_login').val();
		var password= $('#add_new_doctor_password').val();
		var name = $('#add_new_doctor_name').val();
		var surname = $('#add_new_doctor_surname').val();
		var curdate = $('#add_new_doctor_date_input').val();
		var mode=1;
		//alert(curdate);
		$.ajax({ 
		  type:"POST",                                     
	      url: 'php/add_user.php',                  //the script to call to get data          
	      data: {mode:mode, login:login, password:password, name:name, surname:surname, curdate:curdate},
	                              //you can insert url argumnets here to pass to api.php
	                                       //for example "id=5&parent=6"
	      dataType: 'json',                //data format      
	      success: function(data)          //on recieve of reply
	      {
	      	//alert(data);
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
//////////////////////////////add_new_doctor_page

//////////////////////////////add_new_nurse_page
$( document ).ready(function() {
	$('#add_new_nurse_button').on('click',function(){
		var login= $('#add_new_nurse_login').val();
		var password= $('#add_new_nurse_password').val();
		var name = $('#add_new_nurse_name').val();
		var surname = $('#add_new_nurse_surname').val();
		var curdate = $('#add_new_nurse_date_input').val();
		var mode=2;
		//alert(curdate);
		$.ajax({ 
		  type:"POST",                                     
	      url: 'php/add_user.php',                  //the script to call to get data          
	      data: {mode:mode, login:login, password:password, name:name, surname:surname, curdate:curdate},
	                              //you can insert url argumnets here to pass to api.php
	                                       //for example "id=5&parent=6"
	      dataType: 'json',                //data format      
	      success: function(data)          //on recieve of reply
	      {
	      	//alert(data);
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
//////////////////////////////add_new_nurse_page


//////////////////////////////show_new_employees
$(document).ready(function() {
	$('#show_all_employees_button').on("click",function(){
		var mode = 3;
    	//var json = [{"col1":"row1", "col2":"row1", "col3":"row1","col4":"col4","col5":"col4","col6":"col4","col7":"col4"}, {"col1":"row2", "col2":"row2", "col3":"row2"}, {"col1":"row2", "col2":"row2", "col3":"row2"},{"col1":"row2", "col2":"row2", "col3":"row2"},{"col1":"row2", "col2":"row2", "col3":"row2"},{"col1":"row2", "col2":"row2", "col3":"row2"},{"col1":"row2", "col2":"row2", "col3":"row2"}]; 
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
//////////////////////////////show_new_employees