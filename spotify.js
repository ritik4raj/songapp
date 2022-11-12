const playBtn3 = document.getElementById("play-music3")

playBtn3.addEventListener('click', function(){
   playBtn3.innerHTML = `<audio controls class="songs-play">
   <source src="song/bawla.mp3" type="audio/ogg">
  
 </audio>`

 
} )
const playBtn4 = document.getElementById("play-music4")
playBtn4.addEventListener('click', function(){
   playBtn4.innerHTML = `<audio controls class="songs-play">
   <source src="song/kesariya.mp3" type="audio/ogg">
  
 </audio>`
 `<button>pause</button>`
})
const playBtn2 = document.getElementById("play-music2")
playBtn2.addEventListener('click', function(){
   playBtn2.innerHTML = `<audio controls class="songs-play">
   <source src="song/song1.mp3" type="audio/ogg">
 </audio>`
})
const playBtn1 = document.getElementById("play-music1")
playBtn1.addEventListener('click', function(){
   playBtn1.innerHTML = `<audio controls class="songs-play" >
   <source src="song/song2.mp3" type="audio/ogg">
  
 </audio>`
})