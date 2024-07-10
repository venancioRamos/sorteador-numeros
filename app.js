function sortear () {
    let qnt = parseInt(document.getElementById('quantidade').value)
    let começo = parseInt(document.getElementById('de').value)
    let fim = parseInt(document.getElementById('ate').value)
    
    let resultado = document.getElementById('resultado')
    let sorteados = []
    let numero;
    for (let i = 0; i < qnt;i++){
        numero = obterNumeroAleatorio(começo,fim)
        sorteados.push(numero)
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`

    }
alerarStatusbotao()
    

}

function obterNumeroAleatorio (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alerarStatusbotao () {
    let botao = document.getElementById('btn-reiniciar')
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
    }
    else {
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')


    }

}