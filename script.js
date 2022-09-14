console.log("Welcome to Rishitha's personalized spotify")

//initialising the variables
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
//let songsArray=['Arctic Monkeys - Cigarette Smoker Fiona','Arctic Monkeys - From The Ritz To The Rubble','Arctic Monkeys - I Bet You Look Good On The Dancefloor','Arctic Monkeys - No. 1 Party Anthem','Arctic Monkeys - Old Yellow Bricks','Arctic Monkeys - One For The Road','Arctic Monkeys - Snap Out Of It'];

let songs=[
    {songName:"Cigarette Smoker Fiona", filePath:"songs/1.mp3", coverPath:"Covers/cover1.webp"},
    {songName:"From The Ritz To The Rubble", filePath:"songs/2.mp3", coverPath:"Covers/cover3.jpeg"},
    {songName:"I Bet You Look Good On The Dancefloor", filePath:"songs/3.mp3", coverPath:"Covers/cover3.jpeg"},
    {songName:"No.1 Party Anthem", filePath:"songs/4.mp3", coverPath:"Covers/cover2.jpeg"},
    {songName:"Old Yellow Bricks", filePath:"songs/5.mp3", coverPath:"Covers/cover4.jpeg"},
    {songName:"One For The Road", filePath:"songs/6.mp3", coverPath:"Covers/cover2.jpeg"},
    {songName:"Snap Out Of It", filePath:"songs/7.mp3", coverPath:"Covers/cover2.jpeg"}
]
songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})
//audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
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
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
/*
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause'); 
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play'); 
        gif.style.opacity=0;
    }
})

//Listen to events 
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
} 
*/

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-playe');
        e.target.classList.add('fa-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
/*Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex+1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
}) */