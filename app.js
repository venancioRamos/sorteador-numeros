function sortear () {
    let qnt = parseInt(document.getElementById('quantidade').value)
    let começo = parseInt(padocument.getElementById('de').value)
    let fim = parseInt(document.getElementById('ate').value)
    

    let sorteados = []
    let numero;
    if (qnt > (fim - começo + 1)){
        alert('a quantidade de números sorteados não pode ser maior que o intervalor, favor coloque um intervalo válido')}
    if (começo> fim){
        alert('o inicio não pode ser maior que o fim,')
        }
    for (let i = 1; i < qnt;i++){
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