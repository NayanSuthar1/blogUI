/* =================subscribe check ================= */

let subcheck = document.querySelector(".subscribe-btn");

subcheck.addEventListener("click", () => {
  if (subcheck.innerText == "Subscribe") {
    subcheck.innerText = "Subscribed";
  } else {
    subcheck.innerText = "Subscribe";
  }
});

/* =================like check ================= */

let likecheck = document.querySelector(".like-btn");

likecheck.addEventListener("click", () => {
  if (likecheck.innerHTML == '<i class="fa-regular fa-heart"></i>') {
    likecheck.innerHTML = '<i class="fa-solid fa-heart"></i>';
  } else {
    likecheck.innerHTML = '<i class="fa-regular fa-heart"></i>';
  }
});

/* =================save check ================= */

let savecheck = document.querySelector(".Save");

savecheck.addEventListener("click", () => {
  if (savecheck.innerHTML == '<i class="fa-regular fa-bookmark"></i>Save') {
    savecheck.innerHTML = '<i class="fa-solid fa-bookmark"></i>Saved';
  } else {
    savecheck.innerHTML = '<i class="fa-regular fa-bookmark"></i>Save';
  }
});

/*======================double-click-like==================*/

let dcl = document.querySelector(".hero-picture");

dcl.addEventListener("dblclick", () => {
  if (likecheck.innerHTML == '<i class="fa-regular fa-heart"></i>') {
    likecheck.innerHTML = '<i class="fa-solid fa-heart"></i>';
  }
});

/*====================bell-check======================*/

let bell = document.querySelector(".bell");

bell.addEventListener("click", () => {
  if (bell.innerHTML == '<i class="fa-solid fa-bell"></i>'){
      bell.innerHTML = '<i class="fa-solid fa-bell-slash"></i>';
  } else {
      bell.innerHTML = '<i class="fa-solid fa-bell"></i>';
  }
});