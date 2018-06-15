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
	console.log("hello");
	let elmnt = document.getElementById(id)
	elmnt.scrollIntoView({behavior:"smooth",block:"start"});
	let mobilemenu = document.getElementById('mobile-menu-links');
	if(mobilemenu.style.display === "block"){
		toggle();
		mobilemenu.style.display = "none";
	}
	updateLinkCSS(id);
}

function toggle(){
	console.log("toggle");
	let topLine = document.getElementById('top-line');
  let bottomLine = document.getElementById('bottom-line');
  let menu = document.getElementById('mobile-menu-links');
  let menubtn = document.getElementById('btn');
  if(topLine.classList.contains('lean-right')){//close
  	topLine.classList.remove('lean-right');
    bottomLine.classList.remove('lean-left');
    topLine.classList.add('top-parallel');
    bottomLine.classList.add('bottom-parallel');
    menu.style.display = "none";
    menubtn.style.backgroundColor = "rgba(0,0,0,0.87";
  }else{
 	topLine.classList.remove('top-parallel');
    bottomLine.classList.remove('bottom-parallel');
    topLine.classList.add('lean-right');
    bottomLine.classList.add('lean-left');
    menu.style.display = "block";
    menubtn.style.backgroundColor = "transparent";
  }

}

//traverse all elemenets by the class name "nav-link"
  //remove class active
// find element with class name id-link
// traverse all elements
	//add class active

const menuItems = document.getElementsByClassName("nav-link");
function updateLinkCSS(id){
	[].forEach.call(menuItems, function(x){
		x.classList.remove("active");
	});

	let elems = document.getElementsByClassName(id+"-link");
	console.log(elems);
	[].forEach.call(elems, function(x){
		console.log("active");
		x.classList.add("active");
	});
}

window.addEventListener('scroll', function(e){
	console.log("scrolling");
	let id = document.elementFromPoint(0,53).id;
	console.log(id);
	if(id != ""){
		updateLinkCSS(id);
	}
});