"use strict";
// function aceitaNumerico (a: number, b: number)
//     {
//         console.log( a + b)
//     }
//     aceitaNumerico(2,3)
//----STRING
// const firstName: string = "Thiago"
// console.log(firstName.toUpperCase())
// let fullName: string
// const lastName: string = "Silva"
// fullName = firstName + " " + lastName
// console.log(fullName)
// console.log(typeof fullName)
//-----BOOLEANO
// let a: boolean = false
// console.log(a)
// console.log(typeof a)
// a = true 
// console.log(a)
//----INFERENCE E ANNOTATION
// let ann: string = "teste"
// let inf = 2 
// DESAFIO
// CRIAR UMA VARIÁVEL QUE RECEBE UM NÚMERO
//let recebeNumero: number = 5
//CONVERTER ESSE NÚMERO PARA STRING EM UMA NOVA VARIÁVEL
//let numeroString = recebeNumero.toString()
//COLOCAR ESTE NÚMERO EM UMA STRING MAIOR UTILIZANDO TEMPLATE OU CONCATENAÇÃO
//const printMyNumber: string = `O número é ${numeroString}`
//IMPRIMIR O NÚMERO
//console.log(printMyNumber)
//-----ARRAYS
// const numbers: number [] = [1, 2, 3, 4, 5, 6, 7, 8]
// numbers.push(9)
// console.log(numbers)
// const names: string [] = ["Thiago", "Camila"]
// names.push("Noah")
// console.log(names)
//-----ARRAY COM OUTRA SINTAXE
// const numeros: number [] = [10, 230, 4084, 48]
// console.log(numeros)
// const nums: Array<number> = [1,2,3,4,5]
// console.log(nums)
// const numerosArray: Array<number> = [1,2,3,4,5]
// const numerosArray2: number [] = [1,2,3,4,5]
// const nomeArray: string [] = ["Luan, Camila, Carol, Noah"]  
// console.log(nomeArray)
// const nomeArray2: Array<String> = ["Paulo", "John", "Matheus","Camila"]
// console.log(nomeArray2)
// //-----RETORNO DA FUNÇÃO
// function retornarNome(name: string){
//     return name
// }
// console.log(retornarNome("Thiago"))
//-- FUNÇÃO ANÔNIMA
// let show = function (){
//     console.log('Função anônima')
// }
// show()
//-----FUNÇÃO ANÔNIMA COMO ARGUMENTO DE OUTRA FUNÇÃO COM TIMEOUT------------
// setTimeout(function () {
//     console.log('Executar depois de 1 segundo')
// }, 1000)
//------FUNÇÃO ANÔNIMA COM EXECUÇÃO INSTATÂNEA------------
// (function(){
//     console.log('EXECUTAR')
// })()
//------FUNÇÃO ANÔNIMA COM ARROW FUNCTION ------------
// let show = function (){
//     console.log('Função anônima')
// }
// show()
// let mostrar = () => console.log('Função anônima')
// mostrar()
//-----TIPOS DE OBJETOS
function passCordinates(coord) {
    console.log("x coordinates:" + coord.x);
    console.log("y coordinates:" + coord.y);
}
const objCoord = { x: 398, y: 65.8 };
passCordinates(objCoord);
//----PROPRIEDADES OPCIONAIS
function showNumbers(a, b, c) {
    console.log("A:" + a);
    console.log("B:" + b);
    console.log("C:" + c);
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// VALIDANDO ARGUMENTO OPCIONAL
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Thiago"));
// UNION TYPE
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
showBalance(true);
// AVANÇANDO EM UNION TYPES
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função dó usuário é: ${role}`;
}
console.log(showUserRole(false));
function showId(id) {
    console.log(`O ID É: ${id}`);
}
showId("123");
showId(1);
showId(2);
function showUser(user) {
    console.log(`O nome é: ${user.name}`);
    console.log(`A idade é: ${user.age}`);
}
showUser({ name: "Thiago", age: 25 });
