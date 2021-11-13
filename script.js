// function that will send a whatsapp message with text saying "hello there" to the number 918691937988
// Language: javascript
// Path: script.js
function sendMessage() {
  let num = document.getElementById("number").value;
  let code = 91;
  let number = code + num;
  let msg = document.getElementById("msg").value;
  var win = window.open(`https://wa.me/${number}?text=${msg}`, "_blank");
  win.focus();
}
