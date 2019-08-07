/*
    Uma função que recebe dois argumentos resolve e reject. 
Esta função é executada imediatamente pela implementação do Promise, 
passando as funções resolve e reject.
    As funções resolve e reject, quando chamadas, resolvem (em caso de sucesso) 
ou rejeitam (quando ocorre um erro) a promessa, respectivamente.
*/

function falarDepoisDe( segundos, frase ) {
    return new Promise((resolve, reject) => {
        if ( isNaN(segundos) ) {
           reject('Tempo inválido') 
        } else {
            setTimeout(() => {
                resolve(frase)
            }, segundos * 1000)
        }
    } )
}

falarDepoisDe('1x5', 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch( erro => console.log('Erro:', erro))