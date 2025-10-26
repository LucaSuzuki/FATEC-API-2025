const perguntas = [
  {
    pergunta: "O que é o Scrum?",
    alternativas: [
      "Um software de gerenciamento de projetos",
      "Um Framework ágil para desenvolvimento de produtos complexos",
      "Um método tradicional de gestão baseado em etapas fixas",
      "Uma técnica de documentação de requisitos",
      "Um modelo de programação orientada a objetos",
    ],
    correta: 1,
    numeroq: 1,
  },
  {
    pergunta: "Quem é o responsável por maximizar o valor do produto Scrum?",
    alternativas: [
      "Scrum Master",
      "Desenvolvedor",
      "Product Owner",
      "Gerente de Projetos",
      "Stakeholder",
    ],
    correta: 2,
    numeroq: 2,
  },
  {
    pergunta: "Qual é a duração máxima recomendada para um Sprint?",
    alternativas: ["1 semana", "2 semanas", "3 semanas", "4 semanas", "6 semanas"],
    correta: 3,
    numeroq: 3,
  },
  {
    pergunta: "O que é um evento real do Scrum?",
    alternativas: [
      "Reunião de Status",
      "Reunião de alinhamento semanal",
      "Revisão do Sprint",
      "Planejamento de recursos",
      "Reunião com Stakeholders",
    ],
    correta: 2,
    numeroq: 4,
  },
  {
    pergunta: "O que é o Product Backlog?",
    alternativas: [
      "Lista de tarefas técnicas do time de desenvolvimento",
      "Lista ordenada de tudo que é necessário no produto",
      "Documento com os erros e defeitos identificados",
      "Plano de entregas do projeto",
      "Resumo das funcionalidades concluídas",
    ],
    correta: 1,
    numeroq: 5,
  },
  {
    pergunta: "O que ocorre durante a Daily Scrum?",
    alternativas: [
      "O Product Owner revisa o andamento do projeto",
      "O time define novos objetivos do produto",
      "Os desenvolvedores planejam as atividades para o dia",
      "O Scrum Master distribui as tarefas diárias",
      "O time apresenta o progresso ao cliente",
    ],
    correta: 2,
    numeroq: 6,
  },
  {
    pergunta: "Qual é o principal objetivo da Sprint Retrospective?",
    alternativas: [
      "Revisar o backlog e definir prioridades",
      "Apresentar o produto ao cliente",
      "Melhorar o processo e identificar aprimoramentos",
      "Corrigir erros técnicos no código",
      "Avaliar o desempenho individual do time",
    ],
    correta: 2,
    numeroq: 7,
  },
  {
    pergunta: "Quem garante que o Scrum está sendo corretamente aplicado?",
    alternativas: [
      "Product Owner",
      "Scrum Master",
      "Time de Desenvolvimento",
      "Cliente",
      "Gerente de Qualidade",
    ],
    correta: 1,
    numeroq: 8,
  },
  {
    pergunta: "O que é um incremento no contexto Scrum?",
    alternativas: [
      "Um aumento no número de tarefas do backlog",
      "Uma nova Sprint planejada",
      "Um produto em potencial para entregar no fim da Sprint",
      "Um documento que descreve o progresso do projeto",
      "Uma melhoria no processo interno do time",
    ],
    correta: 2,
    numeroq: 9,
  },
  {
    pergunta: "O que significa o termo Time-box no Scrum?",
    alternativas: [
      "Um prazo máximo fixo para eventos e atividades",
      "Uma caixa de armazenamento de tarefas concluídas",
      "Uma técnica de estimativa de custos",
      "Um documento de requisitos",
      "Uma ferramenta de monitoramento de desempenho",
    ],
    correta: 0,
    numeroq: 10,
  },
  {
    pergunta: "Qual o papel principal do Scrum Master?",
    alternativas: [
      "Atribuir tarefas ao time",
      "Controlar o tempo de trabalho",
      "Ensinar, apoiar e remover impedimentos no processo Scrum",
      "Aprovar funcionalidades desenvolvidas",
      "Gerenciar o orçamento do projeto",
    ],
    correta: 2,
    numeroq: 11,
  },
  {
    pergunta: "O que é o Sprint Backlog?",
    alternativas: [
      "Lista de funcionalidades já entregues",
      "Conjunto de itens selecionados para o Sprint atual e plano para entregá-los",
      "Documento de erros encontrados durante os testes",
      "Cronograma de reuniões do time",
      "Lista de tarefas pendentes do projeto",
    ],
    correta: 1,
    numeroq: 12,
  },
  {
    pergunta: "Durante a Sprint Review, o que é apresentado?",
    alternativas: [
      "As falhas e impedimentos do time",
      "As métricas de desempenho do projeto",
      "O incremento desenvolvido e o que foi concluído na Sprint",
      "O planejamento da próxima Sprint",
      "O backlog completo do produto",
    ],
    correta: 2,
    numeroq: 13,
  },
  {
    pergunta: "Qual das opções descreve melhor o empirismo do Scrum?",
    alternativas: [
      "Basear decisões em observação e experimentação",
      "Tomar decisões sem revisão do time",
      "Adotar práticas fixas sem adaptações",
      "Depender apenas de métricas financeiras",
      "Seguir regras sem validação prática",
    ],
    correta: 0,
    numeroq: 14,
  },
  {
    pergunta: "Qual é o papel dos desenvolvedores no Scrum?",
    alternativas: [
      "Gerenciar o backlog do produto",
      "Testar o produto final",
      "Planejar, criar e entregar incrementos de valor a cada Sprint",
      "Supervisionar o trabalho dos outros membros",
      "Aprovar alterações no produto",
    ],
    correta: 2,
    numeroq: 15,
  },
  {
    pergunta: "Qual o tempo máximo recomendado para a Daily Scrum?",
    alternativas: ["10 minutos", "15 minutos", "20 minutos", "25 minutos", "30 minutos"],
    correta: 1,
    numeroq: 16,
  },
  {
    pergunta: "Quem pode cancelar uma Sprint?",
    alternativas: [
      "Scrum Master",
      "Product Owner",
      "Gerente de Projeto",
      "Time de Desenvolvimento",
      "Cliente",
    ],
    correta: 1,
    numeroq: 17,
  },
  {
    pergunta: "O que é a transparência dentro dos pilares do Scrum?",
    alternativas: [
      "Acesso livre a documentos externos",
      "Clareza total sobre o trabalho e o progresso do time",
      "Registro detalhado de horas trabalhadas",
      "Controle sobre o orçamento do projeto",
      "Exposição pública dos resultados",
    ],
    correta: 1,
    numeroq: 18,
  },
  {
    pergunta: "Quais são os três pilares do Scrum?",
    alternativas: [
      "Planejamento, execução e controle",
      "Escopo, tempo e custo",
      "Transparência, inspeção e adaptação",
      "Comunicação, liderança e qualidade",
      "Motivação, colaboração e confiança",
    ],
    correta: 2,
    numeroq: 19,
  },
  {
    pergunta: "Qual destas frases define melhor o propósito do Scrum?",
    alternativas: [
      "Aumentar a burocracia do processo",
      "Garantir entregas rápidas sem revisão",
      "Ajudar equipes a resolver problemas de forma adaptativa",
      "Substituir a documentação por reuniões",
      "Controlar os membros da equipe",
    ],
    correta: 2,
    numeroq: 20,
  },
  /*
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
  }, */
];

let atual = 0;
let respostas = Array(perguntas.length).fill(null);
let nome = "";
let email = "";

const AvaliaçãoEl = document.getElementById("Avaliação");

// Tela inicial para pedir nome e email
function pedirDados() {
 AvaliaçãoEl.innerHTML = `
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
      <button class="btn btn-primary" id="começarBtn" onclick="iniciarAvaliação()">Começar</button>
    </div>
  `;
}

function validarEmail(e) {
  // validação simples
  return /\S+@\S+\.\S+/.test(e);
}

function iniciarAvaliação() {
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
 AvaliaçãoEl.innerHTML = `
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

  const url = "/api/Avaliação";

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

  AvaliaçãoEl.innerHTML = `
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
