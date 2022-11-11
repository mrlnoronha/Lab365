
function perguntaidade(){
    let nome,idade;
    nome = prompt("digite a:");
    idade = prompt("digite a idade:");
    alert("oi "+nome+"você tem "+idade+" anos");
}
function tela(){
    let tela1;
    tela1 = window.prompt("terminar s/n");
    tela1 = window.alert("fim");   
}

let elemento_tela_html;
let contador = 0;
elemento_tela_html = document.getElementById("testeDOM");
while(contador<=1000){
    elemento_tela_html.innerHTML = contador;
    contador++;
    console.log(contador+"....número")
}


