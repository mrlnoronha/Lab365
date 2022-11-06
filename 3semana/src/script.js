let contador = 0;
let contador1;
let contador2;
let escrita1;
while(contador<=10){
    console.log("while..."+contador)
    contador++;
    contador1 = document.getElementById("contador1"); 
    contador1.innerHTML = contador; 
}
console.log("valor contador..."+contador);

do {
    console.log("do...while..."+contador);
    contador ++;
    contador2 = document.getElementById("contador2"); 
    contador2.innerHTML = contador; 
}
while (contador < 20);
console.log("valor contador..."+contador);

do {
    pergunta = window.prompt("Deseja continuar [s/n]")

} while(pergunta !== "n");

do {
    pergunta = window.prompt("Escreva qualquer coisa");
    escrita1 = document.getElementById("escrita1");
    escrita1.innerHTML = pergunta;
} while(pergunta !== "Qualquer coisa");




