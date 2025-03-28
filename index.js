let pointer = 0;
let images = [
  "./assets/image1.jpg",
  "./assets/image2.jpg",
  "./assets/image3.jpg",
  "./assets/image4.jpg",
  "./assets/image5.jpg",
  "./assets/image6.jpg",
  "./assets/image7.jpg",
  "./assets/image8.jpg",
  "./assets/image9.jpg",
  "./assets/image10.jpg",
  "./assets/image11.jpg",
];

let dots = [];

let imagesDOM = document.querySelector(".img");
for (let i = 1; i <= 11; i++) {
  dots.push(document.querySelector(`.dot` + i));
}

dots[pointer].classList.add("dot-black");

function decrement() {
  dots[pointer].classList.remove("dot-black");
  if (pointer == 0) pointer = images.length;
  pointer--;
  imagesDOM.src = images[pointer];
  dots[pointer].classList.add("dot-black");
}

function increment() {
  dots[pointer].classList.remove("dot-black");
  if (pointer == images.length - 1) pointer = -1;
  pointer++;
  imagesDOM.src = images[pointer];
  dots[pointer].classList.add("dot-black");
  //   console.log(pointer);
}

function changeImg(event) {
  let point = event.target.classList[0];
  let point1 = Number(point[point.length - 2]);
  let point2 = Number(point[point.length - 1]);
  if (!isNaN(point1)) point = String(point1) + String(point2);
  else point = point2;
  if (point) {
    dots[pointer].classList.remove("dot-black");
    pointer = point - 1;
    imagesDOM.src = images[pointer];
    dots[pointer].classList.add("dot-black");
  }
}

const preloadImage = (src) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    resolve();
  });

(async function (params) {
  await Promise.all(images.map((x) => preloadImage(x)));
})();
