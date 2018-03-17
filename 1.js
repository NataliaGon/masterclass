var color = document.getElementById('color');
var text = document.getElementById('text');
window.onload = function() {	
	color.classList.add('transf');	
	setTimeout(smaller, 1000);
}
function smaller(){
	text.style.display="block";
	color.classList.remove('transf');
	color.classList.add('transf1');
	setTimeout(none, 300);	
}
function none(){
	color.style.display="none";
}