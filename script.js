console.log("Welcome To Spotify");


let songIndex = 0;
let audioElement = new Audio('song\\1.mp3');
let masterPlay = document.getElementById('masterplay');
let progressBar = document.getElementById('myProgressbar');
let songlist = [
    { filePath: "song/1.mp3" , songName: "Steal My Girl"},
    { filePath: "song/2.mp3" , songName: "Maan Meri Jaan"},
    { filePath: "song/3.mp3" , songName: "Raatan Lambiyaan"},
    { filePath: "song/4.mp3" , songName: "Stay"},
    { filePath: "song/5.mp3" , songName: "See You Again"},
    { filePath: "song/6.mp3" , songName: "Peaches"},
    { filePath: "song/7.mp3" , songName: "Kesariya"},
    { filePath: "song/8.mp3" , songName: "Night Changes"},
    { filePath: "song/9.mp3" , songName: "What Makes You Beautiful"},
    { filePath: "song/10.mp3" , songName: "Tera Hua Na Mai Kabhi"},
]



masterPlay.addEventListener('click', mouseClickmasterPlay);
function mouseClickmasterPlay() {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        makeallPlays();
    }
}

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = ((progressBar.value * audioElement.duration) / 100);
})

function makeallPlays() {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex + 1}.mp3`;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        masterplaySongname.innerText = songlist[songIndex].songName;
    })
})

document.getElementById("next").addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
    masterplaySongname.innerText = songlist[songIndex].songName;
})

document.getElementById("previous").addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex + 1}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.add('fa-circle-pause');
    masterPlay.classList.remove('fa-circle-play');
    masterplaySongname.innerText = songlist[songIndex].songName;
})
