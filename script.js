const container = document.querySelector(".container");
const myButton = document.querySelector("button");

function createGrid(length) {
  for (let i = 0; i < length ** 2; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("main-div");
    newDiv.style.backgroundColor = "white";
    newDiv.style.opacity = "100%";
    container.appendChild(newDiv);

    let breakDiv = document.createElement("div");
    breakDiv.classList.add("break-div");

    if ((i + 1) % length === 0) {
      container.appendChild(breakDiv);
    }
  }
}

createGrid(16);
console.log(container);

container.addEventListener("mouseover", (evt) => {
  if (evt.currentTarget === evt.target) {
    return;
  }

  if (evt.target.style.backgroundColor == "white") {
    evt.target.style.backgroundColor = randomColor();
  } else {
    console.log(evt.target.style.opacity);
    evt.target.style.opacity -= 0.1;
    // evt.target.style.backgroundColor = darkenColor(
    //   evt.target.style.backgroundColor
    // );
  }
});

myButton.addEventListener("click", () => {
  let sideLength = prompt(
    "Type a number of squares per side for the new grid: "
  );

  if (sideLength) {
    container.innerHTML = "";
  }

  createGrid(sideLength);
});

function randomColor() {
  let color = "hsl";
  let h = Math.floor(Math.random() * 360);
  let s = Math.floor(Math.random() * 100);
  let l = Math.floor(Math.random() * 100);

  color = `hsl(${h}, ${s}%, ${l}%)`;
  return color;
}

function darkenColor(curColor) {
  let bracketIndex = curColor.indexOf("(");
  let commaIndex = curColor.indexOf(",");
  let number_1 = curColor.slice(bracketIndex + 1, commaIndex);
  number_1 -= number_1 * 0.1;

  let spaceIndex = curColor.indexOf(" ");
  let commaIndex2 = curColor.indexOf(",", spaceIndex);

  let number_2 = curColor.slice(spaceIndex + 1, commaIndex2);
  number_2 -= number_2 * 0.1;

  let bracketIndex2 = curColor.lastIndexOf(")");
  let spaceIndex2 = curColor.lastIndexOf(" ");
  let number_3 = curColor.slice(spaceIndex2 + 1, bracketIndex2);
  number_3 -= number_3 * 0.1;

  return `rgb(${number_1}, ${number_2}, ${number_3})`;
}

// darkenColor(`rgb(150, 180, 90)`);
