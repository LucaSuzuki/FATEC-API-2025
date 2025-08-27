
const toggleBtn = document.getElementById("mode-toggle");
const body = document.body;
const yearSpan = document.getElementById("year");

if (yearSpan) yearSpan.textContent = new Date().getFullYear();



const THEME_KEY = "site-theme";
function applyTheme(theme) {
  if (theme === "light") {
    body.classList.add("light");
    toggleBtn.textContent = "☀️ Light";
    toggleBtn.setAttribute("aria-pressed", "true");
  } else {
    body.classList.remove("light");
    toggleBtn.textContent = "🌙 Dark";
    toggleBtn.setAttribute("aria-pressed", "false");
  }
}


const saved = localStorage.getItem(THEME_KEY);
if (saved === "light" || saved === "dark") {
  applyTheme(saved);
} else {
  applyTheme("dark");
  localStorage.setItem(THEME_KEY, "dark");
}

toggleBtn.addEventListener("click", () => {
  const next = body.classList.contains("light") ? "dark" : "light";
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
});


const roleBtns = document.querySelectorAll(".role-btn");
const roleTitle = document.getElementById("roleTitle");
const roleText = document.getElementById("roleText");

let pinned = null;

function showRoleInfo(btn) {
  const title = btn.getAttribute("data-title") || btn.textContent;
  const desc = btn.getAttribute("data-desc") || "";
  roleTitle.textContent = title;
  roleText.textContent = desc;
}

roleBtns.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    if (pinned) return;
    showRoleInfo(btn);
  });
  btn.addEventListener("focus", () => {
    if (pinned) return;
    showRoleInfo(btn);
  });
  btn.addEventListener("click", (e) => {
    if (pinned === btn) {
      pinned = null;
      btn.classList.remove("pinned");
      roleTitle.textContent = "Passe o mouse sobre uma função";
      roleText.textContent = "Explicação breve sobre a função aparecerá aqui.";
    } else {
      roleBtns.forEach(b => b.classList.remove("pinned"));
      pinned = btn;
      btn.classList.add("pinned");
      showRoleInfo(btn);
    }
  });
  btn.addEventListener("mouseleave", () => {
    if (!pinned) {
      roleTitle.textContent = "Passe o mouse sobre uma função";
      roleText.textContent = "Explicação breve sobre a função aparecerá aqui.";
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && pinned) {
    pinned.classList.remove("pinned");
    pinned = null;
    roleTitle.textContent = "Passe o mouse sobre uma função";
    roleText.textContent = "Explicação breve sobre a função aparecerá aqui.";
  }
});


const pills = document.querySelectorAll(".pill");
const pillDesc = document.getElementById("pillDesc");

pills.forEach(p => {
  p.addEventListener("mouseenter", () => {
    const d = p.getAttribute("data-desc") || "";
    pillDesc.textContent = d;
    pillDesc.setAttribute("aria-hidden", "false");
  });
  p.addEventListener("focus", () => {
    const d = p.getAttribute("data-desc") || "";
    pillDesc.textContent = d;
    pillDesc.setAttribute("aria-hidden", "false");
  });
  p.addEventListener("mouseleave", () => {
    pillDesc.textContent = "Passe o mouse sobre uma categoria para ver a descrição.";
    pillDesc.setAttribute("aria-hidden", "true");
  });
});
