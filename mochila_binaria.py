
def knapSack(itens, id_itens, capacidade_maxima): 

    itens.sort(reverse=True)
    # Ordenei as duas listas do maior para o menor
    # Ordenei a segunda de acordo com o primeiro
    itens, id_itens = zip(*sorted(zip(itens, id_itens)))
    itens = list(itens)
    id_itens = list(id_itens)
    dia = 1
    print(itens)
    print(id_itens)
    while len(itens) != 0:

        capacidade_dia = 0
        index = 0
        print("Dia: ", dia)
        while(len(itens) > 0  and capacidade_dia + itens[index] <= 13):
            
            capacidade_dia += itens[index]
            print("\tItem: ", id_itens[index], " Peso: ", itens[index])
            itens.pop(index)
            id_itens.pop(index)

        dia += 1

if __name__ == '__main__':

    itens = [7, 5, 2, 3]
    id_itens = [0, 1, 2, 3]
    capacidade_maxima = 13
    knapSack(itens, id_itens, capacidade_maxima)