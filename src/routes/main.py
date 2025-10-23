from flask import Blueprint, render_template

main_bp = Blueprint("main", __name__)
# AQUI DEFINIMOS TODAS AS ROTAS PRINCIPAIS
# COMO HOME, SOBRE, EQUIPE, DOCUMENTACAO
@main_bp.route("/")
def home():
    return render_template("index.html")

@main_bp.route("/sobre")
def sobre():
    return render_template("pages/sobrenos.html")


@main_bp.route("/processos")
def processos():
    return render_template("pages/processos.html")


@main_bp.route("/metodos")
def metodos():
    return render_template("pages/metodos.html")
