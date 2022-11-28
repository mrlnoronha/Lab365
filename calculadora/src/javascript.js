/*funcao quando clica no teclado
 */
const expresao = []; 
function geral(argumento){
      
    function clickteclado(argumento){
        console.log('dentro da funcao clicteclado ',expresao);
        console.log('mostrar matriz dentro clickteclado ',expresao);
        return argumento;  
    }
    if(argumento=="apaga"){
        document.getElementById("clicktecladotelaexemplo").innerHTML = argumento;
          
        console.log('numero cliclado ',argumento);
        console.log('mostrar matriz dentro geral ',expresao);
        console.log(expresao);

        expresao.pop(argumento);
        clickteclado(argumento);

        let txt = "";
        expresao.forEach(myFunction);
        document.getElementById("demo").innerHTML = txt;

        function myFunction(value, index, array) {
            txt += value; 
        }
    }else{
        document.getElementById("clicktecladotelaexemplo").innerHTML = argumento;
        
        console.log('numero cliclado ',argumento);
        console.log('mostrar matriz dentro geral ',expresao);
        console.log(expresao);

        expresao.push(argumento);
        clickteclado(argumento);

        let txt = "";
        expresao.forEach(myFunction);
        document.getElementById("demo").innerHTML = txt;

        function myFunction(value, index, array) {
            txt += value; 
        }

    }

};




