//////////////////////////////////////////////////////////////////////////////////////////////////////
// LE BACKGROUND COLOR DU RECTANGLE DEVIENT VERT
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Methode 1

/*function couleur()
{
	document.getElementById('rectangle').style.backgroundColor ='#74D3AE';
}

var btnvert = document.getElementById('vert');
btnvert.addEventListener("click", couleur);*/

// Methode 2

document.getElementById('vert').addEventListener("click",  () => 
{
	document.getElementById('rectangle').style.backgroundColor ='#74D3AE';
});


//////////////////////////////////////////////////////////////////////////////////////////////////////
// LE BACKGROUND COLOR DU RECTANGLE REDEVIENT BLEU
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Methode 1

/*function noCouleur()
{
	document.getElementById('rectangle').style.backgroundColor ="";
}

var btnColorBack = document.getElementById('reset');
btnColorBack.addEventListener('click', noCouleur);*/

// Methode 2

document.getElementById('reset').addEventListener('click', function() {
	document.getElementById('rectangle').style.backgroundColor = '';
});

//////////////////////////////////////////////////////////////////////////////////////////////////////
// LE RECTANGLE DISPARAIT
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Methode 1

/*function hide ()
{
	document.getElementById('rectangle').style.visibility = 'hidden';
}
var btnHide = document.getElementById('hide');
btnHide.addEventListener('click', hide);*/

// Methode 2

document.getElementById('hide').addEventListener('click', function(){
	document.getElementById('rectangle').style.visibility = 'hidden'
});

//////////////////////////////////////////////////////////////////////////////////////////////////////
// LE RECTANGLE EST VISIBLE
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Methode 1

/*function show ()
{
	document.getElementById('rectangle').style.visibility = 'visible';
}
var btnShow = document.getElementById('show');
btnShow.addEventListener('click', show);*/

// Methode 2

document.getElementById('show').addEventListener('click', function(){
	document.getElementById('rectangle').style.visibility = 'visible';
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
// + 10PX JUSQU'A 300PX PUIS BACK TO 100PX
//////////////////////////////////////////////////////////////////////////////////////////////////////
function grow ()
{
	var rectangle = document.getElementById('rectangle');
	var hauteur = rectangle.offsetHeight;

	if ( hauteur < 300 ) {
		rectangle.style.height = hauteur + 10 + 'px';
	} else {
		rectangle.style.height = '100px';
	}

}
var btnGrow = document.getElementById('hauteur');
btnGrow.addEventListener('click', grow);


//////////////////////////////////////////////////////////////////////////////////////////////////////
// LA TAILLE DU TEXTE AUGMENTE AU CLICK
//////////////////////////////////////////////////////////////////////////////////////////////////////
function growTxt ()
{

	if (document.getElementById('txt').style.fontSize == '0.7em') {
		document.getElementById('txt').style.fontSize = '1.1em';
	}else {
		document.getElementById('txt').style.fontSize = '0.7em';
	}

}
document.getElementById('txt').addEventListener('click', growTxt);

//////////////////////////////////////////////////////////////////////////////////////////////////////
// LE RECTANGLE MONTE LORSQU'ON APPUIE SUR LA TOUCHE FLECHE HAUT
//////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('keydown', function(event) {
	event.preventDefault();

	if (event.keyCode == 38) {
		document.getElementById('rectangle2').style.top = '50px';

	}
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
// LE RECTANGLE REPREND SA PLACE LORSQU'ON RELACHE LA TOUCHE FLECHE HAUT
//////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('keyup', function(event) {
	

	if (event.keyCode == 38) {
		document.getElementById('rectangle2').style.top = '150px';

	}
});
/////////////////////////////////////////////////////////////////////////////


let rectangle2 = document.getElementById('rect');
let postop = rectangle2.offsetTop;
let posleft = rectangle2.offsetLeft;
let parent = document.getElementById('parent');
let speed = 40;

//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// ESSAI DE CHANGEMENT DE VITESSE PAR USER ///// NE FONCTIONNE PAS PARFAITEMENT//////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/*window.onload = function() {

	what();

	function what() {
		document.getElementById('speedvalue').innerHTML = speed;
	};

}

document.getElementById('speedUp').addEventListener('click', function(){
	if (speed < 100 ) {
		speed = speed + 10;
		document.getElementById('speedvalue').innerHTML = speed;
		console.log(speed);
	}
});
document.getElementById('speedDown').addEventListener('click', function(){
		if (speed > 10){
		speed = speed - 10;
		document.getElementById('speedvalue').innerHTML = speed;
		console.log(speed);	
});

*/


//console.log(posleft);
//console.log(postop);
//console.log(parent.clientHeight);
//console.log(parent.clientWidth);

document.addEventListener('keydown', function(event) {
	event.preventDefault(); // prevent scrolling page while keypress arrows

	if (event.keyCode == 39  || event.keyCode == 102 ) {
		if(posleft < (parent.clientWidth - rectangle2.clientWidth )){
			let newLeft = posleft + speed;
			rectangle2.style.left = newLeft + 'px';
			posleft = newLeft;
			console.log(posleft);
			console.log(newLeft);
		}
	}
	if (event.keyCode == 37 || event.keyCode == 100) {
		if (posleft > 0 ) {
			let newLeft = posleft - speed;
			rectangle2.style.left = newLeft + 'px';
			posleft = newLeft;
			console.log(posleft);
			console.log(newLeft);
		}
	}
	if (event.keyCode == 38 || event.keyCode == 104 ) {
		if (postop > 0 ) {
			let newTop = postop - speed;
			rectangle2.style.top =  newTop + 'px';
			postop = newTop;
			console.log(postop);
			console.log(newTop);
		}
	}
	if (event.keyCode == 40  || event.keyCode == 98) {
		if (postop < parent.clientHeight - rectangle2.clientHeight) {
			let newTop = postop + speed;
			rectangle2.style.top =  newTop + 'px';
			postop = newTop;
			console.log(postop);
			console.log(newTop);
		}
	}
});



