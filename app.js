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