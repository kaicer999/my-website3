// Display browser and screen info
document.getElementById("browser").textContent = navigator.userAgent;
document.getElementById("platform").textContent = navigator.platform;
document.getElementById("java").textContent = navigator.javaEnabled() ? "Yes" : "No";
document.getElementById("resolution").textContent = screen.width + " x " + screen.height;
document.getElementById("availScreen").textContent = screen.availWidth + " x " + screen.availHeight;
document.getElementById("colorDepth").textContent = screen.colorDepth + " bits";

// Display page info
document.getElementById("url").textContent = location.href;
document.getElementById("hostname").textContent = location.hostname;
document.getElementById("pageTitle").textContent = document.title;

// Change page title function
function changeTitle() {
  const newTitle = prompt("Enter new page title:");
  if (newTitle) {
    document.title = newTitle;
    document.getElementById("pageTitle").textContent = newTitle;
  }
}

// Change background color based on screen width
function updateBackgroundColor() {
  const width = window.innerWidth;
  if (width < 600) {
    document.body.style.backgroundColor = "blue";
  } else if (width >= 600 && width <= 991) {
    document.body.style.backgroundColor = "green";
  } else {
    document.body.style.backgroundColor = "orange";
  }
}

window.addEventListener("load", updateBackgroundColor);
window.addEventListener("resize", updateBackgroundColor);
