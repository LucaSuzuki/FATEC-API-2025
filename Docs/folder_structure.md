# Estrutura de Pastas do Projeto

## 📁 Organização do Repositório

```
TSCRUM_FATECOS/
├── 📁 Docs/                          # Documentação do projeto
│   ├── 📁 cronograma/                 # Cronogramas e planejamento
│   │   ├── Screenshot_22.png
│   │   └── Sprints.xlsx
│   ├── 📁 sprints/                    # Documentação das sprints
│   │   ├── doc_DOD.md                 # Definition of Done geral
│   │   ├── doc_DOD_sprint.md          # DoD por sprint
│   │   ├── doc_DOD_sprint1.md         # DoD específico Sprint 1
│   │   ├── doc_DOD_sprint2.md         # DoD específico Sprint 2
│   │   ├── doc_DOD_sprint3.md         # DoD específico Sprint 3
│   │   ├── doc_DOR.md                 # Definition of Ready geral
│   │   ├── doc_DOR_sprint.md          # DoR por sprint
│   │   ├── doc_DOR_sprint1.md         # DoR específico Sprint 1
│   │   ├── doc_DOR_sprint2.md         # DoR específico Sprint 2
│   │   ├── doc_DOR_sprint3.md         # DoR específico Sprint 3
│   │   ├── sprint_backlog1.md         # Backlog da Sprint 1
│   │   ├── sprint_backlog2.md         # Backlog da Sprint 2
│   │   └── sprint_backlog3.md         # Backlog da Sprint 3
│   ├── 📁 usercase/                   # Casos de uso
│   │   ├── UseCase.asta
│   │   └── usercase.md
│   ├── branch_strategy.md             # Estratégia de branches
│   ├── fibonacci.md                   # Planning Poker
│   ├── folder_structure.md            # Este arquivo
│   ├── installation_manual.md         # Manual de instalação
│   ├── members.md                     # Membros da equipe
│   ├── product_backlog.md             # Backlog do produto
│   ├── technologies.md                # Tecnologias utilizadas
│   └── user_manual.md                 # Manual do usuário
├── 📁 src/                           # Código fonte da aplicação
│   ├── 📁 algoritmo/                 # Algoritmos e lógica de negócio
│   │   ├── algoritmo.py
│   │   └── 📁 dados/                 # Dados e estruturas
│   ├── 📁 routes/                    # Rotas da aplicação Flask
│   │   ├── __init__.py
│   │   ├── artefatos.py
│   │   ├── cursos.py
│   │   ├── main.py
│   │   ├── processos.py
│   │   └── quiz.py
│   ├── 📁 static/                    # Arquivos estáticos
│   │   ├── 📁 css/                   # Estilos CSS
│   │   │   ├── Avaliação.css
│   │   │   ├── base.css
│   │   │   ├── button.css
│   │   │   └── quiz.css
│   │   ├── 📁 images/                # Imagens
│   │   │   ├── fatecoDAY.png
│   │   │   ├── fatecoNIGHT.png
│   │   │   ├── Fatecos-gif-logo.gif
│   │   │   └── Fatecos-team-photo.jpg
│   │   └── 📁 js/                    # Scripts JavaScript
│   │       ├── 📁 atividades/        # Scripts de atividades
│   │       │   ├── atividade_dev.js
│   │       │   ├── atividade_po.js
│   │       │   └── atividade_sm.js
│   │       ├── 📁 conteudo/          # Scripts de conteúdo
│   │       │   ├── conteudo_dev.js
│   │       │   ├── conteudo_intro_scrum.js
│   │       │   ├── conteudo_po.js
│   │       │   └── conteudo_sm.js
│   │       ├── atividade_verificador.js
│   │       ├── avaliacao.js
│   │       ├── button_atividade.js
│   │       ├── button_intro_scrum.js
│   │       └── quiz.js
│   ├── 📁 templates/                 # Templates HTML
│   │   ├── 📁 components/            # Componentes reutilizáveis
│   │   │   ├── acesso.html
│   │   │   ├── capitulos.html
│   │   │   ├── footer.html
│   │   │   └── navbar.html
│   │   ├── 📁 pages/                 # Páginas da aplicação
│   │   │   ├── 📁 cursos/            # Páginas dos cursos
│   │   │   │   ├── 📁 dev/           # Curso Developer
│   │   │   │   │   └── 📁 cap1/
│   │   │   │   │       └── conteudo.html
│   │   │   │   ├── 📁 intro_scrum/   # Curso Introdução Scrum
│   │   │   │   │   └── conteudo.html
│   │   │   │   ├── 📁 po/            # Curso Product Owner
│   │   │   │   │   └── 📁 cap1/
│   │   │   │   │       └── conteudo.html
│   │   │   │   ├── 📁 sm/            # Curso Scrum Master
│   │   │   │   │   └── 📁 cap1/
│   │   │   │   │       └── conteudo.html
│   │   │   │   ├── dev.html
│   │   │   │   ├── po.html
│   │   │   │   └── scrum_master.html
│   │   │   ├── avaliacao.html
│   │   │   ├── metodos.html
│   │   │   ├── processos.html
│   │   │   ├── quiz.html
│   │   │   └── sobrenos.html
│   │   ├── base.html
│   │   ├── base_curso.html
│   │   └── index.html
│   └── app.py                        # Arquivo principal da aplicação
├── .gitignore                        # Arquivos ignorados pelo Git
├── README.md                         # Documentação principal
└── requirements.txt                  # Dependências do projeto
```

## 📝 Convenções de Organização

- **Docs/**: Toda documentação técnica e de projeto
- **src/**: Código fonte organizado por funcionalidade
- **static/**: Recursos estáticos separados por tipo (CSS, JS, Images)
- **templates/**: Templates HTML organizados hierarquicamente
- **routes/**: Rotas separadas por contexto funcional
