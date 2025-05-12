function check() {
    let age = document.getElementById("age").value;
    let output = (age <= 19) ? "You can pay child's fare" : "You must pay the adult fare";
    document.getElementById("fareOutput").innerText = output;
}

function check2() {
    let name = document.getElementById("userName").value;
    let cuisine = document.getElementById("cuisine").value;
    document.getElementById("cuisineOutput").value = name + " loves " + cuisine;
}