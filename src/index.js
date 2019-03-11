import './myStyle.css';
import _ from 'flexboxgrid';

window.onload = function(){
	console.log("hello")
	setInterval(function(){loadPage();}, 1000);
}

function loadPage(){
	document.getElementsByTagName("body")[0].style.display = "block";
}


function animateMenuBtn(x){
	var leftDot = x.getElementsByTagName('span')[0];
	var midDot = x.getElementsByTagName('span')[1];
	/*var midDot2 = x.getElementsByTagName('span')[2];*/
	var rightDot = x.getElementsByTagName('span')[2];
	leftDot.classList.toggle("moveRight");
	rightDot.classList.toggle("moveLeft");

	midDot.classList.toggle("grow");
	/*midDot2.classList.toggle("grow2");*/

	toggleMenu();
}

function toggleMenu(){
	var menu = document.getElementById("menu");

	if(menu.classList.contains("liftUpMenu")){
		menu.style.display = "block";
		menu.classList.replace("liftUpMenu", "dropDownMenu");
	}
	else if(menu.classList.contains("dropDownMenu")){
		menu.classList.replace("dropDownMenu","liftUpMenu");
		setTimeout(function(){ menu.style.display = "none"; }, 500);
	}
	else{
		menu.style.display = "block";
		menu.classList.add("dropDownMenu");
	}

}

function showImg(x){
	document.getElementById(x).style.opacity = 1;
}

function hideImg(x){
	document.getElementById(x).style.opacity = 0;
}


window.animateMenuBtn = animateMenuBtn;
window.showImg = showImg;
window.hideImg = hideImg;
