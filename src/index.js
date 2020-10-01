import "./style.css";

let galleryPosition = 0;

const gallery = document.getElementById("gallery");

const rightNavButton = document.getElementById("rightNavButton");

const leftNavButton = document.getElementById("leftNavButton");

let imageContainers = document.querySelectorAll(".imageContainer");

let circles = document.querySelectorAll(".circle");

leftNavButton.addEventListener("click", () => {
  gallery.style.cssText = `transform: translate(${getGalleryPositionLeft()}vw, 0)`;
  renderCircleBorder();
});

rightNavButton.addEventListener("click", () => {
  gallery.style.cssText = `transform: translate(${getGalleryPositionRight()}vw, 0)`;
  renderCircleBorder();
});

circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    gallery.style.cssText = `transform: translate(${index * -100}vw, 0)`;
    galleryPosition = index;
    renderCircleBorder();
  });
});

function getGalleryPositionRight() {
  if (imageContainers[galleryPosition + 1] !== undefined) {
    galleryPosition += 1;

    return imageContainers[galleryPosition].dataset.location;
  }
  galleryPosition = 0;
  return imageContainers[galleryPosition].dataset.location;
}

function getGalleryPositionLeft() {
  if (imageContainers[galleryPosition - 1] !== undefined) {
    galleryPosition -= 1;

    return imageContainers[galleryPosition].dataset.location;
  }
  console.log(imageContainers.length);
  galleryPosition = imageContainers.length - 1;
  return imageContainers[galleryPosition].dataset.location;
}

function renderCircleBorder() {
  circles.forEach((circle, index) => {
    if (index === galleryPosition) {
      circle.classList.add("border");
    } else {
      circle.classList.remove("border");
    }
  });
}

window.setInterval(() => {
  gallery.style.cssText = `transform: translate(${getGalleryPositionRight()}vw, 0)`;
  renderCircleBorder();
}, 5000);
