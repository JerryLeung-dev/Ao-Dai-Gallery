
var pic1 = document.getElementById('img-1');
var pic2 = document.getElementById('img-2');
var pic3 = document.getElementById('img-3');

function handleImage(number){
	pic1.style.backgroundImage = "url('./images/schoolgirl-"+number+"a.jpg')";
	pic2.style.backgroundImage = "url('./images/schoolgirl-"+number+"b.jpg')";
	pic3.style.backgroundImage = "url('./images/schoolgirl-"+number+"c.jpg')";
}

