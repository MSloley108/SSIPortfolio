// Get all the h3 elements with the same class as their corresponding img
var h3Elements = document.querySelectorAll(".img-container h3");

// Iterate over each h3 element
for (var i = 0; i < h3Elements.length; i++) {
  // Add click event listener to each h3 element
  h3Elements[i].addEventListener("click", function() {
    // Get the corresponding img element with the same class
    var imgElement = document.querySelector("." + this.classList[0]);

    // Toggle the 'enlarged' class on the img element
    imgElement.classList.toggle("enlarged");
  });
}

// Get all the img elements
var imgElements = document.getElementsByTagName("img");

// Iterate over each img element
for (var j = 0; j < imgElements.length; j++) {
  // Add click event listener to each img element
  imgElements[j].addEventListener("click", function() {
    // Remove the 'enlarged' class from the img element
    this.classList.remove("enlarged");
  });
}