const body = document.querySelector("body");

const IMG_NUMBER = 8;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber +1}.jpg`;
    // image.classList.add("bgImage");
    // body.appendChild(image);
    body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url(${
        image.src
  })`;
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);

}

init();