function addHighlight(obj){
	let x = document.getElementById(obj)
	x.style.visibility = "visible"
}

function removeHighlight(obj){
	let x = document.getElementById(obj)
	x.style.visibility = "hidden"
}


function scrollToSection(id){

	let elmnt = document.getElementById(id)
	elmnt.scrollIntoView({behavior:"smooth",block:"start"});
	let mobilemenu = document.getElementById('mobile-menu-links');
	if(mobilemenu.style.display === "block"){
		toggle();
		mobilemenu.style.display = "none";
	}

	updateLinkCSS(id);
}

//Update this. ugly to look at
function toggle(){

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
let  menuItems = document.getElementsByClassName("nav-link");
function updateLinkCSS(id){
	
	[].forEach.call(menuItems, function(x){
		x.classList.remove("active");
	});

	let elems = document.getElementsByClassName(id+"-link");
	[].forEach.call(elems, function(x){
		x.classList.add("active");
	});
}

window.addEventListener('scroll', function(e){

	let id = document.elementFromPoint(0,53).id;

	if(id != ""){
		updateLinkCSS(id);
	}
});

function select(obj){
	let  projectMenuItems = document.getElementById('project-menu').children;
	[].forEach.call(projectMenuItems, function(x){
		x.classList.remove("selected");
	});

	document.getElementById(obj.id).classList.add("selected");
	//if all then show all
	let allProjects = document.getElementById('more-projects').getElementsByClassName('mProject');
	if(obj.id === "all"){
		[].forEach.call(allProjects, function(x){
			x.style.display ="inline-block";
		});
	}else{
		[].forEach.call(allProjects, function(x){
			x.style.display ="none";
		});

		let projects = document.getElementsByClassName(obj.id);
		[].forEach.call(projects, function(x){
			x.style.display = "inline-block";
		});
	}

}
//hide all elements except the ones with class name specified