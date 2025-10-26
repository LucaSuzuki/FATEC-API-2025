from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/api/quiz", methods=["POST"])
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



    # Evita divisão por zero
    if total == 0:
        return jsonify({
            "ok": False,
            "mensagem": "Nenhuma resposta enviada."
        }), 400

    # Porcentagens
    def pct(x): 
        return round((x / total) * 100, 2)

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

    # Retorna o resultado (sem alternativas)
    return jsonify({
        "ok": True,
        "mensagem": "Resultado calculado com sucesso.",
        "perfil": perfil,
        "po": po,
        "sm": sm,
        "dev": dev
    })

if __name__ == "__main__":
    app.run(debug=True)
