let boxs = document.querySelectorAll(".talents .front")
let valu = false
boxs.forEach(function (ele) {
  ele.onclick=function () {
    if(valu===false){
      boxs.forEach(function (ele) {
        ele.children[1].style.height="0";
        ele.style.backgroundColor="white";
        ele.children[0].children[1].textContent="+"
        ele.children[1].style.borderTop = "0 solid #ECECEC";
      })
      ele.children[1].style.height="100px";
      ele.style.backgroundColor="#F6F7FB";
      ele.children[1].style.borderTop = "2px solid #ECECEC";
      ele.children[0].children[1].textContent="-"
      valu=true
    }else{
      ele.children[1].style.height="0";
      ele.style.backgroundColor="white";
      ele.children[0].children[1].textContent="+"
      ele.children[1].style.borderTop = "0 solid #ECECEC";
      valu=false
    }
  }
})
let loadedel = document.querySelector("#loadh")
document.addEventListener("DOMContentLoaded",function () {
  loadedel.style.top="0"
})
window.addEventListener("load",function () {
  loadedel.style.top="100%"
})