/**
* Þetta á að vera á hverri einustu síðu

(Skrifað af Óliver Mána)
*/


/*
* HLEÐ SOUND EFFECTS
*/

const audio = new Audio("assets/audio/bg.mp3");

audio.preload = true;
audio.loop = true;


audio.volume = 0.2;

//audio.play();
// Toggle Sound
function ts(f_audio, pause){
	if(pause) {
		f_audio.pause();
	}
	else {
		f_audio.play();
	}
}