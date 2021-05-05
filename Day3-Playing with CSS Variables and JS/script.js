//get root element//
var root = document.querySelector(':root');


//Event listeners//
document.getElementById("blur").addEventListener("input", changeValue);
document.getElementById("spacing").addEventListener("input", changeValue);
document.getElementById("color").addEventListener("input", changeValue);

//update value of css attributes//
function changeValue(e){
    var targetID = `--` + e.target.id + `effect`;
    if (e.target.id === "blur" || e.target.id === "spacing") {
        root.style.setProperty(targetID, e.target.value + "px");
    } else {
        root.style.setProperty(targetID, e.target.value);
    }
}