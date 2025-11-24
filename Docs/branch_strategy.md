# Estratégia de Branches

## 🌳 Estrutura de Branches

### Branch Principal
- **`main`**: Branch de produção com código estável e funcional

### Branches de Desenvolvimento
- **`front-end`**: Desenvolvimento da interface do usuário
- **`back-end`**: Desenvolvimento do backend e lógica de negócio
- **`Fullstack/FlaskRoutes`**: Integração entre frontend e backend com rotas Flask

### Branches de Features
- **`sistema-quiz`**: Implementação do sistema de quiz e avaliações
- **`backend/enviaremail`**: Funcionalidade de envio de emails
- **`info-docs`**: Documentação e informações do projeto
- **`Thiago-Estruturacao_README`**: Estruturação e melhoria do README

## 📋 Convenções

### Nomenclatura
- Features: `feature/nome-da-feature`
- Bugfixes: `bugfix/nome-do-bug`
- Hotfixes: `hotfix/nome-do-hotfix`
- Releases: `release/versao`

### Fluxo de Trabalho
1. Criar branch a partir de `main`
2. Desenvolver feature/fix
3. Criar Pull Request
4. Code Review
5. Merge para `main`

### Commits
- Usar mensagens descritivas em português
- Formato: `tipo: descrição breve`
- Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`