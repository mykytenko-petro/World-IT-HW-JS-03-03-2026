const numberArray = [];
for (let index = 0; index < 20; index++) {
    numberArray.push(Math.floor(Math.random() * (100 - 5 + 1) ) + 5);
}

const rootDiv = document.createElement("div");
rootDiv.className = "root";
document.querySelector("body").appendChild(rootDiv);

for (let index = 0; index < numberArray.length; index++) {
    const wrapperDiv = document.createElement("div");

    const numberDiv = document.createElement("div");
    const numberP = document.createElement("p");

    wrapperDiv.classList.add("wrapper");
    
    numberDiv.classList.add("pinkGardient");
    numberDiv.style.height = numberArray[index];
    
    numberP.textContent = numberArray[index];
    
    wrapperDiv.appendChild(numberDiv);
    wrapperDiv.appendChild(numberP);

    rootDiv.appendChild(wrapperDiv);
}

const largestNumbers = numberArray.sort((a, b) => b - a).slice(0, 3);
const isColorArray = [];
const pillarArray = rootDiv.children;

for (let indexOfLargest = 0; indexOfLargest < largestNumbers.length; indexOfLargest++) {
    for (let indexOfPillar = 0; indexOfPillar < pillarArray.length; indexOfPillar++) {
        const numberDiv = pillarArray[indexOfPillar].querySelector("div");

        if (largestNumbers.includes(parseInt(numberDiv.style.height)))
            isColorArray.push(indexOfPillar);
    }
}

for (let indexOfPillar = 0; indexOfPillar < pillarArray.length; indexOfPillar++) {
    const delay = indexOfPillar * 250;
    const numberDiv = pillarArray[indexOfPillar].querySelector("div");
    const numberP = pillarArray[indexOfPillar].querySelector("p");

    setTimeout(() => {
        numberDiv.classList.replace("pinkGardient", "blueGardient");
        numberDiv.parentElement.classList.add("big");

        numberP.style.color = "blue";
    }, delay);

    setTimeout(() => {
        if (isColorArray.includes(indexOfPillar)) {
            numberDiv.classList.replace("blueGardient", "greenGardient");

            numberP.style.color = "rgb(2, 175, 2)";
        } else {
            numberDiv.classList.replace("blueGardient", "redGardient");
            numberDiv.parentElement.classList.replace("big", "small");

            numberP.style.color = "red";
            numberP.style.textDecoration = "line-through";
        }
    }, delay + 100);
}