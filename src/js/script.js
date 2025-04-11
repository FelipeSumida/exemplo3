// //DECLARARAÇÕES E VARIAVEIS

// var nome ="fiap";
// console.log(nome);

// let idade = 19;
// console.log(idade)

// const sobrenome="Fiapinho";
// console.log(sobrenome)

// //declarando uma variavel indefinida
// let nome1;
// console.log(nome1)

// //declarando uma variavel nula
// let nome2=null;
// console.log(nome2)

// //TIPOS DE VARIAVEIS

// let exemplo1 =10;
// console.log(typeof exemplo1)

// let exemplo2 ="Tecnologia";
// console.log(typeof exemplo2)

// let exemplo3 =true;
// console.log(typeof exemplo3)

// let exemplo4={};
// console.log(typeof exemplo4)

// let exemplo5 =[];
// console.log(typeof exemplo5)


//CONVERSÕES

//FLOAT => STRING

// let numFloat =123.456;
// console.log(numFloat.toString())

// //STRING => FLOAT
// let numString ="12.963";
// console.log(parseFloat(numString))

// //INT => STRING
// let numInt =100;
// console.log(numInt.toString())

// //STRING => INT

// let numString1 ="120";
// console.log(parseInt(numString1))

//METODOS

//METODO length - VERIFICA O TAMNHO DA STRING

// let frase ="O mundo da Tecnologia";
// console.log(frase.length)

// //METODO Indeof/lastIndexOf-RETORNA UM TRECHO DO SEU CODIGO

// let texto ="Programação Sustentável ão";
// console.log(texto.lastIndexOf("ão"))

// //METODO slice - RETORNA PARTE DE UM TEXTO PASSANDO INICIO E O FINAL
// let info ="Programação de ponta";
// console.log(info.slice(14,20))

//OPERADORES ARITMÉTICOS

// const a=10;
// const b=20;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

//OPERADORES LÓGICOS

// const c=20;
// const d=30;

// console.log(c > d);
// console.log(c < d && c < 10);
// console.log(c > d || d > c);
// console.log(c == d || d <= c )

//OPERADORES DE COMPARAÇÃO
// let e="10";
// let f="10";

// console.log( e == f);
// console.log( e === f);
// console.log( e != f);


//CONDICIONAL 

// if

// if(true){
//     console.log("é verdadeiro")
// }

// let exemplo=1
// if(exemplo ==1){
//     console.log("esta correto")
// }

// // if/else

// let nome ="fiap";

// if(nome =="fiap"){
//     console.log("Nome correto")
//     // document.write("Nome Certo")
// }
// else{
//     console.log("Nome Errado")
//     // document.write("Nome Errado")
// }

// if encadeado ou aninhado

// let idade =51;
// if(idade <= 14){
//     console.log("Não pode entrar é menor")
// }
// else if(idade > 14 && idade <= 18){
//     console.log("Pode entrar e curtir")
// }
// else if(idade > 18 && idade <= 50){
//     console.log("Perigo seus pais estão na balada")
// }
// else{
//     console.log("Você deve ficar no sofa assistindo tv")
// }

// switch case

// let time ="Palmeiras";

// switch(time){
//     case "Palmeiras":
//         console.log("Melhor time")
//         break;
//     case "Corinthians":
//         console.log("É tão ruim que não ganha do barcelona do paraguai")
//         break;
//     case "São Paulo":
//         console.log("Simplesmente todos são viados")
//         break;
//     default:
//         console.log("Nenhuma das opções válidas(santos)")
// }

// // Ternario

// let valor=100;
// let resultado = valor ==100 ? "Valor Certo": "Valor errado";
// console.log(resultado);

// let media = 5;
// let resultado = media >= 6 ? "Aprovado": "Reprovado";
// console.log(resultado);


// // ESTRUTURA DE REPETIÇÃO


// for(let i = 0; i<=10;i++){
//     console.log("O valor de i é", i)
// }

// // while
// let f = 0;

// while(f < 10){
//     console.log("O valor de f é", f)
//     f++;
// }

// // do while

// let w = 0;

// do{
//     console.log("do while", w)
//     w++
// }while(w <= 20)

// JOGO DE ADVINHAÇÃO

// declarando uma variavel indefinida

// let palpite;

// const sorteio = Math.floor(Math.random() * 10)+1;

// do{
//     palpite = parseInt(prompt("Escolha um número entre 1 e 10"))
// }while(palpite !== sorteio)
//     alert(`Parabéns Você Ganhou o jogo ${palpite}`)

// funções

// function saudacao(){
//     console.log(`Seja Bem-Vindo ${nome}`)
//     console.log("Seja bem-Vindo", nome)
// }
// saudacao("Fiap")