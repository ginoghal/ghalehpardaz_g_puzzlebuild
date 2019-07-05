(() =>{
// stub
console.log('fired!');

const piecesBoard = document.querySelector('.puzzle-pieces'),
puzzleBoard = document.querySelector('.puzzle-board'),
puzzleSelectors = document.querySelectorAll('#buttonHolder img'),
dropZones = document.querySelectorAll('.drop-zone');

let draggablePieces = piecesBoard.querySelectorAll("img");

const imageNameArray = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

//debugger;

function switchImage() {
console.log(this);

//debugger;

let bgImage = `./images/backGround${this.dataset.puzzleref}.jpg`;
//grab the coresoinding background image 0,1,2,3

puzzleBoard.style.backgroundImage = `url(${bgImage})`;

// work on switching th right-hand iamges so that they can match the buttons at the bottom

draggablePieces.forEach((image, index) => {
//console.log(image, index);

image.src = `images/${imageNameArray[index]}${this.dataset.puzzleref}.jpg`;
//debugger;

});

}

puzzleSelectors.forEach(thumbnail => {thumbnail.addEventListener("click", switchImage); });
//Loops tjrough draggable images
//this lets us drag stuff under
draggablePieces.forEach(piece => {
piece.addEventListener("dragstart", function(e) {
console.log('draggin...');

e.dataTransfer.setData("text/plain", this.id);

});
});

dropZones.forEach(zone => {
zone.addEventListener("dragover", function(e) {
e.preventDefault();
document.getElementById("buttonHolder").appendChild.reset = "";
console.log('dragged something over me');
});
//This is the dragover and drop funtionality (dropzones)

zone.addEventListener("drop", function(e){
e.preventDefault(); // dont do your default behaviour instead do the following (console log)
console.log('you dropped something over me');

let draggedElement = e.dataTransfer.getData("text/plain");


console.log('you dragged: ',draggedElement);

e.target.appendChild(document.querySelector(`#${draggedElement}`));
//^Snaps to squares
});
});

})();
