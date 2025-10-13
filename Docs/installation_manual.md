<h1>Manual de Instalação</h1>

<p>Este guia fornece instruções detalhadas para configurar o ambiente de desenvolvimento e executar o projeto.</p>

<h2>Pré-requisitos</h2>

<p>Antes de começar, certifique-se de ter privilégios administrativos em seu sistema operacional.</p>

<h2>1. Instalação do Python</h2>

<h3>Windows</h3>

<ol>
  <li>Acesse o site oficial do Python: <a href="https://www.python.org/downloads/">python.org/downloads</a></li>
  <li>Baixe a versão mais recente do Python 3.x (recomendado: Python 3.10 ou superior)</li>
  <li>Execute o instalador</li>
  <li><strong>IMPORTANTE</strong>: Marque a opção "Add Python to PATH" durante a instalação</li>
  <li>Clique em "Install Now"</li>
  <li>Após a instalação, verifique no terminal:</li>
</ol>

<pre><code>python --version
pip --version
</code></pre>

<h3>Linux (Ubuntu/Debian)</h3>

<pre><code>sudo apt update
sudo apt install python3 python3-pip python3-venv
</code></pre>

<p>Verifique a instalação:</p>

<pre><code>python3 --version
pip3 --version
</code></pre>

<h3>macOS</h3>

<p>O macOS geralmente vem com Python pré-instalado, mas é recomendado instalar a versão mais recente:</p>

<pre><code># Usando Homebrew
brew install python3
</code></pre>

<p>Verifique a instalação:</p>

<pre><code>python3 --version
pip3 --version
</code></pre>

<h2>2. Clone do Repositório</h2>

<p>Clone o repositório do projeto para sua máquina local:</p>

<pre><code>git clone thttps://github.com/LucaSuzuki/FATEC-API-2025;
cd /FATEC-API-2025;
</code></pre>

<h2>3. Criação do Ambiente Virtual</h2>

<p>O ambiente virtual isola as dependências do projeto, evitando conflitos com outros projetos Python.</p>

<h3>Windows</h3>

<pre><code>python -m venv venv
</code></pre>

<h3>Linux/macOS</h3>

<pre><code>python3 -m venv venv
</code></pre>

<h2>4. Ativação do Ambiente Virtual</h2>

<h3>Windows (CMD)</h3>

<pre><code>venv\Scripts\activate
</code></pre>

<h3>Windows (PowerShell)</h3>

<pre><code>venv\Scripts\Activate.ps1
</code></pre>

<p><strong>Nota</strong>: Se encontrar erro de execução de scripts no PowerShell, execute:</p>

<pre><code>Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
</code></pre>

<h3>Linux/macOS</h3>

<pre><code>source venv/bin/activate
</code></pre>

<p>Após a ativação, você verá <code>(venv)</code> no início da linha de comando.</p>

<h2>5. Instalação das Dependências</h2>

<p>Com o ambiente virtual ativado, instale todas as dependências do projeto:</p>

<pre><code>pip install -r requirements.txt
</code></pre>

<p>Se o arquivo <code>requirements.txt</code> não existir, instale o Flask manualmente:</p>

<pre><code>pip install flask
</code></pre>

<h2>6. Configuração do Ambiente</h2>

<p>Crie um arquivo <code>.env</code> na raiz do projeto (se necessário) e configure as variáveis de ambiente:</p>

<pre><code># Exemplo de arquivo .env
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=sua-chave-secreta-aqui
DATABASE_URL=sqlite:///database.db
</code></pre>

<p><strong>Importante</strong>: Nunca compartilhe seu arquivo <code>.env</code> em repositórios públicos.</p>


<h2>7. Execução do Projeto</h2>

<h3>Modo de Desenvolvimento</h3>

<pre><code>flask run
</code></pre>

<p>Ou:</p>

<pre><code>python app.py
</code></pre>

<p>O servidor será iniciado em <code>http://127.0.0.1:5000/</code> ou <code>http://localhost:5000/</code></p>

<h3>Modo de Produção</h3>

<p>Para execução em produção, utilize um servidor WSGI como Gunicorn:</p>

<pre><code>pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 app:app
</code></pre>

<h2>9. Verificação da Instalação</h2>

<p>Acesse o navegador e vá para:</p>

<pre><code>http://localhost:5000
</code></pre>

<p>Você deverá ver a página inicial do projeto.</p>

<h2>10. Desativação do Ambiente Virtual</h2>

<p>Quando terminar de trabalhar no projeto, desative o ambiente virtual:</p>

<pre><code>deactivate
</code></pre>

<h2>Solução de Problemas</h2>

<h3>Erro: "python não é reconhecido como comando"</h3>

<ul>
  <li><strong>Windows</strong>: Certifique-se de que Python foi adicionado ao PATH durante a instalação</li>
  <li>Reinstale o Python marcando a opção "Add Python to PATH"</li>
</ul>

<h3>Erro: "pip install" falha</h3>

<ul>
  <li>Atualize o pip: <code>python -m pip install --upgrade pip</code></li>
  <li>Verifique sua conexão com a internet</li>
  <li>Tente usar um espelho PyPI alternativo</li>
</ul>

<h3>Erro: "Permission denied" no Linux/macOS</h3>

<ul>
  <li>Use <code>sudo</code> antes dos comandos quando necessário</li>
  <li>Ou ajuste as permissões da pasta do projeto</li>
</ul>

<h3>Porta 5000 já em uso</h3>

<p>Execute o Flask em outra porta:</p>

<pre><code>flask run --port=5001
</code></pre>

<h2>Estrutura de Pastas Recomendada</h2>

<pre><code>projeto/
│
├── venv/                  # Ambiente virtual (não versionar)
├── app.py                 # Arquivo principal da aplicação
├── requirements.txt       # Dependências do projeto
├── .env                   # Variáveis de ambiente (não versionar)
├── .gitignore            # Arquivos a ignorar no Git
│
├── static/               # Arquivos estáticos (CSS, JS, imagens)
├── templates/            # Templates HTML
└── routes/               # Rotas da aplicação
</code></pre>

<h2>Comandos Úteis</h2>

<pre><code># Listar pacotes instalados
pip list

# Congelar dependências atuais
pip freeze &gt; requirements.txt

# Atualizar um pacote específico
pip install --upgrade nome-do-pacote

# Ver rotas disponíveis
flask routes
</code></pre>

<h2>Suporte</h2>

<p>Em caso de dúvidas ou problemas, abra uma issue no repositório do projeto.</p>
