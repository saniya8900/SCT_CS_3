const passwordInput = document.getElementById("password");
const strengthText = document.getElementById("strengthText");

const criteria = {
  length: document.getElementById("length"),
  lowercase: document.getElementById("lowercase"),
  uppercase: document.getElementById("uppercase"),
  number: document.getElementById("number"),
  special: document.getElementById("special")
};

passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;

  const validations = {
    length: value.length >= 8,
    lowercase: /[a-z]/.test(value),
    uppercase: /[A-Z]/.test(value),
    number: /[0-9]/.test(value),
    special: /[!@#$%^&*]/.test(value)
  };

  let passed = 0;
  for (let key in validations) {
    if (validations[key]) {
      criteria[key].classList.add("valid");
      passed++;
    } else {
      criteria[key].classList.remove("valid");
    }
  }

  if (passed <= 2) {
    strengthText.textContent = "Weak";
    strengthText.style.color = "crimson";
  } else if (passed === 3 || passed === 4) {
    strengthText.textContent = "Medium";
    strengthText.style.color = "#ff9800";
  } else if (passed === 5) {
    strengthText.textContent = "Strong";
    strengthText.style.color = "#4caf50";
  } else {
    strengthText.textContent = "N/A";
    strengthText.style.color = "#888";
  }
});

// Sidebar toggle
const toggleBtn = document.getElementById("toggleSidebar");
const closeBtn = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Close sidebar when clicking outside
document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
    sidebar.classList.remove("active");
  }
});

