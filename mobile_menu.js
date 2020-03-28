// JQuery script to open and close mobile menu on click
$(function() 
{
	var menu_is_visible = false;

	$('#hamburger a').click(function() 
	{
		if(menu_is_visible) 
		{
			$('#menu a').css({'display':'none'});
			menu_is_visible = false;
			return;
		}

		//$('#menu').css({'display':'block'});
		$("#menu").fadeToggle();
		$("#hamburger").fadeToggle();
		menu_is_visible = true;
	});

	$('#menu').click(function() 
	{
		//$(this).css({'display':'none'});
		$(this).fadeToggle();
		$("#hamburger").fadeToggle();
		menu_is_visible = false;
	});
});