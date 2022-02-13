const images = [
  "grant-durr-YI38ze7CISs-unsplash.jpg",
  "julie-clarke-b-IjVn5B6vU-unsplash.jpg",
  "pablo-martinez-AdagxtVKRWE-unsplash.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(img/${chosenImage}) `;
document.body.style.backgroundSize = "cover";
