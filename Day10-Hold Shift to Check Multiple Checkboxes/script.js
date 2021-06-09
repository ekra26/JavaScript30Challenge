//accessing the DOM and variable creation
const input = document.querySelectorAll('input');
const inputName = [];
let indexHoldStart = '';
let indexHoldEnd = '';

//creating array of input names
for (let i = 0; i < input.length; i++) {
  inputName.push(input[i].name);
}

//adding event listener to each input to record keyup and keydown
input.forEach(element => {
    element.addEventListener("keydown", recordIndex);
    element.addEventListener("keyup", inputEnd);
});

//sets the index of the starting keydown
function recordIndex(e) {
    var index = inputName.indexOf(e.target["name"]);
    if ((e.key = "Shift")) {
      indexHoldStart = index;
    }
}

//sets the index of the end keyup and starts the check update
function inputEnd(e) {
  var index = inputName.indexOf(e.target["name"]);
  if (e.key = "Shift"){
    indexHoldEnd = index;
    //start update
    updateCheck(indexHoldStart, indexHoldEnd);
  }
}

//updates the check to true or false bewteen start and end inputs
function updateCheck(indexHoldStart,indexHoldEnd) {
    if (indexHoldStart > indexHoldEnd) {
        var holderStart = indexHoldStart;
        indexHoldStart = indexHoldEnd;
        indexHoldEnd = holderStart;
    }

    var nameStart = inputName[indexHoldStart];
    if (document.getElementById(nameStart).checked){
        for (let i = indexHoldStart + 1; i < indexHoldEnd; i++) {
        var name = inputName[i];
          document.getElementById(name).checked = true;
        }
    } else {
        for (let i = indexHoldStart + 1; i < indexHoldEnd; i++) {
        var name = inputName[i];
          document.getElementById(name).checked = false;
        }
    }
}

