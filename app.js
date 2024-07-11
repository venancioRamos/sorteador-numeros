function sortear () {
    let qnt = parseInt(document.getElementById('quantidade').value)
    let começo = parseInt(padocument.getElementById('de').value)
    let fim = parseInt(document.getElementById('ate').value)
    

    let sorteados = []
    let numero;
    for (let i = 0; i < qnt;i++){
        numero = obterNumeroAleatorio(começo,fim)
        sorteados.push(numero)
    }
    alert(sorteados)

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
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')


    }

}
function reiniciar () {
    document.getElementById('quantidade').value =''
    document.getElementById('de').value =''
    document.getElementById('ate').value=''
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alerarStatusbotao()
}
