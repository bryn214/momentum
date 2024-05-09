const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `./img/${chosenImg}`;
bgImg.classList.add("bg", "gradient");
document.body.appendChild(bgImg);