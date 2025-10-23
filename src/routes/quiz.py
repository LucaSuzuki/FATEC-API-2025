from flask import Blueprint, render_template, abort
from jinja2.exceptions import TemplateNotFound
from flask import Flask, request, jsonify
import csv

quiz_bp = Blueprint("quiz", __name__, url_prefix="/quiz")

app = Flask(__name__)

ARQUIVO_CSV = "algoritmo/dados/resultados.csv"

@quiz_bp.route("/")
def quiz():
    return render_template("pages/quiz.html")

@quiz_bp.route("/api", methods=["POST"])
def receber_resultado():
    data = request.get_json()

    nome = data.get("nome", "")
    email = data.get("email", "")
    respostas = data.get("respostas", [])

    # Contadores
    po_count = respostas.count("A")
    sm_count = respostas.count("B")
    dev_count = respostas.count("C")
    total = len(respostas)

    # Porcentagens
    def pct(x): return round((x / total) * 100, 2) if total > 0 else 0
    po = pct(po_count)
    sm = pct(sm_count)
    dev = pct(dev_count)

    # Determina perfil dominante
    if po > sm and po > dev:
        perfil = "Product Owner"
    elif sm > po and sm > dev:
        perfil = "Scrum Master"
    elif dev > po and dev > sm:
        perfil = "Dev Team"
    else:
        perfil = "Equilíbrio entre os perfis"

    # Salva no CSV
    dados = {
        "Nome": nome,
        "E-Mail": email,
        "PO (%)": po,
        "SM (%)": sm,
        "DEV (%)": dev,
        "Perfil": perfil,
        "Respostas": ", ".join(respostas)
    }

    with open(ARQUIVO_CSV, "a", newline="") as arquivo:
        colunas = ["Nome", "E-Mail", "PO (%)", "SM (%)", "DEV (%)", "Perfil", "Respostas"]
        escritor = csv.DictWriter(arquivo, fieldnames=colunas)
        if arquivo.tell() == 0:
            escritor.writeheader()
        escritor.writerow(dados)

    return jsonify({
        "ok": True,
        "mensagem": "Resultado recebido e salvo.",
        "perfil": perfil,
        "po": po,
        "sm": sm,
        "dev": dev
    })
