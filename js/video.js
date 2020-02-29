var video;
var volume;

function getVid(){
    video = document.querySelector("#myVideo"); 
    volume = document.querySelector("#volume");
}

function playVid() {
    video.play();
    console.log("Play Video");
    volume.innerHTML = video.volume * 100 + "%";
} 

function pauseVid() { 
    video.pause();
    console.log("Pause Video");
    
} 

function decreaseSpeed() { 
    video.playbackRate *= 0.8
    console.log("Speed is " + video.playbackRate);
} 

function increaseSpeed() {
    video.playbackRate *= 1.25
    console.log("Speed is " + video.playbackRate);
} 

function skipAhead() {
    video.currentTime += 60;
    console.log("Current location is "+ 1);
} 

function mute() {
    if (video.muted){
        console.log("Changing to unmuted");
        video.muted = false;
        document.getElementById("mute").innerHTML = "Unmuted";

    } else {
        console.log("Changing to muted");
        video.muted = true;
        document.getElementById("mute").innerHTML = "Muted";
    }
          
}

function changeVolume() {  
    slider = document.querySelector("#volumeSlider");
    video.volume = slider.value / 100;
    volume.innerHTML = video.volume * 100 + "%";
    console.log("Volume is ", slider.value);
}
       

function gray() { 
    document.querySelector("#myVideo").classList.add("grayscale");
    console.log("In grayscale")
}

function color() {
    document.querySelector("#myVideo").classList.remove("grayscale");
    console.log("In color") 
}