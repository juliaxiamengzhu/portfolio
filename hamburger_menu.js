var hamburger = document.getElementById("hamburger-icon");
var overlay = document.getElementById("overlay");
var menu = document.getElementById("menu");

//Function for opening and closing menu 
hamburger.onclick = function(){
	if (menu.id == "menu"){
		hamburger.style.color = "#BC4C3F";
		menu.id = "menu-responsive";
		overlay.style.display = "block";
	} else {
		hamburger.style.color = "#828282";
		menu.id = "menu";
		overlay.style.display = "none";
	}
}

//function for closing menu when click on the overlay
window.onclick = function(event) {
  if (event.target == overlay) {
  	hamburger.style.color = "#828282";
    overlay.style.display = "none";
    menu.id = "menu";
  }
} 