var audi = document.getElementById('audi');
var music = document.getElementById('music-icon');

music.addEventListener('click', handleMusic);

function handleMusic(){
	if (audi.paused){
	    audi.play(); 
	    document.getElementById("music-icon").style.animation = "animate 1.5s infinite";
	 }
	else {
	    audi.pause(); 
		document.getElementById("music-icon").style.animation = "still 0s 0";
	}
}