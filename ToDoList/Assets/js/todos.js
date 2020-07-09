//check of specific todos by clicking
$("ul").on("click", "li", function(){

	$(this).toggleClass("completed");
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 	color: "black",
	// 	textDecoration: "none"
	// });
	// }
	// else{
	// $(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through"
	// });}
});


//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//enter a new todo
$("input[type = 'text']").keypress(function(e){
	if(e.which ===13){
		//grab new todo from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add it to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});




