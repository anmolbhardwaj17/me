var text = ["Hello", "नमस्ते", "Hola", "مرحبا", "안녕"];
var counter = 0;
var elem = document.getElementById("hello");
var inst = setInterval(change, 800);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
console.log("connected");