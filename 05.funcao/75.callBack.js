function sleep(milliseconds) {
var start = new Date().getTime();
for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  } // copiado da internet função sleep
    
    function contaNumero(callback) {
    let i
    for (i = 0; i < 10; i++) {
        console.log(i)
        sleep(1000)
    }
    callback(i) // chama a segunda funcao
}

// FIXME Estudar Async/Await
// TODO configurar todo tree

function esperaNumero(i) {
    console.log(`${i} é o último!`)    
}

contaNumero(esperaNumero) // passa como parametro a segunda funcao

// Exemplo 2
//Função base
function getUsuario(idUsuario, callback){
	callback("Jayr Alencar"); //Passamos a função callback por parâmetro e executamos ela dentro da outra função
}
 
//Usando
getUsuario(1, function(resultado){
	alert(resultado);
});
