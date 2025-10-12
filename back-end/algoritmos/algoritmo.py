#Valor input apenas como teste inicial, o código final receberá os dados do site

#Variáveis  e contadores referentes ao PO, Scrum Master e Dev Team
product_owner = "a"
scrum_master = "b"
dev_team = "c"

po_count = 0
sm_count = 0
dev_count = 0



#Algoritmo de contagem de questões

#Contador de questões e inicializador de respostas
cont = 0
resposta = 0 
alternativas = ['a', 'b', 'c']
while cont != 20:
    resposta = input("Escolha uma alternativa: ")
    if resposta not in alternativas:
        resposta = input("Insira uma alternativa válida: ")
    else:
        if resposta == "a":
            po_count += 1
            cont += 1
        elif resposta == "b":
            sm_count += 1
            cont += 1
        else:
            dev_count += 1
            cont += 1
print(f"{po_count * 0.05:.2f} {sm_count * 0.05:.2f} {dev_count * 0.05:.2f}")
    