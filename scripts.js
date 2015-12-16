//////////////////////////strona główna
$( document ).ready(function() {
	$('#button1').on('click',function(){
			var login = $('#login_id').val();
			$.ajax({ 
			  type:"POST",                                     
	      url: 'singing_in.php',                  //the script to call to get data          
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
	      		if(perm=="user")
	      		{
	      			$.mobile.changePage($('#nurse_page'),"slide",true,true);
	      		}
	      	}
	        
	      } 
	    });



			/*if($.trim(login) != '') //trim usuwa spacje
			{
				$.post('user_name.php',{login : login},function(data){
						alert(data[0]);
						if($("#password_id").val()==data)
						{
							$.mobile.changePage( $("#page2"), "slide", true, true);
						}
						//w tym miejscu następuje rurchomienie pliku name.php i przekazanie mu zmiennej która nazywać się będzie name a wartość jej to będzie to co siedzi w zmienej tymczasowej name stworzonej wcześniej. to co zostanie zwrócone to data,które jest argumentem funkcji
				});
			}*/
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

