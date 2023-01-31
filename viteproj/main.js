import "./style.css";

const input = prompt(
  "Enter a Public GitHub username and the crystal ball will tell you all:"
);
const displayDiv = document.getElementById("mvarriano");

fetch(`https://api.github.com/users/${input}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    displayDiv.innerHTML = `
      <p>Name: ${data.name}</p>
      <p>Location: ${data.location}</p>
      <p>Followers: ${data.followers}</p>
    `;
  })
  .catch((error) => {
    console.error("An error occurred: " + error);
  });
