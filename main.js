"use strict";

//Filter
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("activee");
    current[0].className = current[0].className.replace(" activee", "");
    this.className += " activee";
  });
}

//Form
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = `<i class="fas fa-check-double"></i> Thanks for your submission!`;
      status.style.color = "green";
      form.reset();
      setTimeout(() => {
        status.innerHTML = "";
      }, 5000);
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
      status.style.color = "red";
      setTimeout(() => {
        status.innerHTML = "";
      }, 5000);
    });
}
form.addEventListener("submit", handleSubmit);

//Back to top button
let backtotop = document.querySelector(".back-to-top");
let rootElement = document.documentElement;

function handleScroll() {
  if (rootElement.scrollTop > 700) {
    //show button
    backtotop.classList.add("active");
  } else {
    //hide button
    backtotop.classList.remove("active");
  }
}
document.addEventListener("scroll", handleScroll);

// Smooth scroll to top:
//button
backtotop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

/*
// Get the modal
var modal = document.getElementById("myModal");

// // Get the button that opens the modal
var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal
window.onload = function () {
modal.style.display = "block";
};

// // When the user clicks on <span> (x), close the modal
span.onclick = function () {
modal.style.display = "none";
};

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
   if (event.target == modal) {
  }
 };
 */
