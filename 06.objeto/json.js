// trabalhando com json - Java Script Object Notacion

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))


// console.log(JSON.parse("{a:1,b:2,c:3}"))
// console.log(JSON.parse("{'a':1,'b':2,'c':3}"))
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
console.log(JSON.parse( '{ "a" : 1, "b" : "string", "c" : true, "d" : {"a":1,"b":2,"c":3}, "e" : [1,2,3,"a"], "f" : 4.1 }' ))