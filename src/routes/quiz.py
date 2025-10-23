from flask import Blueprint, request, jsonify
from flask_mail import Mail, Message
from config import email_sender, senha_email

quiz_bp = Blueprint('quiz', __name__, url_prefix='/api')
mail = Mail()
EMAIL_RECIPIENTE = 'gabixp10@gmail.com'

class Dados:
    def __init__(self, nome, email, nota, total):
        self.nome = nome
        self.email = email
        self.nota = nota
        self.total = total

@quiz_bp.route('/quiz', methods=['POST'])
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
            body=f'''{formDados.nome} que está cadastrado no email {formDados.email}, teve o seguinte resultado no Quiz Scrum:
Nota: {formDados.nota}/{formDados.total}'''
        )
        
        mail.send(msg)
        
        return jsonify({
            'mensagem': 'Email enviado com sucesso!',
            'nome': formDados.nome,
            'nota': formDados.nota
        }), 200
        
    except Exception as e:
        return jsonify({'erro': str(e)}), 500