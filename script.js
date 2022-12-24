console.log("Welcome to Spotify");

// Initialize the Variables
// let songs = [];
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "BROWN MUNDE", filePath: "https://hd1.djjohal.com/320/506017/Brown%20Munde%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
    {songName: "DRIP", filePath: "https://hd1.djjohal.com/320/506692/Drip%20Ft%20Duvy%20-%20Ap%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/2.jpg"},
    {songName: "Takeover", filePath: "https://hd1.djjohal.com/320/506689/Takeover%20Ft%20AR%20Paisley%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/3.jpg"},
    {songName: "Saada pyaar", filePath: "https://hd1.djjohal.com/320/506653/Saada%20Pyaar%20Original%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/4.jpg"},
    {songName: "Majhail", filePath: "https://hd1.djjohal.com/320/505258/Majhail%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/5.jpg"},
    {songName: "WAR", filePath: "https://hd1.djjohal.com/320/509937/WAR%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/6.jpg"},
    {songName: "EXCUSES", filePath: "https://hd1.djjohal.com/320/505554/Excuses%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/7.jpg"},
    {songName: "G.O.A.T", filePath: "https://hd1.djjohal.com/320/506690/Goat%20Ft%20Money%20Musik%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/8.jpg"},
    {songName: "TERE TE", filePath: "https://hd1.djjohal.com/320/509936/TERE%20TE%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/9.jpg"},
    {songName: "DESIRES", filePath: "https://sd2.djjohal.com/128/509933/DESIRES%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]
let songs2 = [
    {songName: "BROWN MUNDE", filePath: "https://hd1.djjohal.com/320/506017/Brown%20Munde%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
    {songName: "DRIP", filePath: "https://hd1.djjohal.com/320/506692/Drip%20Ft%20Duvy%20-%20Ap%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/2.jpg"},
    {songName: "Takeover", filePath: "https://hd1.djjohal.com/320/506689/Takeover%20Ft%20AR%20Paisley%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/3.jpg"},
    {songName: "Saada pyaar", filePath: "https://hd1.djjohal.com/320/506653/Saada%20Pyaar%20Original%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/4.jpg"},
    {songName: "Majhail", filePath: "https://hd1.djjohal.com/320/505258/Majhail%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/5.jpg"},
    {songName: "WAR", filePath: "https://hd1.djjohal.com/320/509937/WAR%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/6.jpg"},
    {songName: "EXCUSES", filePath: "https://hd1.djjohal.com/320/505554/Excuses%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/7.jpg"},
    {songName: "G.O.A.T", filePath: "https://hd1.djjohal.com/320/506690/Goat%20Ft%20Money%20Musik%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/8.jpg"},
    {songName: "TERE TE", filePath: "https://hd1.djjohal.com/320/509936/TERE%20TE%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/9.jpg"},
    {songName: "DESIRES", filePath: "https://sd2.djjohal.com/128/509933/DESIRES%20-%20AP%20Dhillon%20%20Gurinder%20Gill%20(DJJOhAL.Com).mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]
let songs3 = [
  {songName: "TU HI YAAR MERA", filePath: "https://hd1.djjohal.com/320/503226/Tu%20Hi%20Yaar%20Mera%20Pati%20Patni%20Aur%20Woh%20-%20Neha%20Kakkar%20%20Arijit%20Singh%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
  {songName: "CHANNA MERYA", filePath: "https://hd1.djjohal.com/320/477613/Channa%20Mereya%20-%20Pritam%20%20Arijit%20Singh%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
  {songName: "HAWAYIEEN", filePath: "https://hd1.djjohal.com/320/484312/Hawayein%20-%20Arijit%20Singh%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
  {songName: "DARKHAST", filePath: "https://hd1.djjohal.com/320/476550/Darkhaast%20-%20Mithoon%20Arijit%20Singh%20Sunidhi%20Chauhan%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
  {songName: "ITNI SI BAAT HAI", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "HUMARI ADHURI KAHAANI", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "SOCH NA SAKE", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "SANAM RE", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "THE BREAKUP SONG", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "DEAR ZINDAGI", filePath: "https://hd1.djjohal.com/320/477648/Ae%20Zindagi%20Gale%20Laga%20Le%20Take%201%20-%20Amit%20Trivedi%20%20Ilaiyaraaja%20%20Arijit%20Singh%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
  {songName: "KHAIRIYAT", filePath: "https://hd1.djjohal.com/320/502033/Khairiyat%20Happy%20-%20Arijit%20Singh%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
]
let songs4 = [
  {songName: "NO NEED", filePath: "https://hd1.djjohal.com/320/498366/No%20Need%20Original%20-%20Karan%20Aujla%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
  {songName: "DONT WORRY", filePath: "https://hd1.djjohal.com/320/496586/Dont%20Worry%20Ft%20Gurlez%20Akhtar%20-%20Karan%20Aujla%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
  {songName: "Oooooo", filePath: "https://hd1.djjohal.com/320/512637/Oouuu%20-%20Karan%20Aujla%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
  {songName: "THEY KNOW", filePath: "https://hd1.djjohal.com/320/512638/They%20Know%20-%20Karan%20Aujla%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
  {songName: "ON TOP", filePath: "https://hd1.djjohal.com/320/514579/On%20Top%20-%20Karan%20Aujla%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
  {songName: "PLAYERS", filePath: "https://hd1.djjohal.com/320/514878/Players%20-%20Badshah%20%20Karan%20Aujla%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
  {songName: "HINT", filePath: "https://hd1.djjohal.com/320/502895/Hint%20-%20Karan%20Aujla%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
  {songName: "FACTS", filePath: "https://hd1.djjohal.com/320/499764/Facts%20Ft%20Deep%20Jandu%20-%20Karan%20Aujla%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
  {songName: "BAS KAR", filePath: "https://hd1.djjohal.com/320/512124/Bas%20-%20Jaz%20Dhami%20%20Karan%20Aujla%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
  {songName: "AAO PASS MEIN BAITHO", filePath: "https://cdnsongs.com/dren/music/data/Single_Track/202101/Guilty_Song/320/Guilty_Song_1.mp3/Guilty%20Song.mp3", coverPath: "covers/1.jpg"},
  {songName: "MEXICO", filePath: "https://hd1.djjohal.com/320/507206/Mexico%20Original%20-%20Karan%20Aujla%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
]
let songs5 = [
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
]
let songs6 = [
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
]
let songs7 = [
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
]
let songs8 = [
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
]
let songs9 = [
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
  {songName: "", filePath: "", coverPath: "covers/1.jpg"},
]
let songs1 = [
    {songName: "Lemonade", filePath: "https://hd1.djjohal.com/320/513295/Lemonade%20-%20Diljit%20Dosanjh%20(DJJOhAL.Com).mp3", coverPath: "covers/1.jpg"},
    {songName: "Cavaiar", filePath: "https://hd1.djjohal.com/320/513294/Caviar%20-%20Diljit%20Dosanjh%20(DJJOhAL.Com).mp3", coverPath: "covers/2.jpg"},
    {songName: "G.O.A.T", filePath: "https://hd1.djjohal.com/320/505607/Goat%20-%20Diljit%20Dosanjh%20(DJJOhAL.Com).mp3", coverPath: "covers/3.jpg"},
    {songName: "Lamborgini", filePath: "https://hd1.djjohal.com/320/478322/Laembadgini%20-%20Diljit%20Dosanjh%20(DJJOhAL.Com).mp3", coverPath: "covers/4.jpg"},
    {songName: "Hoops", filePath: "https://hd1.djjohal.com/320/508819/Hoops%20-%20Diljit%20Dosanjh%20(DJJOhAL.Com).mp3", coverPath: "covers/5.jpg"},
    {songName: "DO YOU KNOW", filePath: "https://hd1.djjohal.com/320/476106/Do%20You%20Know%20-%20Diljit%20Dosanjh%20(DJJOhAL.Com).mp3", coverPath: "covers/6.jpg"},
    {songName: "CLASH", filePath: "https://hd1.djjohal.com/320/505605/Clash%20-%20Diljit%20Dosanjh%20(DJJOhAL.Com).mp3", coverPath: "covers/7.jpg"},
    {songName: "BORN T0 SHINE", filePath: "https://hd1.djjohal.com/320/505604/Born%20To%20Shine%20-%20Diljit%20Dosanjh%20(DJJOhAL.Com).mp3", coverPath: "covers/8.jpg"},
    {songName: "TAARE", filePath: "https://hd1.djjohal.com/320/505616/Taare%20-%20Diljit%20Dosanjh%20(DJJOhAL.Com).mp3", coverPath: "covers/9.jpg"},
    {songName: "5 TAARA", filePath: "https://hd1.djjohal.com/320/467238/5%20Taara%20-%20Diljit%20Dosanjh%20(DJJOhAL.Com).mp3", coverPath: "covers/9.jpg"},
    {songName: "HAPPY BIRTHDAY", filePath: "https://hd1.djjohal.com/320/467238/5%20Taara%20-%20Diljit%20Dosanjh%20(DJJOhAL.Com).mp3", coverPath: "covers/10.jpg"},
]
function searchByCity(){
  var singer = document.getElementById("input").value;
  console.log(singer);
  if (singer=="ap dhillon"){
    document.body.style.backgroundImage = "url('bg1.jpeg')";
    console.log("hello");
    songs=songs2;
  }
  if (singer=="arijit singh"){
    document.body.style.backgroundImage = "url('https://i.scdn.co/image/ab6761610000e5eb0261696c5df3be99da6ed3f3')";
    document.getElementsById("img").src="bg2.jpg";
    console.log("hello");
    songs=songs3;
  }
  if (singer=="karan aujla"){
    document.body.style.backgroundImage = "url('https://i.scdn.co/image/ab67616d0000b273dd901ebb941ee763eba5620b')";
    console.log("hello");
    songs=songs4;
  }
  if (singer=="diljit dosanjh"){
    document.body.style.backgroundImage = "url('https://i.scdn.co/image/ab6761610000e5eb92103a69abd9fbf76d866374')";
    console.log("hello");
    songs=songs1;
  }

let url = songs[1].filePath;
console.log(url)
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        let url = songs[songIndex].filePath;
        console.log(url)
        audioElement.src = `${url}`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    let url = songs[songIndex].filePath;
    console.log(url)
    audioElement.src = `${url}`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    let url = songs[songIndex].filePath;
    console.log(url)
    audioElement.src = `${url}`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
}
let url = songs[1].filePath;
console.log(url)
songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        let url = songs[songIndex].filePath;
        console.log(url)
        audioElement.src = `${url}`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    let url = songs[songIndex].filePath;
    console.log(url)
    audioElement.src = `${url}`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    let url = songs[songIndex].filePath;
    console.log(url)
    audioElement.src = `${url}`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
