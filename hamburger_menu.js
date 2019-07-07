var hamburger = document.getElementById("hamburger-icon");
var overlay = document.getElementById("overlay");
var menu = document.querySelector("nav ul");

hamburger.onclick = function(){
	if (menu.style.display === "none"){
		overlay.style.display = "block";
		menu.style.display = "block";
	} else{
		overlay.style.display = "none";
		menu.style.display = "none";
	}
}

overlay.onclick = function(){
	overlay.style.display = "none";
	menu.style.display = "none";
}