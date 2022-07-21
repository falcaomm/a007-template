
/* isso é pra comentário de bloco
    REVISÃO AQUI comentada

const nome = prompt("qual seu nome")
console.log(nome)
console.log('Olá mundo')*/

//AULA DE HJ 

let nome = "Manuela Meireles Falcão"
console.log(nome)
let idade = 21
console.log(idade)

nome = "Julia Pinheiro"
idade = 22
console.log(nome)
console.log(idade)
/*
    -foram testados erros, texto sem aspa nao funfa e uma variavel constante não pode mudar 
    -não pode declara duas vezes uma mesma variavel com o mesmo nome/titulo só pode dar varios valores para a mesma variavel, mudar os valores é não repetir as palavras const e let, tu só chama a variavel como no exemplo a cima da julia 
    -podemos imprimir varias coisas no console desde que separe com virgula, pode ter as variaveis e texto também tudo junto impresso no console
*/
console.log("o nome dela é",nome,"ela tem",idade,"anos")

let tenhoPet = false
const petNome = null
//posso colocar undefined também pq é não definido e o outro é nulo

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof tenhoPet)
console.log(typeof petNome)
//o null aparece como object pq é um bug do console, undefined aparece como undefined mesmo 

let nomePrompt = prompt("Qual seu nome?")
let idadePrompt = prompt("Qual sua idade?")

console.log("Olá", nomePrompt, "sua idade é", idadePrompt)
console.log(typeof nomePrompt)
console.log(typeof idadePrompt)
//a idade não ficou number pq tudo que vem do prompt é texto/spring

//convertendo tipos de texto pra numero de numero pra texto... 

nome = Number ("sander")
// é impossivel tranformar texto escrito com letras em numero vai aparecer NaN (não é um numero)
// tem como tranfromar um numero em texto tmb
// essas tranformações servem pra fazer conta principalemnte pq tudo que vem do prompt é texto
idade = Number ("55.3")
// esse number pra tranformar tem que ser escrito com N maiusculo
console.log(nome)
console.log(idade)
console.log(typeof nome)
console.log(typeof idade)
console.log("o nome dele é", nome, "a idade é", idade)

//exercício de fixação 1

const serie = "dark"
let temporadas = 3
let boa = true

console.log(typeof serie)
console.log(typeof temporadas)
console.log(typeof boa)

console.log("A serie", serie, "tem", temporadas, "temporadas, ela é boa?",  boa); 

//exercício de fixação 2
//ja que o exercicio pede pra mudar valores precisa usar variavel let 

let a = 10;
let b = 20;
let c;

c=a
a=b
b=c

console.log("variavel a 10 mudou pra ->", a);
console.log("variavel b 20 mudou pra ->", b);

// guardei o valor do meu a dentro da variavel c, disse que meu a ia ser igual a b, e disse que meu b então vai ser igual a c que é onde eu guardei minha variavel a