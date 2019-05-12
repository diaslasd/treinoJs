// Lista arquivos (async, await, promise e Promise.all)

const fs = require('fs')
fs.readdir('./', (err, paths) => {
    console.log(paths)
})

// FIXME Explicação https://youtu.be/nnsz91rhWuA