var numero ="";
var valor="";
var vetor = [];
function clica(valor){
    console.log("....dentro da funcao, clicado: ",valor);     
    document.getElementById("expressao").innerHTML = valor; 
    document.getElementById("vertorexpressao").innerHTML = vetor.push(valor); 
    console.log(numero,"....numero dentro da funcao");
    console.log(vetor,"....vetor dentro da funcao");
    console.log(valor,"....valor dentro da funcao");
}




