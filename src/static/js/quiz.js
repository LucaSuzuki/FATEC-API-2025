// Substitua/cole este script no seu projeto
const perguntas = [
  {
    pergunta: "Quando o time enfrenta um obstáculo inesperado, você tende a...",
    alternativas: [
      { texto: "Mediar a conversa e buscar consenso da equipe", peso: "1-SM" },
      { texto: "Tentar reorganizar prioridades", peso: "1-PO" },
      { texto: "Ajudar diretamente a resolver o problema técnico", peso: "1-ST" },
      //{ texto: "???", peso: "1-PO" },
      { texto: "Buscar orientação externa para decidir como mediar o conflito", peso: "1-SM" },
    ],
    numeroq: 1,
  },
  {
    pergunta: "Quando o time traz várias ideias novas para o produto, você tende a...",
    alternativas: [
      { texto: "Estimular a equipe a discutir coletivamente os prós e contras de cada ideia", peso: "1-SM" },
      { texto: "Avaliar quais ideias se alinham melhor à visão do produto e aos objetivos do cliente", peso: "1-PO" },
      { texto: "Fazer uma análise técnica para ver o que é viável implementar primeiro", peso: "1-ST" },
      //{ texto: "???", peso: "1-SM" },
      { texto: "Esperar uma decisão para então contribuir com melhorias na execução", peso: "1-ST" },
    ],
    numeroq: 2,
  },
  {
    pergunta: "Quando a equipe está planejando o próximo sprint e há mais histórias do que o time pode entregar, você tende a...",
    alternativas: [
      { texto: "Facilitar uma conversa para alinhar expectativas e priorizar juntos", peso: "1-SM" },
      { texto: "Reordenar as histórias de acordo com o valor de negócio e metas do produto", peso: "1-PO" },
      { texto: "Defender que o time escolha apenas o que é tecnicamente viável", peso: "1-ST" },
      //{ texto: "???", peso: "1-ST" },
      { texto: "Propor dividir as histórias maiores em partes menores", peso: "1-PO" },
    ],
    numeroq: 3,
  },
  {
    pergunta: "O cliente pede uma alteração importante no meio do sprint. O que você faz?",
    alternativas: [
      { texto: "Relembro o cliente sobre o compromisso do sprint e busco replanejar na próxima entrega", peso: "1-SM" },
      { texto: "Avalio o impacto no backlog e verifico se o valor justifica a mudança imediata", peso: "1-PO" },
      { texto: "Adapto o código e tento entregar mesmo assim", peso: "1-ST" },
      { texto: "Consulto o time para ver se é possível antes de responder", peso: "1-SM" },
      { texto: "Aguardo o PO decidir e sigo o plano atual", peso: "1-ST" },
    ],
    numeroq: 4,
  },
  {
    pergunta: "Alguns membros do time discordam fortemente sobre como implementar uma funcionalidade. O que você faz?",
    alternativas: [
      { texto: "Facilito uma conversa neutra para que o grupo chegue a um consenso", peso: "1-SM" },
      { texto: "Decido a abordagem com base no impacto no produto", peso: "1-PO" },
      { texto: "Analiso quem tem o argumento mais consistente baseado no resultado que trará ao projeto", peso: "1-ST" },
      { texto: "Proponho uma votação para decidir rapidamente", peso: "1-PO" },
      //{ texto: "???", peso: "1-PO" },
    ],
    numeroq: 5,
  },
  {
    pergunta: "Durante a sprint review, o cliente mostra insatisfação com o resultado entregue. Qual é sua primeira reação?",
    alternativas: [
      { texto: "Facilitar o diálogo entre cliente e equipe para entender a origem da insatisfação", peso: "1-SM" },
      { texto: "Questionar o cliente sobre o alinhamento inicial e revisar prioridades de valor", peso: "1-PO" },
      { texto: "Analiso com o time o que deu errado e proponho ações imediatas de melhoria técnica", peso: "1-ST" },
      { texto: "Aceitar o feedback e prometer corrigir tudo na próxima sprint", peso: "1-ST" },
      { texto: "Reúno o time e o cliente para entender o que pode ser melhorado juntos", peso: "1-SM" },
    ],
    numeroq: 6,
  },
  {
    pergunta: "Após um erro que afetou a entrega, o que você faz na sprint review?",
    alternativas: [
      { texto: "Incentivo todos a discutir o que aprendemos e propor melhorias", peso: "1-SM" },
      { texto: "Reavalio se o erro impactou o valor de negócio e ajusto o backlog", peso: "1-PO" },
      { texto: "Analiso o problema e proponho uma solução de prevenção", peso: "1-ST" },
      { texto: "Fico em silêncio e apenas escuto o que os outros dizem", peso: "0" },
      { texto: "Explico ao cliente o impacto do erro e destaco como o time planeja ajustar as prioridades", peso: "1-PO" },
    ],
    numeroq: 7,
  },
  {
    pergunta: "Ao receber várias demandas ao mesmo tempo, você geralmente...",
    alternativas: [
      { texto: "Reúne o time para decidir coletivamente o que fazer primeiro", peso: "1-SM" },
      { texto: "Escolhe a tarefa com maior valor para o cliente", peso: "1-PO" },
      { texto: "Começa pelo que parece mais simples de ser feito", peso: "1-ST" },
      //{ texto: "???", peso: "1-ST" },
      //{ texto: "???", peso: "1-PO" },
    ],
    numeroq: 8,
  },
  {
    pergunta: "Durante a sprint, como você costuma acompanhar o andamento do trabalho?",
    alternativas: [
      { texto: "Facilito check-ins diários para manter o alinhamento", peso: "1-SM" },
      { texto: "Verifico se as tarefas entregues correspondem às prioridades do produto", peso: "1-PO" },
      { texto: "Atualizo o quadro e resolvo o que estiver estagnado", peso: "1-ST" },
      //{ texto: "???", peso: "1-ST" },
      //{ texto: "???", peso: "1-SM" },
    ],
    numeroq: 9,
  },
  {
    pergunta: "O time precisa escolher rapidamente entre duas soluções possíveis. O que você faz?",
    alternativas: [
      { texto: "Incentivo uma conversa breve para chegar a um consenso", peso: "1-SM" },
      { texto: "Escolho a opção com maior valor de entrega", peso: "1-PO" },
      { texto: "Escolho a opção mais simples de implementar", peso: "1-ST" },
      //{ texto: "???", peso: "1-ST" },
      //{ texto: "???", peso: "1-PO" },
    ],
    numeroq: 10,
  },
  {
    pergunta: "Quando alguém te dá um feedback construtivo sobre o trabalho, você...",
    alternativas: [
      { texto: "Agradece e sugere discutir o assunto em equipe", peso: "1-SM" },
      { texto: "Reflete e pensa em como ele pode ajudar a melhorar o produto ou o relacionamento com o cliente", peso: "1-PO" },
      { texto: "Ajusta seu processo técnico para melhorar", peso: "1-ST" },
      //{ texto: "???", peso: "1-PO" },
      { texto: "Ignora, pois não acha relevante", peso: "0" },
    ],
    numeroq: 11,
  },
  {
    pergunta: "Quando o cliente faz uma pergunta inesperada sobre o andamento do projeto, você tende a...",
    alternativas: [
      { texto: "Pedir para tratar o assunto na próxima reunião formal", peso: "1-SM" },
      { texto: "Resumir o impacto no produto e próximos passos", peso: "1-PO" },
      { texto: "Explicar o status técnico da tarefa em detalhes", peso: "1-ST" },
      //{ texto: "???", peso: "1-ST" },
      //{ texto: "???", peso: "1-PO" },
    ],
    numeroq: 12,
  },
  {
    pergunta: "Durante a sprint review a equipe notou que houve um ‘efeito cascata’ no meio do andamento do projeto. O que você faz?",
    alternativas: [
      { texto: "Incentivo o time a analisar o que causou o efeito e facilito uma conversa para encontrar melhorias no processo", peso: "1-SM" },
      { texto: "Avalio com o cliente se o impacto do efeito exige repriorização das entregas futuras.", peso: "1-PO" },
      { texto: "Investigo com a equipe as falhas técnicas que levaram ao efeito e proponho soluções", peso: "1-ST" },
      { texto: "Registro o problema e deixo para discutir na próxima sprint review", peso: "1-SM" },
      { texto: "Documento o ocorrido e aviso o PO para que considere na priorização futura", peso: "1-ST" },
    ],
    numeroq: 13,
  },
  {
    pergunta: "O time está em crise! O prazo está apertado, há muitos conflitos internos e o cliente acabou de pedir uma mudança importante no projeto. O que você faz?",
    alternativas: [
      { texto: "Eu reúno o time para acalmar a situação, buscar entender o que está atrasando a equipe e criar um plano em conjunto para seguir em frente", peso: "2-SM" },
      { texto: "Eu converso com o cliente para entender o valor da mudança no produto e reorganizo as prioridades para reverter o impacto negativo", peso: "2-PO" },
      { texto: "Eu analiso o que pode ser ajustado e me ofereço para ajudar a entregar o essencial ao projeto dentro do prazo", peso: "2-ST" },
      //{ texto: "", peso: "" },
      //{ texto: "", peso: "" },
    ],
    numeroq: 14,
  },
];
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// cria cópia embaralhada das perguntas e embaralha alternativas por questão
function criarQuizEmbaralhado() {
  // deep copy para não mutar o original
  const copia = JSON.parse(JSON.stringify(perguntas || []));
 
  copia.forEach((q) => {
    q.alternativas = (q.alternativas || []).map((alt) => {
      if (typeof alt === "string") return { texto: alt, peso: "" };
     
      return {
        texto: alt.texto !== undefined ? String(alt.texto) : "",
        peso: alt.peso !== undefined ? String(alt.peso) : "",
      };
    });
    // embaralha alternativas mantendo as entradas vazias também
    shuffleArray(q.alternativas);
  });
  // embaralha as perguntas
  return shuffleArray(copia);
}

let quizPerguntas = []; // perguntas embaralhadas usadas no quiz
let atual = 0;
let respostas = [];
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
      <button class="btn btn-primary" id="comecarBtn" onclick="iniciarquiz()">Começar</button>
    </div>
  `;
}

function validarEmail(e) {
  return /\S+@\S+\.\S+/.test(e);
}

function iniciarquiz() {
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

  quizPerguntas = criarQuizEmbaralhado();
  respostas = Array(quizPerguntas.length).fill(null);
  atual = 0;

  mostrarPergunta();
}

function mostrarPergunta() {
  const q = quizPerguntas[atual];
 
  const exibicaoNumero = `Questão n°: ${atual + 1}`;
  const percentualProgresso = Math.round((atual / quizPerguntas.length) * 100);

  quizEl.innerHTML = `
    <div class="mb-3">
      <div class="progress" role="progressbar" aria-valuenow="${percentualProgresso}" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${percentualProgresso}%"></div>
      </div>
    </div>
    <p>${exibicaoNumero}</p>
    <h2>${q.pergunta || ""}</h2>
    <div class="options">
      ${q.alternativas
        .map((alt, i) => {
          const texto = (alt && alt.texto) ? alt.texto : "";
          const selected = respostas[atual] === i ? "selected" : "";
       
          const indiceVisivel = i + 1;
          return `
            <div class="option ${selected}" onclick="selecionarResposta(${i})">
              <strong>${indiceVisivel}.</strong> ${texto}
            </div>
          `;
        })
        .join("")}
    </div>
    <div class="text-end">
      <button class="btn btn-primary mt-4 text-end" onclick="proxima()" ${respostas[atual] === null ? "disabled" : ""}>
        ${atual === quizPerguntas.length - 1 ? "Finalizar" : "Próxima"}
      </button>
    </div>
  `;
}

function selecionarResposta(indice) {
  respostas[atual] = indice;
  mostrarPergunta();
}

function proxima() {
  if (atual < quizPerguntas.length - 1) {
    atual++;
    mostrarPergunta();
  } else {
    finalizar();
  }
}

async function enviarResultado(resultado) {
  // aq fica a rota por back
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

function parsePeso(pesoStr) {
  if (!pesoStr) return null;
  if (pesoStr === "0") return { valor: 0, papel: null };
  const parts = pesoStr.split("-");
  const valor = parseInt(parts[0], 10);
  const papel = parts[1] ? parts[1].toUpperCase() : null;
  if (Number.isNaN(valor)) return null;
  return { valor, papel };
}

async function finalizar() {
  // soma os pesos 
  const totais = {};

  respostas.forEach((selIndex, i) => {
    if (selIndex === null || selIndex === undefined) return;
    const q = quizPerguntas[i];
    const alt = (q.alternativas && q.alternativas[selIndex]) ? q.alternativas[selIndex] : null;
    const pesoStr = alt && alt.peso ? String(alt.peso) : "";
    const parsed = parsePeso(pesoStr);
    if (parsed && parsed.papel && parsed.valor) {
      if (!Object.prototype.hasOwnProperty.call(totais, parsed.papel)) totais[parsed.papel] = 0;
      totais[parsed.papel] += parsed.valor;
    }
  });

  const resultadoFinal = {
    nome,
    email,
    totalPerguntas: quizPerguntas.length,
    respostas, 
    totaisPorPapel: totais,
   
    quizMostrado: quizPerguntas,
  };

  try {
    localStorage.setItem("ultimoResultado", JSON.stringify(resultadoFinal));
  } catch (e) {
    console.warn("Não foi possível salvar no localStorage:", e);
  }

  // Calcular o máximo de pontos possível para normalizar as barras
  const maxPontos = Math.max(...Object.values(totais), 1);

  // aq fiz literalmente so pra test, qualquer coisa so apagar isso
  quizEl.innerHTML = `
    <div class="text-center h5 fw-bold">
      <p>Obrigado, <strong>${nome}</strong>!</p>
      <p>Resultado salvo localmente .</p>
      <div style="margin-top:24px;text-align:left;">
        <strong>Totais por papel:</strong>
        <div id="listaTotais" style="margin-top:16px;">
          ${Object.keys(totais).length === 0 ? "<p>(nenhum total computado)</p>" :
            Object.entries(totais).map(([papel, val]) => {
              const percentual = Math.round((val / maxPontos) * 100);
              const cores = {
                'ST': 'bg-primary',
                'PO': 'bg-success',
                'SM': 'bg-warning'
              };
              const cor = cores[papel] || 'bg-info';
              return `
                <div style="margin-bottom:16px;">
                  <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
                    <strong>${papel}</strong>
                    <span>${val} pontos</span>
                  </div>
                  <div class="progress" role="progressbar" aria-valuenow="${percentual}" aria-valuemin="0" aria-valuemax="100" style="height:24px;">
                    <div class="progress-bar progress-bar-striped progress-bar-animated ${cor}" style="width: ${percentual}%"></div>
                  </div>
                </div>
              `;
            }).join("")}
        </div>
      </div>
    </div>
  `;

  const envio = await enviarResultado(resultadoFinal);
  const resultadoDiv = document.querySelector('.text-center.h5.fw-bold');
  if (resultadoDiv) {
    const statusEl = document.createElement('p');
    statusEl.id = 'statusEnvio';
    statusEl.textContent = envio.ok ? "Resultado enviado com sucesso." : "Falha ao enviar resultado: " + envio.message + " (salvo localmente)";
    resultadoDiv.appendChild(statusEl);
  }

  console.log("ResultadoFinal:", resultadoFinal);
}

pedirDados();
