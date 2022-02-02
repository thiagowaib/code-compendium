const int = 1;
const str = "1";

console.log("Hello world!");

console.log(str);
console.log(int);
console.log(`Esse é o valor inteiro: ${int}`);

// int+1;

if(int == 1)
{
    console.log("1=1");
}
else
{
    console.log(`${int}!=1`);
}
// While
// Do While
// For Loop


// FUNÇÕES
function normal()
{
    // Faz Algo
    // Aqui dentro
}

const arrowFunction = () => {
    // Faz Algo
    // Aqui Dentro
}

//setTimeout(X , Y); //Timer
//setInterval(X, Y); //Loop



// MAP
let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Tamanho do vetor: "+vetor.length);

console.log("Par ou Impar:")
vetor.map((numero)=>{
    if(numero%2==0)
        console.log("Par");
    else
        console.log("Impar");
})

vetor.map((numero)=>{console.log(numero*numero)})


// FILTER
console.log("Numeros <= 5");
let vetorFiltrado = vetor.filter((numero)=>{
    if(numero<=5)
        return numero
});
console.log(vetorFiltrado);


// Referências de Javascript:
// W3Schools -> https://www.w3schools.com/jsref/
// MDN -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript