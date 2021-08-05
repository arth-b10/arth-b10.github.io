$(function(){

	var $write;
	$('#Keyboard').hide();

	$('#writeL').click(function(){
		$('#Keyboard').show();
		return $write = $('#writeL');
	});

	$('#writeM').click(function(){
		$('#Keyboard').show();
		return $write = $('#writeM');
	});

	$('#writeR').click(function(){
		$('#Keyboard').show();
		return $write = $('#writeR');
	});

	$(document).on("touchstart", function(e){
		e.target


	});

	$(document).on("touchmove", function(e){


	});

	$(document).on("touchend", function(e){
		var clickedItem = e.target.id;
		var character;

		switch (clickedItem) {
      case "Enter":
          character = "Enter";
        break;
      case "A":
          character = "A"
        break;  
      case "B":
          character = "B"
        break;
      default:
       	character = "_"
       }

       $write.html($write.html() + character);
	});
	
	/*
	$('#keyboard div').click(function(){
		var $this = $(this),
			character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
		
		// Delete
		if ($this.hasClass('deleteL') || $this.hasClass('deleteR')) {
			var html = $write.html();
			
			$write.html(html.substr(0, html.length - 1));
			return false;
		}
		
		// Enter
		if ($this.hasClass('returnL') || $this.hasClass('returnR')) {

			$('#keyboard').hide();
			return false;
		}
		
		// Add the character
		$write.html($write.html() + character);
	});*/
});
