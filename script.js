//your JS code here. If required.
const btn = document.getElementById("incrementBtn");
const para = document.getElementById("counter");

let count = 0;
btn.addEventListener('click' , ()=>{
	para.innerText = count++;
	alert(count);
})
