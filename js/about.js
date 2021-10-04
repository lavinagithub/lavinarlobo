// local reviews data
const reviews = [
  {
    id: 1,
    name: "Web developer",
    job: "Web Dev, HTML5, CSS3, Grid, Flexboxes, JavaScript ES6, React, PHP, Databases, Version control",
    img: "./images/picbw.jpg",
    text: "Experience creating web development projects for companies in Australia and India",
  },
  {
    id: 2,
    name: "Trainer in IT",
    job: "Passionate Trainer",
    img: "./images/smiley.jpeg",
    text: "Trainer and Assessor with expertise in training face-to-face and online education with the ability to create, schedule, present and deliver training materials for the purposes of education",
  },
  {
    id: 3,
    name: "Mum",
    job: "Love this job",
    img: "./images/tram.jpg",
    text: "Grateful and thankful to have had the opportunity to do mum duties and full time work",
  },
  {
    id: 4,
    name: "Interests",
    job: "Music, travel",
    img: "./images/music.png",
    text: "Passionate about travel and exploring places - Loves solo trips without a plan :)  ",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
const showPerson = (person) => {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

//Get the button
var topBtn = document.querySelector("#topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}
const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
topBtn.addEventListener("click", topFunction);

