from flask import Blueprint, request, jsonify
from flask_mail import Mail, Message
from config import email_sender, senha_email

avaliacao_bp = Blueprint('avaliacao', __name__, url_prefix='/api')
mail = Mail()
EMAIL_RECIPIENTE = 'Gabixp10@gmail.com'

class Dados:
    def __init__(self, nome, email, nota, total):
        self.nome = nome
        self.email = email
        self.nota = nota
        self.total = total

@avaliacao_bp.route('/avaliacao', methods=['POST'])
def Enviar_Resultado():
    try:
        # Recebe dados JSON
        dados = request.get_json()
        
        # Validação básica
        if not dados:
            return jsonify({'erro': 'Nenhum dado enviado'}), 400
        
        # Cria objeto com os dados
        formDados = Dados(
            nome=dados.get('nome'),
            email=dados.get('email'),
            nota=dados.get('nota'),
            total=dados.get('total')
        )
        
        # Validação dos campos obrigatórios
        if not all([formDados.nome, formDados.email, formDados.nota, formDados.total]):
            return jsonify({'erro': 'Campos obrigatórios faltando'}), 400
        
        # Cria e envia email
        msg = Message(
            subject=f'Resultado do Quiz de {formDados.nome}',
            sender=email_sender,
            recipients=['gabixp10@gmail.com'],
            body=f'''
═══════════════════════════════════════════════════════════════
                    RESULTADO DO QUIZ SCRUM
═══════════════════════════════════════════════════════════════

Prezado(a) {formDados.nome},

Segue abaixo o resultado da sua avaliação no Quiz de Scrum:


┌─────────────────────────────────────────────────────────────┐
│           INFORMAÇÕES DO PARTICIPANTE                       │
└─────────────────────────────────────────────────────────────┘

    Nome:                {formDados.nome}
    E-mail:              {formDados.email}


┌─────────────────────────────────────────────────────────────┐
│                     DESEMPENHO                              │
└─────────────────────────────────────────────────────────────┘

    Pontuação Obtida:    {formDados.nota} de {formDados.total} questões
    Percentual:          {round((formDados.nota / formDados.total) * 100, 1)}%


───────────────────────────────────────────────────────────────

Agradecemos pela participação no Quiz de Scrum. Continue 
aprimorando seus conhecimentos em metodologias ágeis.

───────────────────────────────────────────────────────────────

💡 DICA: O Scrum é um framework leve que ajuda pessoas, times e 
organizações a gerar valor por meio de soluções adaptativas para 
problemas complexos.

───────────────────────────────────────────────────────────────

Este é um e-mail automático gerado pelo Sistema de Avaliação.


═══════════════════════════════════════════════════════════════
'''
        )
        
        mail.send(msg)
        
        return jsonify({
            'mensagem': 'Email enviado com sucesso!',
            'nome': formDados.nome,
            'nota': formDados.nota
        }), 200
        
    except Exception as e:
        return jsonify({'erro': str(e)}), 500