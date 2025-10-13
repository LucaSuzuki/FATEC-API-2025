const perguntas = [
  {
    pergunta: "Qual a capital da França?",
    alternativas: ["Roma", "Paris", "Berlim", "Madri", "Londres"],
    correta: 1,
    numeroq: 1,
  },
  {
    pergunta: "Quanto é 2 + 2?",
    alternativas: ["3", "4", "5", "6", "22"],
    correta: 1,
    numeroq: 2,
  },
  {
    pergunta: "Qual o maior planeta do sistema solar?",
    alternativas: ["Terra", "Vênus", "Marte", "Júpiter", "Saturno"],
    correta: 3,
    numeroq: 3,
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    alternativas: ["Picasso", "Da Vinci", "Michelangelo", "Van Gogh", "Monet"],
    correta: 1,
    numeroq: 4,
  },
  {
    pergunta: "Qual é o metal líquido à temperatura ambiente?",
    alternativas: ["Ferro", "Mercúrio", "Prata", "Alumínio", "Cobre"],
    correta: 1,
    numeroq: 5,
  },
  {
    pergunta: "texto da questao 6",
    alternativas: [
      "Alternativa A (correta)",
      "Alternativa B (errada)",
      "Alternativa C (errada)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 0,
    numeroq: 6,
  },
  {
    pergunta: "texto da questao 7",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (correta)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 2,
    numeroq: 7,
  },
  {
    pergunta: "texto da questao 8",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (errada)",
      "Alternativa D (correta)",
      "Alternativa E (errada)",
    ],
    correta: 3,
    numeroq: 8,
  },
  {
    pergunta: "texto da questao 9",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (correta)",
      "Alternativa C (errada)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 1,
    numeroq: 9,
  },
  {
    pergunta: "texto da questao 10",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (correta)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 2,
    numeroq: 10,
  },
  {
    pergunta: "texto da questao 11",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (errada)",
      "Alternativa D (errada)",
      "Alternativa E (correta)",
    ],
    correta: 4,
    numeroq: 11,
  },
  {
    pergunta: "texto da questao 12",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (correta)",
      "Alternativa C (errada)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 1,
    numeroq: 12,
  },
  {
    pergunta: "texto da questao 13",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (errada)",
      "Alternativa D (correta)",
      "Alternativa E (errada)",
    ],
    correta: 3,
    numeroq: 13,
  },
  {
    pergunta: "texto da questao 14",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (errada)",
      "Alternativa D (errada)",
      "Alternativa E (correta)",
    ],
    correta: 4,
    numeroq: 14,
  },
  {
    pergunta: "texto da questao 15",
    alternativas: [
      "Alternativa A (correta)",
      "Alternativa B (errada)",
      "Alternativa C (errada)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 0,
    numeroq: 15,
  },
  {
    pergunta: "texto da questao 16",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (correta)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 2,
    numeroq: 16,
  },
  {
    pergunta: "texto da questao 17",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (errada)",
      "Alternativa D (correta)",
      "Alternativa E (errada)",
    ],
    correta: 3,
    numeroq: 17,
  },
  {
    pergunta: "texto da questao 18",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (correta)",
      "Alternativa C (errada)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 1,
    numeroq: 18,
  },
  {
    pergunta: "texto da questao 19",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (correta)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 2,
    numeroq: 19,
  },
  {
    pergunta: "texto da questao 20",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (errada)",
      "Alternativa D (errada)",
      "Alternativa E (correta)",
    ],
    correta: 4,
    numeroq: 20,
  },
  {
    pergunta: "texto da questao 21",
    alternativas: [
      "Alternativa A (correta)",
      "Alternativa B (errada)",
      "Alternativa C (errada)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 0,
    numeroq: 21,
  },
  {
    pergunta: "texto da questao 22",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (errada)",
      "Alternativa D (correta)",
      "Alternativa E (errada)",
    ],
    correta: 3,
    numeroq: 22,
  },
  {
    pergunta: "texto da questao 23",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (correta)",
      "Alternativa C (errada)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 1,
    numeroq: 23,
  },
  {
    pergunta: "texto da questao 24",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (correta)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 2,
    numeroq: 24,
  },
  {
    pergunta: "texto da questao 25",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (errada)",
      "Alternativa D (correta)",
      "Alternativa E (errada)",
    ],
    correta: 3,
    numeroq: 25,
  },
  {
    pergunta: "texto da questao 26",
    alternativas: [
      "Alternativa A (correta)",
      "Alternativa B (errada)",
      "Alternativa C (errada)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 0,
    numeroq: 26,
  },
  {
    pergunta: "texto da questao 27",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (correta)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 2,
    numeroq: 27,
  },
  {
    pergunta: "texto da questao 28",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (errada)",
      "Alternativa D (errada)",
      "Alternativa E (correta)",
    ],
    correta: 4,
    numeroq: 28,
  },
  {
    pergunta: "texto da questao 29",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (correta)",
      "Alternativa C (errada)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 1,
    numeroq: 29,
  },
  {
    pergunta: "texto da questao 30",
    alternativas: [
      "Alternativa A (errada)",
      "Alternativa B (errada)",
      "Alternativa C (correta)",
      "Alternativa D (errada)",
      "Alternativa E (errada)",
    ],
    correta: 2,
    numeroq: 30,
  },
];

let atual = 0;
let respostas = Array(perguntas.length).fill(null);
let nome = "";
let email = "";

const quizEl = document.getElementById("quiz");

// Tela inicial para pedir nome e email
function pedirDados() {
  quizEl.innerHTML = `
    <h2>Antes de começar, insira seus dados:</h2>
    <div class="mb-3">
      <label>Nome:</label>
      <input type="text" id="nome" class="form-control" placeholder="Seu nome" />
    </div>
    <div class="mb-3">
      <label>E-mail:</label>
      <input type="email" id="email" class="form-control" placeholder="seuemail@exemplo.com" />
    </div>
    <div class="mt-4 text-end">
      <button class="btn btn-primary" id="começarBtn" onclick="iniciarQuiz()">Começar</button>
    </div>
  `;
}

function validarEmail(e) {
  // validação simples
  return /\S+@\S+\.\S+/.test(e);
}

function iniciarQuiz() {
  nome = document.getElementById("nome").value.trim();
  email = document.getElementById("email").value.trim();

  if (!nome || !email) {
    alert("Por favor, preencha seu nome e e-mail.");
    return;
  }
  if (!validarEmail(email)) {
    alert("E-mail inválido. Verifique e tente novamente.");
    return;
  }

  mostrarPergunta();
}

function mostrarPergunta() {
  const q = perguntas[atual];
  quizEl.innerHTML = `
    <p>Questão n°: ${q.numeroq}</p>
    <h2>${q.pergunta}</h2>
    <div class="options">
      ${q.alternativas
        .map(
          (alt, i) => `
        <div class="option ${respostas[atual] === i ? "selected" : ""}" onclick="selecionarResposta(${i})">
          ${alt}
        </div>
      `,
        )
        .join("")}
    </div>
    <div class="text-end">
      <button class="btn btn-primary mt-4 text-end" onclick="proxima()" ${respostas[atual] === null ? "disabled" : ""}>
        ${atual === perguntas.length - 1 ? "Finalizar" : "Próxima"}
      </button>
    </div>
  `;
}

function selecionarResposta(indice) {
  respostas[atual] = indice;
  mostrarPergunta();
}

function proxima() {
  if (atual < perguntas.length - 1) {
    atual++;
    mostrarPergunta();
  } else {
    finalizar();
  }
}

async function enviarResultado(resultado) {
  // SUBSTITUIR COM A ROTA DO BACK, eu nao sei ela ainda ###############################################################

  const url = "/api/quiz";

  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resultado),
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => null);
      throw new Error("Resposta do servidor: " + (text || resp.status));
    }

    return { ok: true, message: "Enviado com sucesso." };
  } catch (err) {
    console.error("Erro ao enviar resultado:", err);
    return {
      ok: false,
      message: err.message || "Erro desconhecido",
    };
  }
}

async function finalizar() {
  const acertos = respostas.filter((r, i) => r === perguntas[i].correta).length;
  const resultadoFinal = {
    nome: nome,
    email: email,
    nota: acertos,
    total: perguntas.length,
  };

  // salva localmente
  try {
    localStorage.setItem("ultimoResultado", JSON.stringify(resultadoFinal));
  } catch (e) {
    console.warn("Não foi possível salvar no localStorage:", e);
  }

  quizEl.innerHTML = `
    <div class="text-center h5 fw-bold">
      <p>Obrigado, <strong>${nome}</strong>!</p>
      <p>Você acertou ${acertos} de ${perguntas.length} perguntas!</p>
      <p id="statusEnvio">Enviando resultado...</p>
    </div>
  `;
  console.log("Resultado pronto para envio:", resultadoFinal);

  // PROVAVELMENTE enviara pro back, assim q a gente arrumar da pra testar
  const envio = await enviarResultado(resultadoFinal);

  const statusEl = document.getElementById("statusEnvio");
  if (envio.ok) {
    statusEl.textContent = "Resultado enviado com sucesso.";
  } else {
    statusEl.textContent =
      "Falha ao enviar resultado: " + envio.message + " (salvo localmente)";
  }
}
pedirDados();
