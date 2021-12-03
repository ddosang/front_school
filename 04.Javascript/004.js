var x = "global x";
var y = "global y";

function outer() {
    var z = "outer's local z";
    console.log(x, y, z); // global global outer
    function inner() {
        var x = "inner's local x";
        console.log(x, y, z); // inner global outer
    }
    inner();
}

outer();

console.log(x, z); //global error


function comma2(text) {
    text += ''

    return (text.length <= 3) ? text : comma2(text.slice(0, text.length-3)) + ',' + text.slice(text.length-3);

}

