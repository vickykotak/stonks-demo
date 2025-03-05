let pointer = 0;
let images = [
  "image1",
  "image2",
  "image3",
  "image4",
  "image5",
  "image6",
  "image7",
  "image8",
  "image9",
  "image10",
  "image11",
];

let imagesDOM = document.querySelector(".img");

function decrement() {
  if (pointer == 0) pointer = images.length;
  pointer--;
  imagesDOM.src = `./assets/image${pointer + 1}.jpg`;
  //   console.log(pointer);
}

function increment() {
  if (pointer == images.length - 1) pointer = -1;
  pointer++;
  imagesDOM.src = `./assets/image${pointer + 1}.jpg`;
  //   console.log(pointer);
}
