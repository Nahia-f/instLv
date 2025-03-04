var d = document.querySelector("h5");
var f = document.querySelector("#a");
// var r=document.querySelector("#b")
var flag = 0;
f.addEventListener("click", function () {
  if (flag == 0) {
    d.innerHTML = "Friends";
    d.style.color = "green";
    f.innerHTML = "Remove Friend";
    flag = 1;
  } else {
    d.innerHTML = "Stranger";
    d.style.color = "red";
    f.innerHTML = "Add Friend";
    flag = 0;
  }
});
var card = document.querySelector("#card");
var lov = document.querySelector("i");
card.addEventListener("dblclick", function () {
  lov.style.transform = "translate(-50%,-50%) scale(1)";
  lov.style.opacity = 0.8;
  setTimeout(function () {
    lov.style.opacity = 0;
  }, 1000);
  setTimeout(function () {
    lov.style.transform = "translate(-50%,-50%) scale(0)";
  }, 2000);
});

// r.addEventListener("click",function(){
//     d.innerHTML="Stranger"
//     d.style.color="red"
// })
