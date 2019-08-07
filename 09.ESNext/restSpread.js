// Operador ... 
// rest (juntar)
// spread (espalhar)

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12249.99 }
const clone = { ativo: true, ...funcionario}
console.log(clone)

// usar spred com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)