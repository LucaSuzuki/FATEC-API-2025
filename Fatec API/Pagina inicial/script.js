/* script.js */

/* =========================
   Inicialização — elementos principais
   ========================= */
const btnAlternarTema = document.getElementById("alternar-tema");
const body = document.body;
const spanAno = document.getElementById("ano");
const mainEl = document.querySelector('main');

if (spanAno) spanAno.textContent = new Date().getFullYear();

/* =========================
   Tema (persistência em localStorage)
   - THEME_KEY: chave do localStorage
   - applyTheme: aplica classe 'light' no <body> quando modo claro
   ========================= */
const THEME_KEY = "site-theme";
function applyTheme(theme) {
  if (theme === "light") {
    body.classList.add("light");
    btnAlternarTema.textContent = "☀️ Light";
    btnAlternarTema.setAttribute("aria-pressed", "true");
  } else {
    body.classList.remove("light");
    btnAlternarTema.textContent = "🌙 Dark";
    btnAlternarTema.setAttribute("aria-pressed", "false");
  }
}
const saved = localStorage.getItem(THEME_KEY);
if (saved === "light" || saved === "dark") {
  applyTheme(saved);
} else {
  applyTheme("dark");
  localStorage.setItem(THEME_KEY, "dark");
}
btnAlternarTema.addEventListener("click", () => {
  const next = body.classList.contains("light") ? "dark" : "light";
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
});

/* =========================
   Botões de função (exibir explicação)
   - mostra descrição ao passar o mouse / focar
   - click fixa e ESC desfaz o fixo
   ========================= */
const roleBtns = document.querySelectorAll(".botao-funcao");
const roleTitle = document.getElementById("titulo-funcao");
const roleText = document.getElementById("texto-funcao");
let fixado = null;
function showRoleInfo(btn) {
  const title = btn.getAttribute("data-title") || btn.textContent;
  const desc = btn.getAttribute("data-desc") || "";
  roleTitle.textContent = title;
  roleText.textContent = desc;
}
roleBtns.forEach(btn => {
  btn.addEventListener("mouseenter", () => { if (fixado) return; showRoleInfo(btn); });
  btn.addEventListener("focus", () => { if (fixado) return; showRoleInfo(btn); });
  btn.addEventListener("click", (e) => {
    if (fixado === btn) {
      fixado = null; btn.classList.remove("pinned");
      roleTitle.textContent = "Passe o mouse sobre uma função";
      roleText.textContent = "Explicação breve sobre a função aparecerá aqui.";
    } else {
      roleBtns.forEach(b => b.classList.remove("pinned"));
      fixado = btn; btn.classList.add("pinned"); showRoleInfo(btn);
    }
  });
  btn.addEventListener("mouseleave", () => {
    if (!fixado) {
      roleTitle.textContent = "Passe o mouse sobre uma função";
      roleText.textContent = "Explicação breve sobre a função aparecerá aqui.";
    }
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && fixado) {
    fixado.classList.remove("pinned"); fixado = null;
    roleTitle.textContent = "Passe o mouse sobre uma função";
    roleText.textContent = "Explicação breve sobre a função aparecerá aqui.";
  }
});

/* =========================
   Etiquetas (pills) — mostrar descrição ao passar o mouse/focar
   ========================= */
const etiquetas = document.querySelectorAll(".etiqueta");
const descricaoEtiqueta = document.getElementById("descricaoEtiqueta");
etiquetas.forEach(p => {
  p.addEventListener("mouseenter", () => {
    const d = p.getAttribute("data-desc") || "";
    descricaoEtiqueta.textContent = d;
    descricaoEtiqueta.setAttribute("aria-hidden", "false");
  });
  p.addEventListener("focus", () => {
    const d = p.getAttribute("data-desc") || "";
    descricaoEtiqueta.textContent = d;
    descricaoEtiqueta.setAttribute("aria-hidden", "false");
  });
  p.addEventListener("mouseleave", () => {
    descricaoEtiqueta.textContent = "Passe o mouse sobre uma categoria para ver a descrição.";
    descricaoEtiqueta.setAttribute("aria-hidden", "true");
  });
});

/* =========================
   Acordeões — comportamento expandir/colapsar
   - mantém apenas um aberto por vez
   - ESC fecha todos
   ========================= */
const accordions = document.querySelectorAll(".botao-accordion");
accordions.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const panel = document.getElementById(targetId);
    const expanded = btn.getAttribute("aria-expanded") === "true";
    accordions.forEach(other => {
      if (other !== btn) {
        other.setAttribute("aria-expanded", "false");
        const otherPanel = document.getElementById(other.getAttribute("data-target"));
        if (otherPanel) otherPanel.hidden = true;
      }
    });
    if (expanded) { btn.setAttribute("aria-expanded", "false"); if (panel) panel.hidden = true; }
    else { btn.setAttribute("aria-expanded", "true"); if (panel) panel.hidden = false; }
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    accordions.forEach(btn => {
      btn.setAttribute("aria-expanded", "false");
      const panel = document.getElementById(btn.getAttribute("data-target"));
      if (panel) panel.hidden = true;
    });
  }
});

/* =========================
   Rolagem suave para âncoras (links com data-scroll)
   ========================= */
const scrollLinks = document.querySelectorAll('a[data-scroll]');
scrollLinks.forEach(link => {
  link.addEventListener('click', (ev) => {
    ev.preventDefault();
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const targetId = href.slice(1);
    const el = document.getElementById(targetId);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', '#' + targetId);
  });
});

/* =========================
   BUSCA: destaque ao vivo + contagem por palavra
   - busca sem total (contagens por palavra)
   - usa snapshot do HTML original para restaurar
   ========================= */
const searchForm = document.getElementById('busca-topo');
const searchInput = document.getElementById('q');
const searchStats = document.getElementById('estatisticas-busca');

// seletores dos elementos que serão pesquisados e destacados
const contentSelectors = [
  'main h1','main h2','main h3','main p','main li',
  'main .resumo','main .texto-video','main .explicacao-funcao',
  'main .etiqueta','main .item-contato','main .cartao-exercicio','main .painel-accordion'
].join(',');
const contentEls = Array.from(document.querySelectorAll(contentSelectors));

// snapshot do HTML original para restauração
contentEls.forEach(el => {
  if (!el.dataset.origHtml) el.dataset.origHtml = el.innerHTML;
});

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function clearHighlights() {
  contentEls.forEach(el => {
    if (el.dataset.origHtml) el.innerHTML = el.dataset.origHtml;
  });
  searchStats.hidden = true;
}

// Executa busca e adiciona destaques
function runSearchQuery(q) {
  const query = (q || '').trim();
  if (!query) {
    clearHighlights();
    return;
  }

  // restaura originais antes de aplicar novo destaque
  contentEls.forEach(el => {
    if (el.dataset.origHtml) el.innerHTML = el.dataset.origHtml;
  });

  // separa palavras (preserva ordem, única)
  const words = query.split(/\s+/).filter(Boolean);
  const uniqueWords = Array.from(new Set(words));

  // conta ocorrências por palavra (texto principal, case-insensitive, palavra inteira)
  const mainText = (mainEl && mainEl.innerText) ? mainEl.innerText : document.body.innerText;
  const counts = {};
  uniqueWords.forEach(w => {
    try {
      const rx = new RegExp('\\b' + escapeRegExp(w) + '\\b', 'giu');
      const m = mainText.match(rx);
      counts[w] = m ? m.length : 0;
    } catch (err) {
      counts[w] = 0;
    }
  });

  // monta regex segura para destaque
  const safeWords = uniqueWords.map(w => escapeRegExp(w));
  if (safeWords.length === 0) {
    clearHighlights();
    return;
  }
  const highlightRegex = new RegExp('\\b(' + safeWords.join('|') + ')\\b', 'giu');

  // aplica destaque em cada elemento (usa snapshot original)
  contentEls.forEach(el => {
    const orig = el.dataset.origHtml || el.innerHTML;
    const replaced = orig.replace(highlightRegex, (match) => {
      return `<span class="destaque-busca">${match}</span>`;
    });
    el.innerHTML = replaced;
  });

  // Popula UI de estatísticas (por palavra) — sem total
  let statsHtml = '<div class="per-word">';
  uniqueWords.forEach(w => {
    const c = counts[w] || 0;
    statsHtml += `<div><strong>${w}</strong>: ${c}</div>`;
  });
  statsHtml += '</div>';
  statsHtml += `<button class="clear-btn" id="search-clear">Limpar destaques</button>`;
  searchStats.innerHTML = statsHtml;
  searchStats.hidden = false;

  // botão Limpar (reattach seguro)
  const clearBtn = document.getElementById('search-clear');
  if (clearBtn) {
    clearBtn.onclick = () => {
      clearHighlights();
      searchInput.value = '';
      searchInput.focus();
    };
  }
}

/* debounce para pesquisa ao digitar */
let searchTimeout = null;
const DEBOUNCE_MS = 300;

function scheduleSearch(q) {
  if (searchTimeout) clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    runSearchQuery(q);
    searchTimeout = null;
  }, DEBOUNCE_MS);
}

// Entrada: busca ao digitar (live)
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const v = e.target.value || '';
    if (!v.trim()) {
      // se vazio, restaura imediatamente
      clearHighlights();
      return;
    }
    scheduleSearch(v);
  });

  // Esc limpa destaques
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      clearHighlights();
      searchInput.value = '';
    }
  });
}

// Submit também dispara busca imediata (sem debounce)
if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (searchTimeout) { clearTimeout(searchTimeout); searchTimeout = null; }
    runSearchQuery(searchInput.value || '');
  });
}
