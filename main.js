var kvadratik = document.getElementsByClassName("box")[0];
var text = document.getElementsByClassName("text")[0];


kvadratik.addEventListener("click", function(){
	kvadratik.classList.add("box-widht");


	setTimeout(function() {
		text.classList.add("text-opacity");
		kvadratik.classList.remove("box-widht");
		kvadratik.classList.add("box-right");
	}, 2000);

	setTimeout(function(){
		kvadratik.classList.remove("box-right");
		kvadratik.classList.add("circle");
	}, 3500);
});




