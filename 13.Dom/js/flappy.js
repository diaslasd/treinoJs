function novoElemento(tagName, className){
    const elemento = document.createElement(tagName)
    elemento.className = className
    return elemento
}

class Barreira {
    constructor(reversa = false) {
        this.elemento = novoElemento('div', 'barreira');
        const borda = novoElemento('div', 'borda');
        const corpo = novoElemento('div', 'corpo');
        this.elemento.appendChild(reversa ? corpo : borda);
        this.elemento.appendChild(reversa ? borda : corpo);
        this.setAltura = altura => corpo.style.height = `${altura}px`;
    }
}

/* const barreira = new Barreira(true)
barreira.setAltura = 200
document.querySelector('[wm-flappy]').appendChild(barreira.elemento) */
class ParDeBarreiras {
    constructor(altura, abertura, x) {
        this.elemento = novoElemento('div', 'par-de-barreiras');
        this.superior = new Barreira(true);
        this.inferior = new Barreira(false);
        this.elemento.appendChild(this.superior.elemento);
        this.elemento.appendChild(this.inferior.elemento);
        this.sortearAbertura = () => {
            const alturaSuperior = Math.random() * (altura - abertura);
            const alturaInferior = altura - abertura - alturaSuperior;
            this.superior.setAltura(alturaSuperior);
            this.inferior.setAltura(alturaInferior);
            //console.log(alturaInferior,alturaSuperior)
        };
        this.getX = () => parseInt(this.elemento.style.left.split('px')[0]);
        this.setX = x => this.elemento.style.left = `${x}px`;
        this.getLargura = () => this.elemento.clientWidth;
        this.sortearAbertura();
        this.setX(x);
    }
}

/* const barreira = new ParDeBarreiras(700, 300, 500)
document.querySelector('[wm-flappy]').appendChild(barreira.elemento) */
class Barreiras {
    constructor(altura, largura, abertura, espaco, notificarPonto) {
        const deslocamento = 3;
        this.pares = [];
        for (let i = 0; i < deslocamento + 1; i++)
            this.pares[i] = new ParDeBarreiras(altura, abertura, largura + espaco * i);
        /* this.pares = [
            new ParDeBarreiras(altura, abertura, largura + espaco * 0 ),
            new ParDeBarreiras(altura, abertura, largura + espaco * 1 ),
            new ParDeBarreiras(altura, abertura, largura + espaco * 2 ),
            new ParDeBarreiras(altura, abertura, largura + espaco * 3 ),
        ] */
        this.animar = () => {
            this.pares.forEach(par => {
                par.setX(par.getX() - deslocamento);
                // quando o lemento sar da área do jogo
                if (par.getX() < -par.getLargura()) {
                    par.setX(par.getX() + espaco * (deslocamento + 1));
                    par.sortearAbertura();
                }
                const meio = largura / 2;
                const cruzouOMeio = par.getX() + deslocamento >= meio
                    && par.getX() < meio;
                if (cruzouOMeio)
                    notificarPonto();
            });
        };
    }
}

class Progresso {
    constructor() {
        this.elemento = novoElemento('div', 'progresso');
        this.atualizarPontos = pontos => this.elemento.innerHTML = pontos;
        this.atualizarPontos(0);
    }
}

// function notificarPonto() {
//     const progresso = document.querySelector('[wm-flappy] .progresso')
//     valor = parseInt(progresso.innerText) + 1
//     progresso.innerText = valor    
// }
class Passaro {
    constructor(alturaJogo) {
        let voando = false;
        this.elemento = novoElemento('img', 'passaro');
        this.elemento.src = 'imgs/passaro.png';
        this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]);
        this.setY = y => this.elemento.style.bottom = `${y}px`;
        window.onkeydown = e => voando = true;
        window.onkeyup = e => voando = false;
        this.animar = () => {
            const novoY = this.getY() + (voando ? 8 : -3);
            const alturaMaxima = alturaJogo - this.elemento.clientWidth;
            if (novoY <= 0) {
                this.setY(0);
            }
            else if (novoY >= alturaMaxima) {
                this.setY(alturaMaxima);
            }
            else {
                this.setY(novoY);
            }
        };
        this.setY(alturaJogo / 2);
    }
}

// const barreiras = new Barreiras(700, 1200, 300, 400)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')

// barreiras.pares.forEach( par => areaDoJogo.appendChild(par.elemento) )
// areaDoJogo.appendChild(passaro.elemento)

// setInterval(() => {
//     barreiras.animar()
//     passaro.animar()
// }, 20)

function estaoSobrepostos( elementoA, elementoB ){
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    let faixa = 10

    const horizontal = a.left + a.width >= b.left + faixa
        && b.left + b.width >= a.left + faixa
    const verical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    return horizontal && verical    
}

function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach( par => {
        if (!colidiu) {
            const superior = par.superior.elemento
            const inferior = par.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento, superior)
                || estaoSobrepostos(passaro.elemento, inferior)
        }
    })
    return colidiu
}

class FlappyBird {
    constructor() {
        let pontos = 0;
        const areaDoJogo = document.querySelector('[wm-flappy]');
        const altura = areaDoJogo.clientHeight;
        const largura = areaDoJogo.clientWidth;
        const progresso = new Progresso();
        const barreiras = new Barreiras(altura, largura, 200, 400, () => progresso.atualizarPontos(++pontos));
        const passaro = new Passaro(altura);
        barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento));
        areaDoJogo.appendChild(progresso.elemento);
        areaDoJogo.appendChild(passaro.elemento);
        this.start = () => {
            // loop do jogo
            const temporizador = setInterval(() => {
                barreiras.animar();
                passaro.animar();
                if (colidiu(passaro, barreiras)) clearInterval(temporizador)
            }, 30);
        };
    }
}


new FlappyBird().start()