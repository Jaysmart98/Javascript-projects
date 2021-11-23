function clearScreen() {
    document.getElementById("result").value=  " ";
}

function del() {
    document.getElementById("result").value = result.value.slice (0, -1);
}
 


function display(value) {
   document.getElementById("result").value += value;
}
//This function evaluates the expression and return result
function calculate() {
var p = document.getElementById("result").value;
var q = eval(p);
document.getElementById("result").value = q;
}
function Answer() {
    var p = document.getElementById("result").value;
    document.getElementById("result").value = p;
    }

//     var p = result.value;

// if (p.search('sin') != true) {
//     var myRes = p.replace('sin', "(Math.PI/180)*");
//     var q = Math.sin(eval(myRes));
//     document.getElementById("result").value = q;
// }

// else if(p.search('tan') != true) {
//     var myRes = p.replace('tan', "(Math.PI/180)*");
//     var q = Math.tan(eval(myRes));
//     document.getElementById("result").value = q;
// }
// else if (p.search('cos') != true) {
//     var myRes = p.replace('cos', "(Math.PI/180)*");
//     var q = Math.sin(eval(myRes));
//     document.getElementById("result").value = q;
// } 
// var q = eval(p);
//     document.getElementById("result").value = q;
// }