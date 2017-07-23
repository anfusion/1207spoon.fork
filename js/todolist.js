//check off todos by clicking (strike through)
$("ul").on("click", "li",function () {
	// if li is gray
	$(this).toggleClass("completed");
});

//click on X to delete todo item
$("ul").on("click", "span", function (event) {
	$(this).parent().fadeOut(400,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress",function(e) {
	if (e.which === 13) {
		//grab new todo text
		var toDoText = $(this).val();
		$(this).val("");
		//creat new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>")
	}
});

$("h1 i").on("click", function () {
		//below is meant to change the icon but it doesnt work  (even tho class changes coreectly)
		// $("h1 i").toggleClass("fa-pencil-square-o fa-minus-sqaure-o"); 
		//fade in-out the todo text input   	
		$("input[type='text']").fadeToggle();
})
