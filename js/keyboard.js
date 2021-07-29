$(function(){

	var $write;

	$('#writeL').click(function(e){
		e.preventDefault();
		return $write = $('#writeL');
	});

	$('#writeM').click(function(e){
		e.preventDefault();
		return $write = $('#writeM');
	});

	$('#writeR').click(function(e){
		e.preventDefault();
		return $write = $('#writeR');
	});
	
	$('#keyboard li').click(function(){
		var $this = $(this),
			character = $this.html(); // If it's a lowercase letter, nothing happens to this variable
		
		// Delete
		if ($this.hasClass('deleteL') || $this.hasClass('deleteR')) {
			var html = $write.html();
			
			$write.html(html.substr(0, html.length - 1));
			return false;
		}
		
		// Special characters
		if ($this.hasClass('return')) character = "\n";
		
		// Add the character
		$write.html($write.html() + character);
	});
});
