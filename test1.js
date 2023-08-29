// Select an element by its ID
const button = document.getElementById("myButton");

// Add a click event listener
button.addEventListener("click", function() {
    alert("Button clicked!");
});

// Modify content of an element
const paragraph = document.getElementById("myParagraph");
paragraph.textContent = "New text content";
