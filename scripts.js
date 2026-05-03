// =====================
// HOMEPAGE - Add date to footer on page load
// =====================
window.onload = function () {
  var footer = document.querySelector("footer");
  if (footer) {
    var newParagraph = document.createElement("p");
    var currentDate = new Date();
    var dateText = document.createTextNode("Page loaded on: " + currentDate);
    newParagraph.appendChild(dateText);
    footer.appendChild(newParagraph);
  }
};

// =====================
// CONTACT PAGE - Form validation
// =====================
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill out all required fields.");
    return false;
  } else {
    alert("Message sent successfully!");
    return true;
  }
}

// =====================
// PROJECTS PAGE - Toggle project description
// =====================
function toggleDescription(buttonElement) {
  var article = buttonElement.parentElement;
  var description = article.querySelector(".project-desc");

  if (description.style.display === "none") {
    description.style.display = "block";
    buttonElement.textContent = "Hide Description";
  } else {
    description.style.display = "none";
    buttonElement.textContent = "Show Description";
  }
}

// =====================
// CV PAGE - Blockquote hover effect
// =====================
function setupBlockquoteHover() {
  var blockquote = document.querySelector("blockquote");
  if (blockquote) {
    blockquote.addEventListener("mouseover", function () {
      blockquote.style.backgroundColor = "#e8daef";
      blockquote.style.fontStyle = "normal";
    });

    blockquote.addEventListener("mouseout", function () {
      blockquote.style.backgroundColor = "#fdf6dd";
      blockquote.style.fontStyle = "italic";
    });
  }
}

setupBlockquoteHover();
