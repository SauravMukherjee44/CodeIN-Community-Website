async function fetchData() {
  try {
    const response = await fetch("https://api.github.com/repos/SauravMukherjee44/CodeIN-Community-Website/contributors");
    const data = await response.json();
    
    // Check if data is null or undefined using nullish coalescing operator
    const contributors = data ?? [];

    // Map contributors data to HTML elements
    const contributorsHTML = contributors.map(contributor => `
      <a href="${contributor.html_url}" target="_blank">
        <img src="${contributor.avatar_url}" alt="${contributor.login}">
        <span>${contributor.login}</span>
      </a>`
    ).join("");

    // Render contributors on the webpage
    document.querySelector("#contributor").innerHTML = contributorsHTML;
  } catch (error) {
    console.error("Error fetching contributors:", error);
  }
}

// Call fetchData() function after 1 second
setTimeout(fetchData, 1000);

// Set current year
document.querySelector(".year").textContent = new Date().getFullYear();
