const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const slideImageFrame = document.querySelector(".slider");
const images = document.querySelectorAll(".images");
let slideNum = 1;
const ImageLength = images.length;
let slideInterval;

// Bottom section button div creation
const divButton = document.querySelector(".bottomSection");
for (let i = 1; i <= ImageLength; i++) {
  const div = document.createElement("div");
  div.className = "button";
  divButton.appendChild(div);
}

// change Color
const changeColor = () => {
  resetBG();
};

// Auto Start Slide Show
const startSlideShow = () => {
  slideInterval = setInterval(() => {
    //right arrow functionality
    slideNum < ImageLength ? nextSlide() : pointToFirst();

    // Change Color with start interval
    changeColor();
  }, 2000);
};

startSlideShow();

// Stop Slide Interval
const stopInterval = () => {
  clearInterval(slideInterval);
};

// Mutiple button Clickable
const buttons = document.querySelectorAll(".button");

// Default button color
buttons[0].style.backgroundColor = "white";

const resetBG = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
    // stop frame on mouse over on dot
    button.addEventListener("mouseover", stopInterval);
    // start again frame on mouse out on dot
    button.addEventListener("mouseout", startSlideShow);
  });
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      slideImageFrame.style.transform = `translateX(-${index * 600}px)`;
      //increase Slidenumber
      slideNum = index + 1;
      changeSlide();
    });
  });
  buttons[slideNum - 1].style.backgroundColor = "white";
};
resetBG();
const changeSlide = () => {
  resetBG();
};

//right arrow functionality
const nextSlide = () => {
  slideImageFrame.style.transform = `translateX(${-600 * slideNum}px)`;
  slideNum++;
};

const pointToFirst = () => {
  slideImageFrame.style.transform = `translateX(0px)`;

  slideNum = 1;
};

// left arrow functionality

const prevSlide = () => {
  slideImageFrame.style.transform = `translateX(-${600 * (slideNum - 2)}px)`;
  slideNum--;
};

const pointToLast = () => {
  slideImageFrame.style.transform = `translateX(-${(ImageLength - 1) * 600}px)`;
  slideNum = ImageLength;
};

rightArrow.addEventListener("click", () => {
  slideNum < ImageLength ? nextSlide() : pointToFirst();

  // Calling Change background function
  changeColor();
  // Stop Interval functionality
  stopInterval();
});

leftArrow.addEventListener("click", () => {
  slideNum > 1 ? prevSlide() : pointToLast();

  // Calling change background color function
  changeColor();
});

const handleMouseEvents = (element, mouseOverAction, mouseOutAction) => {
  element.addEventListener("mouseover", mouseOverAction);
  element.addEventListener("mouseout", mouseOutAction);
};

// Event listeners for mouseover/mouseout on frame and arrow buttons
handleMouseEvents(slideImageFrame, stopInterval, startSlideShow);
handleMouseEvents(leftArrow, stopInterval, startSlideShow);
handleMouseEvents(rightArrow, stopInterval, startSlideShow);
