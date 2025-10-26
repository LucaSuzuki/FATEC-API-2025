from flask import Flask

# importar todos os blueprints aqui
from routes.main import main_bp
from routes.cursos import cursos_bp
from routes.quiz import quiz_bp

app = Flask(__name__)
# Configurações básicas:
# cookies, sessões, segurança, essas paradas...
app.config["SECRET_KEY"] = "sua-chave-secreta-aqui"
app.config["DEBUG"] = True
# Registrar todos os blueprints
app.register_blueprint(main_bp)
app.register_blueprint(cursos_bp)
app.register_blueprint(quiz_bp)


# erro 404, (pode ser uma página!)
@app.errorhandler(404)
def page_not_found(e):
    return "Página não encontrada", 404


if __name__ == "__main__":
    app.run(debug=True)
