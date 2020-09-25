function carregaConteudo(){
    let rotas = {'/':'index2.html','/b':'primo.html','/vogais':'vogais.html'}
    let inicial = window.location.pathname
    fetch (rotas[inicial])
    .then (function (resposta){
        return resposta.text()
    })
    .then (function (texto){
        document.getElementById('conteudo').innerHTML=texto
    })

}
window.addEventListener ('load',carregaConteudo)

    function transicao (a,url){
        a.preventDefault()
        window.history.pushState ('','',url)
        carregaConteudo ()
    }