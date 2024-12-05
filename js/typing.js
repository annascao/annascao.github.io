document.addEventListener("DOMContentLoaded", function() {
    var text = "Welcome to my website!"; // The text to type out
    var typedTextElement = document.getElementById("typed-text");
    var index = 0;

    function type() {
      if (index < text.length) {
        typedTextElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 130); // speed = 100ms
      }
    }

    type(); // Start typing
});
