import "./style.css";

const input = prompt("Enter a GitHub username:");
const displayDiv = document.getElementById("display-data");

fetch(`https://api.github.com/users/${input}`)
  .then(response => response.json())
  .then(data => {
    displayDiv.innerHTML = `
      <p>Name: ${data.name}</p>
      <p>Location: ${data.location}</p>
      <p>Followers: ${data.followers}</p>
    `;
  })
  .catch(error => {
    console.error("An error occurred: " + error);
  });

