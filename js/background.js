const images = [
  "grant-durr-YI38ze7CISs-unsplash.jpg",
  "julie-clarke-b-IjVn5B6vU-unsplash.jpg",
  "pablo-martinez-AdagxtVKRWE-unsplash.jpg",
];

const bgImage = document.createElement("img");
const chosenImage = images[Math.floor(Math.random() * images.length)];
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
