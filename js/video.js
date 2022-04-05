var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
	console.log("The current volume is " + video.volume)
	this.document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
video.play()
 });

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
	 });

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate *= .95
	console.log("New speed is " + video.playbackRate)
	 });

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate /= .95
	console.log("New speed is " + video.playbackRate)
	 });

document.querySelector("#skip").addEventListener("click", function() {
	rn = video.currentTime
	console.log("Current location is " + rn)
	if (video.duration - video.duration > 15) {
		video.currentTime += 15
	}
	else{
		console.log("Replaying video")
		video.currentTime = 0
	}
	console.log("New location is " + video.currentTime)
	 });

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted);
	if (video.muted == true){
		video.muted = false
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	});

document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector("#player1").classList.add("oldSchool")
	});

document.querySelector("#orig").addEventListener("click", function() {
	document.querySelector("#player1").classList.remove("oldSchool")
	});