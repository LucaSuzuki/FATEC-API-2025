//conteudo
const conteudo1 = `
<h3>Função do Cargo</h3>
<div class="row text-justify">
    <h3> 1 - BREVE RESUMO DO QUE É SCRUM</h3>
    <p class="mt-2">O Scrum é uma metodologia ágil feito para ajudar pessoas e equipes a desenvolverem,
entregar e manter produtos de alto valor em ambientes complexos. Ele se baseia
fortemente nos 12 princípios ágeis aonde o conhecimento vem de um manifesto criado
por Jeff Sutherland e Kent Beck. O Scrum se apoia em três pilares interligados:
Transparência, que exige visibilidade completa do trabalho; Inspeção, que demanda o
acompanhamento frequente do progresso; e Adaptação, que garante que a equipe
faça os ajustes necessários o mais rápido possível.</p>

    <p class="mt-2">O trabalho é realizado em ciclos curtos e fixos, chamados Sprints, que estabelecem
um ritmo constante e ininterrupto para a equipe. O Time Scrum é composto pelo
Product Owner (responsável por maximizar o valor e definir o que deve ser feito), pelo
Scrum Master (o facilitador que garante o uso correto do Scrum e remove
impedimentos) e pelos Desenvolvedores (que constroem o produto de forma
autogerenciável). Ao final de cada Sprint, a equipe entrega um Incremento de produto,
que é a nova versão funcional e utilizável do produto, pronta para ser inspecionada e
potencialmente liberada para o cliente. É através dos Eventos da Sprint
(Planejamento, Daily Scrum, Revisão e Retrospectiva) que a equipe exerce a inspeção e
a adaptação contínuas, assegurando que o foco esteja sempre na entrega do maior
valor possível.</p>

    <p class="mt-2">Tendo isto em vista, as próximas seções explicarão terminologias e conceitos
fundamentais para a compreensão e entendimento aplicável desta metodologia.</p>
    </div>
`

const conteudo2 = `
<h3> 2 -BACKLOG DO PRODUTO</h3>
<div class="row text-justify">
    <p class="mt-2">Para poder visualizar um Backlog do produto e suas hierarquias, abaixo há um anexo
de uma imagem que demonstra suas funcionalidades:</p>

<img src="https://unistory.neocities.org/SM_INTRO_IMG_1.png">

<p class="mt-2">EPIC = É como se fosse o maior dos requisitos, a ideia completa do que o cliente pede
através da US. Ela representa O QUÊ necessariamente precisa ser feito para concluir
um dos itens do backlog do produto. Inerente a elas estão os componentes para
concluir este épico.</p>

<p class="mt-2">FEATURE = Constitui-se na função que será criada, se tal tarefa terá um atributo
específico que vai contribuir com o produto. Por exemplo:</p>

<ul>
    <li> Adição de sistema de login </li>
    <li> Deletar cliente do sistema </li>
    <li> Alteração de sistemas... </li>
</ul>

<p class="mt-2">USER STORY = Descrição da funcionalidade de um objeto em específico com
estimativas recomendadas a serem maior que um dia e menor que uma semana.
Usualmente, sua estimativa é composta pelo “Fibonacci adaptado” que é o sistema da
razão dourada com valores arredondados</p>

<p class="mt-2">TASK = É o menor item de um épico total, faz parte da conclusão de uma userstory. Ao
finalizar ela, a US também é finalizada. Possui prazos e demandas.</p>

<p class="mt-2">É importante que o Backlog do Produto seja prezado pela clareza de suas
funcionalidades. Um Backlog mal formulado e miseravelmente gerido pela equipe
pode resultar em uma dissonância produtiva na equipe Scrum. Um bom exemplo de
Backlog se encontra no link abaixo:</p>

`;

const conteudo3 = `
<h3> 3 - BACKLOG DA SPRINT</h3>
<div class="row text-justify">
    <p class="mt-2">O Sprint Backlog é um dos três artefatos oficiais do Scrum. Em termos simples, ele é o
plano de trabalho detalhado dos Developers para a Sprint atual</p>
    <p class="mt-2">Ele é criado a partir das USes do Product Backlog. Ele não é estático e o intuíto dele é
que ele não seja! Os Developers podem (e devem) atualizá-lo durante a Sprint à medida
que descobrem mais sobre o trabalho. Novas tarefas podem ser adicionadas e tarefas
existentes podem ser modificadas ou removidas.</p>
<img src="https://unistory.neocities.org/SPRINT_BACKLOG.png">
    </div>
`;

const conteudo4 = `
<h3> 4 - BURNDOWN CHART</h3>
<div class="text-justify">
    <p class="mt-2">Este artefato é o nosso termômetro visual para o progresso da Sprint. Ele faz uma
contraposição gráfica entre o tempo que esvai e o trabalho que persiste no Sprint
Backlog.</p>

    <p class="mt-2">O gráfico exibe uma linha que demarca o ritmo ideal de conclusão (a linha cinza) e uma
linha que reflete o esforço real do time. Ele serve para inspecionarmos se estamos no
compasso adequado para culminar a Sprint com sucesso, sendo uma ferramenta
crucial de transparência para antecipar quaisquer discrepâncias no timing.</p>

    <p class="mt-2">É de suma importância você computar as alterações diariamente com a equipe, o
Scrum Team por ser autônomo, tem que usar algum aplicativo comum no meio Scrum
(Jira, Trello ou Azure) para observar a produtividade.</p>

<img src="https://unistory.neocities.org/DEFINITION%20OF%20READY.png">
</div>`;

const conteudo5 = `
<h3> 5 - INCREMENTO</h3>
<div class="text-justify">
<p class="mt-2">O Incremento é a síntese de todo o trabalho concluído e validado durante a Sprint. Ele
é a materialização per se do que o time entregou, devendo ser funcional, coeso e
potencialmente utilizável. Cada Incremento é aditivo a todos os Incrementos
anteriores, e todos devem funcionar perfeitamente juntos. Basicamente, é a versão
mais atualizada do produto, que atende aos requisitos de definição ao nosso padrão
de qualidade (o DoD). Ele representa o valor que pode ser visualizado e testado que a
equipe forneceu ao longo do ciclo, sem ele não é possível realizar a Sprint Review de
qualidade.</p>
<p class="mt-2">O Incremento sempre se acumula ao que já existe. Não basta apenas adicionar novos
recursos; é obrigatório que eles se juntem ao produto de forma sólida. A equipe deve
ter certeza de que o novo trabalho não estrague (não cause regressões) o que já foi
entregue. Essa preocupação com a consistência garante que o produto esteja sempre
pronto para ser lançado, o que tira o medo e o risco dos lançamentos maiores e
demorados.</p>
<p class="mt-2">A conformidade com o Definition of Done (DoD) é o passaporte de qualidade para o
Incremento. A DoD transforma o conceito de "terminado" em um padrão
compreensível por todos, assegurando que o trabalho não apenas esteja "bagunçado”,
mas também testado, integrado, documentado e pronto para ser consumido pelo
cliente. Se o trabalho não atender à DoD, ele não pode ser inspecionado na Revisão da
Sprint, e o valor correspondente não é considerado parte do Incremento.</p>
</div>`;

const conteudo6 = `
<h3> 6 - DoR (Definition of Ready - Definição de Pronto):</h3>
<div class="text-justify">
<p class="mt-2">A DoR é um conjunto de critérios rigorosos que qualificam um item do Product Backlog
a ser selecionado para uma Sprint. É o nosso protocolo de elegibilidade ou de entrada.
Ela assegura que o time de desenvolvimento terá todas as premissas indispensáveis —
como clareza nos requisitos, escopo bem delineado, critérios de aceite definidos e
uma estimativa viável — para iniciar o trabalho sem embaraços. Se um item não
satisfaz a DoR, ele é considerado impróprio, pois representa um risco de ambiguidade,
e precisa de mais refinamento antes de ser comprometido pelo time.</p>
<img src="https://unistory.neocities.org/DEFINITION%20OF%20READY.png">
</div>`;

const conteudo7 = `
<h3> 7 - DoD (Definition of Done - Definição de Concluído):</h3>
<div class="text-justify">
<p class="mt-2">O DoD é o estatuto da qualidade do nosso produto; é a política formal que define o
padrão de excelência. É o critério inconteste que determina quando um item do
trabalho está verdadeiramente finalizado e aderente aos requisitos. Ele abrange desde
a codificação e revisão de pares até os testes de aceitação, integração e
documentação. A adesão estrita a este conjunto de regras garante que o que está
sendo entregue é robusto, testado e liberável. O DoD cria transparência, eliminando o
"quase pronto" e sendo o compromisso solene do time com a idoneidade da entrega</p>
<img src="https://unistory.neocities.org/DEFINITION%20OF%20DONE.png">
</div>
`;
const conteudo8 = `
<h3> 8 - Sprint</h3>
<div class="text-justify">
<p class="mt-2">Sprint: É o evento-contêiner que abriga todos os demais. Ele que é o Norte para todo o
resto da organização do produto, geralmente de um mês ou menos, durante o qual um
Incremento de produto "Pronto" (Done), utilizável e potencialmente liberável, é criado.
A Sprint é o coração do Scrum; ela estabelece um ritmo constante que permite ao time
focar, entregar valor de forma previsível e criar oportunidades regulares de inspeção e
adaptação do processo e do produto.</p>
</div>
`;
const conteudo9 = `
<h3> 9 - Sprint planning</h3>
<div class="text-justify">
<p class="mt-2">Sprint Planning (Planejamento da Sprint): É a cerimônia que inicia a Sprint, onde todo
o Time Scrum colabora para definir o trabalho a ser realizado. Ela é estruturada para
responder a três questões centrais:</p>
</div>
`;
const conteudo10 = `
<h3> 10 - Daily Scrum</h3>
<div class="text-justify">
<p class="mt-2">Daily Scrum (Reunião Diária): Uma reunião diária que dura de 5 a 15 minutos
dependendo de sua pauta. Realizada para e pelos Desenvolvedores. Seu propósito é
inspecionar o progresso em direção à Meta da Sprint e adaptar o Sprint Backlog (o
plano do dia) conforme necessário. Não é uma reunião de "relatório" para o Scrum
Master ou Product Owner, mas um ponto crucial de sincronização, planejamento e
fomento ao autogerenciamento, que expõe impedimentos ou impasses que a equipe
está enfretando.</p>
<p class="mt-2">Ao realizar, defina dias específicos e estratégicos para sua equipe poder se organizar, e
não exagere nos dias. Recomendação é ser pelo menos 3-4 dias da semana, passou
disso pode ficar maçante para a equipe.</p>
</div>
`;
const conteudo11 = `
<h3> 11 - Sprint Review (Revisão da Sprint)</h3>
<div class="text-justify">
<p class="mt-2">Sprint Review (Revisão da Sprint): A apresentação do Incremento, realizada ao final
da Sprint. O Time Scrum apresenta os resultados do seu trabalho (o que foi "Pronto" de
acordo com o DoD e todos os outros eventos) aos principais stakeholders (partes
interessadas, em vários casos, o cliente). O objetivo não é apenas uma demonstração
do produto, mas sim colher feedback acionável e fomentar a colaboração. Esta é a
principal oportunidade para adaptar o Product Backlog com base em novas
informações do mercado ou do cliente.</p>
<p class="mt-2">Ela tem foco em uma apresentação parecida com a do programa “Shark Tank”, com
modelo de “Pitch” que é uma apresentação rápida, eficaz e direta do incremento do
produto. É como se fosse uma visão empreendedora para o cliente avaliar e ver se é
realmente aquilo que ele está esperando receber.</p>
</div>
`;
const conteudo12 = `
<h3> 12 - Sprint Retrospective (Retrospectiva da Sprint):</h3>
<div class="text-justify">
<p class="mt-2">Este é o evento formal para o Time
Scrum inspecionar a si mesmo e criar um plano de melhorias a ser implementado na
próxima Sprint. A equipe identifica o que funcionou bem e o que pode ser aperfeiçoado
em relação aos indivíduos, interações, processos, ferramentas e até mesmo a própria
Definição de Concluído (DoD). O objetivo é a melhoria contínua da eficácia e da
qualidade, realizada em um ambiente de segurança psicológica onde as críticas são
encaradas como oportunidades, e não como algo pessoal.</p>
<p class="mt-2">Nada que é tratado na retrospectiva deve ser tratado de forma pessoal, pois há
também o método PACER a ser usado para poder avaliar cada membro da equipe. As
notas são geralmente geridas pelo Scrum Master e ele toma as atitudes de comentar
este problema que pode ser da equipe ou do indivíduo, mas nunca em público.</p>
</div>

`;