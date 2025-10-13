from flask import Blueprint, render_template

main_bp = Blueprint("main", __name__)


# AQUI DEFINIMOS TODAS AS ROTAS PRINCIPAIS
# COMO HOME, SOBRE, EQUIPE, DOCUMENTACAO
@main_bp.route("/")
def index():
    return render_template("index.html")


@main_bp.route("/sobre")
def sobre():
    return render_template("pages/sobrenos.html")


@main_bp.route("/processo")
def equipe():
    return render_template("pages/processo.html")


@main_bp.route("/quiz")
def quiz():
    return render_template("pages/quiz.html")
