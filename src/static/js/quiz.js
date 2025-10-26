const perguntas = [
  {
    pergunta: "Você prefere planejar e definir metas do projeto?",
    alternativas: ["Sim", "Às vezes", "Prefiro executar tarefas técnicas"],
    numeroq: 1,
  },
  {
    pergunta: "Você gosta de facilitar reuniões e ajudar o time a se organizar?",
    alternativas: ["Não muito", "Sim, bastante", "Prefiro programar ou desenvolver"],
    numeroq: 2,
  },
  {
    pergunta: "Você se sente mais confortável codando e resolvendo problemas técnicos?",
    alternativas: ["Não", "Depende do contexto", "Sim, muito"],
    numeroq: 3,
  },
    {
    pergunta: "Você prefere planejar e definir metas do projeto?",
    alternativas: ["Sim", "Às vezes", "Prefiro executar tarefas técnicas"],
    numeroq: 4,
  },
  {
    pergunta: "Você gosta de facilitar reuniões e ajudar o time a se organizar?",
    alternativas: ["Não muito", "Sim, bastante", "Prefiro programar ou desenvolver"],
    numeroq: 5,
  },
  {
    pergunta: "Você se sente mais confortável codando e resolvendo problemas técnicos?",
    alternativas: ["Não", "Depende do contexto", "Sim, muito"],
    numeroq: 6,
  },
    {
    pergunta: "Você prefere planejar e definir metas do projeto?",
    alternativas: ["Sim", "Às vezes", "Prefiro executar tarefas técnicas"],
    numeroq: 7,
  },
  {
    pergunta: "Você gosta de facilitar reuniões e ajudar o time a se organizar?",
    alternativas: ["Não muito", "Sim, bastante", "Prefiro programar ou desenvolver"],
    numeroq: 8,
  },
  {
    pergunta: "Você se sente mais confortável codando e resolvendo problemas técnicos?",
    alternativas: ["Não", "Depende do contexto", "Sim, muito"],
    numeroq: 9,
  },
    {
    pergunta: "Você prefere planejar e definir metas do projeto?",
    alternativas: ["Sim", "Às vezes", "Prefiro executar tarefas técnicas"],
    numeroq: 10,
  },
  {
    pergunta: "Você gosta de facilitar reuniões e ajudar o time a se organizar?",
    alternativas: ["Não muito", "Sim, bastante", "Prefiro programar ou desenvolver"],
    numeroq: 11,
  },
  {
    pergunta: "Você se sente mais confortável codando e resolvendo problemas técnicos?",
    alternativas: ["Não", "Depende do contexto", "Sim, muito"],
    numeroq: 12,
  },
    {
    pergunta: "Você gosta de facilitar reuniões e ajudar o time a se organizar?",
    alternativas: ["Não muito", "Sim, bastante", "Prefiro programar ou desenvolver"],
    numeroq: 13,
  },
  {
    pergunta: "Você se sente mais confortável codando e resolvendo problemas técnicos?",
    alternativas: ["Não", "Depende do contexto", "Sim, muito"],
    numeroq: 14,
  },

];

let atual = 0;
let respostas = Array(perguntas.length).fill(null);
let nome = "";
let email = "";

const quizEl = document.getElementById("quiz");

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
      <button class="btn btn-primary" onclick="iniciarQuiz()">Começar</button>
    </div>
  `;
}

function validarEmail(e) {
  return /\S+@\S+\.\S+/.test(e);
}

function iniciarQuiz() {
  nome = document.getElementById("nome").value.trim();
  email = document.getElementById("email").value.trim();

  if (!nome || !email) { alert("Preencha nome e e-mail."); return; }
  if (!validarEmail(email)) { alert("E-mail inválido."); return; }

  mostrarPergunta();
}

function mostrarPergunta() {
  const q = perguntas[atual];
  quizEl.innerHTML = `
    <p>Questão ${q.numeroq} de ${perguntas.length}</p>
    <h2>${q.pergunta}</h2>
    <div class="options">
      ${q.alternativas
        .map((alt, i) => `
          <div class="option ${respostas[atual] === i ? "selected" : ""}" onclick="selecionarResposta(${i})">
            ${alt}
          </div>
        `).join("")}
    </div>
    <div class="text-end">
      <button class="btn btn-primary mt-4" onclick="proxima()" ${respostas[atual] === null ? "disabled" : ""}>
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
  const url = "http://127.0.0.1:5000/quiz/api";

  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resultado),
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => null);
      throw new Error("Erro do servidor: " + (text || resp.status));
    }

    return await resp.json();
  } catch (err) {
    console.error("Erro ao enviar resultado:", err);
    return { ok: false, mensagem: err.message || "Erro desconhecido" };
  }
}

async function finalizar() {
  const letras = respostas.map(r => ["A","B","C"][r]);
  const resultadoFinal = { nome, email, respostas: letras };

  quizEl.innerHTML = `<p>Enviando resultado...</p>`;

  const envio = await enviarResultado(resultadoFinal);

  if(envio.ok){
    quizEl.innerHTML = `
<div class="d-flex justify-content-center align-items-center flex-column" style="min-height: 60vh;">
    <h3>Obrigado, ${nome}!</h3>
    <h3>Relatório de desempenho:</h3>
    <div class="mb-3 w-100">
      <div class="d-flex flex-column align-items-center">
          <span> P.O </span>
        <div class="progress mb-3 shadow" style="width: 60%;">
          <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${envio.po ?? 0}%"></div>
        </div>
          <span> S.M </span>
        <div class="progress mb-3 shadow" style="width: 60%;">
          <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${envio.sm ?? 0}%"></div>
        </div>
          <span> S.T </span>
        <div class="progress mb-3 shadow" style="width: 60%;">
          <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${envio.dev ?? 0}%"></div>
        </div>
      </div>
    </div>
    <h1> Seu perfil é: ${envio.perfil}</h1>
    <p> Você a partir deste teste desempenhou um papel que remete muito a um ${envio.perfil}, para evoluir neste cargo, prossiga no curso dele!</p>
    <p class="text-success">Resultado enviado e salvo ✅</p>
  </div>

  


    `;
  } else {
    quizEl.innerHTML = `<p class="text-danger">Erro ao enviar: ${envio.mensagem}</p>`;
  }
}

pedirDados();