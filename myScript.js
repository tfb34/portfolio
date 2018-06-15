function addHighlight(obj){
	let x = document.getElementById(obj)
	x.style.visibility = "visible"
}

function removeHighlight(obj){
	let x = document.getElementById(obj)
	x.style.visibility = "hidden"
}


function scrollToSection(id){

	//let m = document.getElementById(id+'-link');
	//m.style.color = "green";
	let elmnt = document.getElementById(id)
	elmnt.scrollIntoView({behavior:"smooth",block:"start"});
}

function toggle(){
	console.log("toggle");
	let topLine = document.getElementById('top-line');
  let bottomLine = document.getElementById('bottom-line');
  let menu = document.getElementById('mobile-menu-links');

  if(topLine.classList.contains('lean-right')){//close
  	topLine.classList.remove('lean-right');
    bottomLine.classList.remove('lean-left');
    topLine.classList.add('top-parallel');
    bottomLine.classList.add('bottom-parallel');
    menu.style.display = "none";

  }else{
 	topLine.classList.remove('top-parallel');
    bottomLine.classList.remove('bottom-parallel');
    topLine.classList.add('lean-right');
    bottomLine.classList.add('lean-left');
    menu.style.display = "block";
  }

}