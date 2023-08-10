const videos=document.querySelectorAll(".video")
videos.forEach((e,i)=>{
    e.style.left=`${i*100}%`
    console.log(e);
})
console.log(videos);