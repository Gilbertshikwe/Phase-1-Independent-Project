// Event listener for when the DOM content is fully loaded, it calls the `makeLinksSmooth` function
document.addEventListener("DOMContentLoaded", makeLinksSmooth)

// Function to make navigation links smooth-scroll when clicked
function makeLinksSmooth() { 
    const navLinks = document.querySelectorAll("nav a"); 
  
    navLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });
  }
  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
  
    if (targetElement) { 
      targetElement.scrollIntoView({ behavior: "smooth", });
    }
  }
 
// API endpoint for fetching dictionary data
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const result = document.getElementById("result")
const btn = document.getElementById("search-btn")
// Add a click event listener to the search button
btn.addEventListener("click", (e) => {
    e.preventDefault()
    let input = document.getElementById("search-input").value
    // Fetch data from the dictionary API based on the user input
    fetch(`${url}${input}`)
    .then(res => res.json())
    .then(data => {console.log(data)
    });
})
