from flask import Blueprint, render_template, abort
from jinja2.exceptions import TemplateNotFound

cursos_bp = Blueprint("cursos", __name__, url_prefix="/cursos")


@cursos_bp.route("/dev")
def index():
    return render_template("pages/cursos/dev.html")


@cursos_bp.route("/sm")
def scrum_master():
    return render_template("pages/cursos/scrum_master.html")


@cursos_bp.route("/po")
def product_owner():
    return render_template("pages/cursos/po.html")


# Rota para capítulos normais
@cursos_bp.route("/<curso>/cap<int:id>")
def cap(curso, id):
    lista_cursos = ["dev", "sm", "po"]

    if curso not in lista_cursos:
        abort(404)

    template_path = f"pages/cursos/{curso}/cap{id}.html"

    try:
        return render_template(template_path)
    except TemplateNotFound:
        abort(404)


# Rota para atividades dos capítulos
@cursos_bp.route("/<curso>/cap<int:id>/atividade<int:atvId>")
def cap_atividade(curso, id, atvId):
    lista_cursos = ["dev", "sm", "po"]

    if curso not in lista_cursos:
        abort(404)

    template_path = f"pages/cursos/{curso}/cap{id}/atividade{atvId}.html"

    try:
        return render_template(template_path)
    except TemplateNotFound:
        abort(404)
