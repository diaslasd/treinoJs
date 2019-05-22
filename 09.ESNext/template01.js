// tagged templates 
// processar o tamplate dentro de uma função

function tag(partes, ...valores) {
    console.log('Partes:\t\t', partes)
    console.log('Valores:\t', valores)
    return 'String:\t\t ' + `${valores[0]} está ${valores[1]}`
}

const aluno ='Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)