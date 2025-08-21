// Get form and preview elements
const form = document.getElementById("portfolioForm");
const previewContent = document.getElementById("previewContent");
const downloadBtn = document.getElementById("downloadBtn");

// Handle form submit
form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page refresh

    // Collect user input
    const name = document.getElementById("name").value;
    const about = document.getElementById("about").value;
    const projects = document.getElementById("projects").value;
    const social = document.getElementById("social").value;

    // Generate preview content
    const portfolioHTML = `
        <h2>${name}</h2>
        <p><strong>About Me:</strong> ${about}</p>
        <p><strong>Projects:</strong><br>${projects.replace(/\n/g, "<br>")}</p>
        <p><strong>Social Media:</strong> <a href="${social}" target="_blank">${social}</a></p>
    `;

    // Show preview
    previewContent.innerHTML = portfolioHTML;
    downloadBtn.style.display = "inline-block";
});

// Download portfolio as an HTML file
downloadBtn.addEventListener("click", function() {
    const blob = new Blob(
        [previewContent.innerHTML], 
        { type: "text/html" }
    );
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "my_portfolio.html";
    link.click();
});
