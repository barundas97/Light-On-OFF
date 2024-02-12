const on = document.querySelector("#on");
const off = document.querySelector("#off");
const light = document.querySelector("#light");

//..... adEvent Listener for On Button ....
on.addEventListener("click",()=>{
    light.style.backgroundColor = "yellow"
    light.style.boxShadow = "0px 0px 11px 15px yellow"
})
// ....AdEvent Listener for Off button
off.addEventListener("click",()=>{
    light.style.backgroundColor = "black";
    light.style.boxShadow = "0px 0px 11px 15px black";
})
