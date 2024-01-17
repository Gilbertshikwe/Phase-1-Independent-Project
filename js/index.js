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
    .then(data => {
    // Display the retrieved data in the result section of the page
    result.innerHTML = `
    <div class="word">
    <h3>${input}</h3>
    </div>
    <div class="details">
    <p>${data[0].meanings[0].partOfSpeech}</p>
    <p>/${data[0].phonetic}/</p>
    </div>
    <p class="word-meaning">
    ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word-example">
    ${data[0].meanings[0].definitions[0].example || ""}
    </p>
    `
    })
    // Display an error message if the word is not found
    .catch(() => {
        result.innerHTML = `<h3 class="error">Sorry! couldn't find the word you are looking for</h3>`
    })
});

