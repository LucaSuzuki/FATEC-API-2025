from flask import Flask
from flask_mail import Mail,Message
from config import email_sender,senha_email

# importar todos os blueprints aqui
from routes.main import main_bp
from routes.cursos import cursos_bp
from routes.quiz import quiz_bp
from routes.avaliacao import avaliacao_bp



app = Flask(__name__)
# Configurações básicas:
# cookies, sessões, segurança, essas paradas...
app.config["SECRET_KEY"] = "sua-chave-secreta-aqui"
app.config["DEBUG"] = True

mail_settings = {
    "MAIL_SERVER" : 'smtp.gmail.com',
    "MAIL_PORT": 587,
    "MAIL_USE_TLS": True,
    "MAIL_USE_SSL": False,
    "MAIL_USERNAME": "fatecos67@gmail.com",
    "MAIL_PASSWORD": "fwab jhbe ksii dsxt",

}
app.config.update(mail_settings)
mail = Mail(app)


# Registrar todos os blueprints
app.register_blueprint(main_bp)
app.register_blueprint(cursos_bp)
app.register_blueprint(quiz_bp)
app.register_blueprint(avaliacao_bp)




# erro 404, (pode ser uma página!)
@app.errorhandler(404)
def page_not_found(e):
    return "Página não encontrada", 404


if __name__ == "__main__":
    app.run(debug=True)
from flask import Flask

