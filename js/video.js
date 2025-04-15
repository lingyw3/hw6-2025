var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video = document.querySelector("#player1");

	// Disable autoplay and looping
	video.autoplay = false;
	video.loop = false;
	video.load();

	// PLAY
	document.querySelector("#play").addEventListener("click", function() {
		video.play();
		document.querySelector("#volume").textContent = `${video.volume * 100}%`;
		console.log("Play Video");
	});

	// PAUSE
	document.querySelector("#pause").addEventListener("click", function() {
		video.pause();
		console.log("Pause Video");
	});

	// SLOW DOWN
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log("New speed is", video.playbackRate);
	});

	// SPEED UP
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate /= 0.9;
		console.log("New speed is", video.playbackRate);
	});

	// SKIP AHEAD
	document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		console.log("Current location", video.currentTime);
	});

	// MUTE / UNMUTE
	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted) {
			video.muted = false;
			this.textContent = "Mute";
		} else {
			video.muted = true;
			this.textContent = "Unmute";
		}
	});

	// VOLUME SLIDER
	document.querySelector("#slider").addEventListener("input", function() {
		video.volume = this.value / 100;
		document.querySelector("#volume").textContent = `${video.volume * 100}%`;
		console.log("Volume is", video.volume);
	});

	// ADD OLDSCHOOL CLASS
	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});

	// REMOVE OLDSCHOOL CLASS
	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
});

