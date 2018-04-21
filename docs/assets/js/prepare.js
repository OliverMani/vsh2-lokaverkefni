/**
* Þetta á að vera á hverri einustu síðu

(Skrifa af Óliver Mána)
*/

function sleep(millis){
	var date = new Date();
	var now = date.getMilliseconds();

	while(new Date().getMilliseconds() - now < millis);
}

/* COOKIES */

function getMinute(sec){
	return sec * 60;
}

function setCookie(cname, cvalue, millis) {
    var d = new Date();
    d.setTime(d.getTime() + (millis*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return undefined;
}


/*
* HLEÐ SOUND EFFECTS
*/

const audio = new Audio("../assets/audio/bg.mp3");
const waves = new Audio("../assets/audio/waves.mp3");

audio.loop = true;
var cTime = getCookie("dur");

audio.volume = 0.2;

console.log(getCookie("pause"));

var playing = getCookie("pause") == "false";

if(playing)
	audio.play();
else
	audio.pause();



if(document.cookie != undefined){
	var list = document.cookie.split(";");
	var dur = cTime || 0;
	audio.currentTime = dur;
	console.log(0);
}

function ts(f_audio, pause){
	if(pause) {
		f_audio.pause();
	}
	else {
		f_audio.play();
	}
}


/**
* LISTENERS
*/



window.addEventListener("beforeunload", function(e){
	setCookie("dur", audio.currentTime, audio.duration);
	setCookie("pause", audio.paused, 10000);
});