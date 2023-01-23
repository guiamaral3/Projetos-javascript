// Abrir terminal e executar comando node para utilizar os itens abaixo
// Atribui valor
n1 = 1545.5

// Colocar 2 casas decimais após o ponto
n1.toFixed(2)

// Trocar ponto por virgula e colcoa 2 casas decimais
n1.toFixed(2).replace('.',',')

// Formatar para valor de moeda "real"
n1.toLocaleString('pt-BR', {style: 'currency', currency :'BRL'})

// Formatar para valor de moeda "dolar"
n1.toLocaleString('pt-BR', {style: 'currency', currency :'USD'})