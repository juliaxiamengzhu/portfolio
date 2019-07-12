var hamburger = document.getElementById("hamburger-icon");
var overlay = document.getElementById("overlay");
var menu = document.getElementById("menu");

//Function for opening and closing menu 
hamburger.onclick = function(){
	if (menu.id == "menu"){
		menu.id = "menu-responsive";
		overlay.style.display = "block";
	} else {
		menu.id = "menu";
		overlay.style.display = "none";
	}
}

//function for closing menu when click on the overlay
window.onclick = function(event) {
  if (event.target == overlay) {
    overlay.style.display = "none";
    menu.id = "menu";
  }
} 