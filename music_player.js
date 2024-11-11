let song =document.querySelector('.audio');
let progress=document.querySelector('.progress');
 
const ctrlBtn = document.querySelector('#ctrl_btn');

ctrlBtn.addEventListener('click',()=>{
    if(ctrlBtn.classList.contains('fa-play')) {
        song.play();
        ctrlBtn.classList.remove('fa-play');
        ctrlBtn.classList.add('fa-pause');
    }else{
        song.pause();
        ctrlBtn.classList.remove('fa-pause');
        ctrlBtn.classList.add('fa-play');
    }
});



if(ctrlBtn.classList.contains('fa-play')) {
    setInterval(function () {
        progress.value=song.currentTime
    },500)
}

progress.onchange=()=>{
    song.play();
    song.currentTime=progress.value;
    ctrlBtn.classList.add('fa-pause');
    ctrlBtn.classList.remove('fa-play');
}