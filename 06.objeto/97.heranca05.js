console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// toda função tem prototype

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Co3r'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3].first())
console.log(['a', 'b', 'c'].first())