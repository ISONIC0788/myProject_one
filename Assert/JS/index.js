let btn = document.getElementById("btnhire");
	let spans = document.getElementsByTagName("span");
	btn.onclick = function(){
		for( span of spans){
            span.classList.add("animebtn");
		}
		setTimeout(()=>{
			for( span of spans){
            span.classList.remove("animebtn");
		}
		},500);
	}
// gsap.to(".log",{
//     x:1000
// });
// gsap.to(".log", {
//     // duration:3, 
//     // x: 10 , 
//     // x:-5
// });
window.addEventListener("scroll",function(dets){
  console.log(dets);
//   if(dets.deltaY>0){
//      console.log("I m here bro")
//   }
  
})
gsap.to(".projectan",{
    duration:2,
    // x:100,
    // x:-100,
    rotation:360
});
gsap.to("#projectsecon",{
    duration:2,
    x:100,
     x:-30,
});

gsap.to(".org-icon",{
    duration:2,
    x:100,
    xPercent : -50,
    rotation:360,
    repeat:10,
    repeatDelay: 2,
    yoyo:true
    
})

const words = ["Mobileapp ", "windowsapp ", "webapp"];
let maintimeline =gsap.timeline({
    repeat:-1
})
words.forEach(words =>{
    let texttimeline = gsap.timeline({

    })
    texttimeline.to("#typewrite",{
        text:words,
        duration:1
    })
    maintimeline.add(texttimeline)
})
let tl = gsap.timeline()

tl.from(".log , ul",{
    y:-30,
    duration:1,
    delay:1,
    opacity :0,
    stagger:0.15
})
tl.from(".header-org-body",{
    x:-100,
    duration:1,
    delay:1,
    opacity:0
})
tl.from(".class-text-title",{
    x:-200,
    duration:1,
    delay:1,
    opacity:0
})
tl.from(".text-cont",{
    y:100,
    duration:1,
    delay:1,
    opacity:0
})
tl.from(".cont-for-btn",{
    y:100,
    duration:1,
    delay:1,
    opacity:0
    // repeat:1
})

