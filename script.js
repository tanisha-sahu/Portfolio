var typed = new Typed(".text", {
  strings: ["A Programmer", "A Web Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

let menuIcon = document.querySelector("#menu-icon");
let nav = document.querySelector(".nav");
let navo = document.querySelectorAll(".nvo");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  nav.classList.toggle("active");
};

gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 2.0,
    delay: 3,
  }
);

gsap.fromTo(
  ".load-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1.3,
    delay: 0.3,
  }
);

// Cursior animation code

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#8c66ff",
  "#4d4dff",
  "#0056e6",
  "#007bff",
  "#3399ff",
  "#4dd2ff",
  "#66ffb3",
  "#66ff66",
  "#b3ff66",
  "#e6ff4d",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

console.log("All good.")
