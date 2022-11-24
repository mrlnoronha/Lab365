/*funcao quando clica no teclado
 */
const expresao = []; 
function geral(argumento){
   
function clickteclado(argumento){
    console.log('dentro da funcao clicteclado ',expresao);
    console.log('mostrar matriz dentro clickteclado ',expresao);

    return argumento;     
}

document.getElementById("clicktecladotelaexemplo").innerHTML = argumento;
console.log('numero cliclado ',argumento);
console.log('mostrar matriz dentro geral ',expresao);
expresao.push(argumento);
clickteclado(argumento); 

};




