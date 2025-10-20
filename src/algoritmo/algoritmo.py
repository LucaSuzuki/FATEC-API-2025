#Biblioteca csv
import csv

#Arquivo CSV com os resultados
arquivo_csv = "resultados.csv"

#Valor input apenas como teste inicial, o código final receberá os dados do site
#Variáveis  e contadores referentes ao PO, Scrum Master e Dev Team
product_owner = "a"
scrum_master = "b"
dev_team = "c"

po_count = 0
sm_count = 0
dev_count = 0

#Input dos usuários
nome = input("Informe seu nome: ")
email = input("Informe o nome do seu email: ")

#Algoritmo de contagem de questões
#Contador de questões e inicializador de respostas
num_questoes = 20
resposta = "" 
alternativas = ['a', 'b', 'c']
count = 0
while num_questoes != count:
    resposta = input("Escolha uma alternativa: ")
    if resposta not in alternativas:
        resposta = input("Insira uma alternativa válida: ")
    else:
        if resposta == "a":
            po_count += 1
            count += 1
        elif resposta == "b":
            sm_count += 1
            count += 1
        else:
            dev_count += 1
            count += 1

def porcentagem(po_count, sm_count, dev_count, num_questoes):
    po = po_count / num_questoes * 100
    sm = sm_count / num_questoes * 100
    dev = dev_count / num_questoes * 100

    return po, sm, dev

#Cria uma lista com os resultados
po, sm, dev = porcentagem(po_count, sm_count, dev_count, num_questoes)
resultado = [po, sm, dev]

#Dicionário para a organização dos resultados
dados = {
    "Nome": nome,
    "E-Mail": email,               
    "Resultado": resultado
}

#Escrevendo os dados nos arquivos
with open("resultados.csv", "w", newline="") as arquivo:
    colunas = ["Nome", "E-Mail", "Resultado"]
    escritor = csv.DictWriter(arquivo, fieldnames=colunas)
    escritor.writeheader()
    escritor.writerow(dados)
    
print(resultado)


