const btnGiraDado1 = document.getElementById('btn-gira-dado1')
const btnGiraDado2 = document.getElementById('btn-gira-dado2')
const btnReinicia = document.getElementById('btn-reinicia')
const btnReinicia2 = document.getElementById('btn-reinicia2')
const imgDadoPlayer1 = document.getElementById('img-dado1')
const imgDadoPlayer2 = document.getElementById('img-dado2')
const animaDado = document.getElementById('anima-dados')
const imgVencedor = document.getElementById('img-vencedor')
const telaFinal = document.getElementById('tela-final')
var mostraVencedor = document.getElementById('vencedor')
var vencedor = 0
var movimento1 = 0
var movimento2 = 0
var corredor1 = document.getElementById('corredor1')
var corredor2 = document.getElementById('corredor2')
var intervalAnima
var intervalAnima2 
var rodada = 1
var i = 0

const indicador = document.getElementById('indicador')

var dado1 = Array() 
    dado1[0] = 'img/dado11.png'
    dado1[1] = 'img/dado12.png'
    dado1[2] = 'img/dado13.png'
    dado1[3] = 'img/dado14.png'
    dado1[4] = 'img/dado15.png'
    dado1[5] = 'img/dado16.png'

var dado2 = Array() 
    dado2[0] = 'img/dado21.png'
    dado2[1] = 'img/dado22.png'
    dado2[2] = 'img/dado23.png'
    dado2[3] = 'img/dado24.png'
    dado2[4] = 'img/dado25.png'
    dado2[5] = 'img/dado26.png'

btnGiraDado1.addEventListener('click',giraDado1)

btnGiraDado2.addEventListener('click',giraDado2)
btnGiraDado1.style.backgroundColor = '#FFBC0B'

btnReinicia.addEventListener('click', reinicia)
btnReinicia2.addEventListener('click', reinicia)

function giraDado1(){ 
    if(rodada === 1){
        intervalAnima = setInterval(animaDados1, 200)
        animaDados1()
        rodada = 2
        btnGiraDado2.style.backgroundColor = '#FFBC0B'
        btnGiraDado1.style.backgroundColor = 'lightgray'

    }  
}

function giraDado2(){
    if(rodada === 2) {
        intervalAnima2 = setInterval(animaDados2, 200)
        animaDados2()  
        rodada = 1  
        btnGiraDado1.style.backgroundColor = '#FFBC0B'
        btnGiraDado2.style.backgroundColor = 'lightgray'
    }   
}

function animaDados1() {  
    imgDadoPlayer1.innerHTML = '<img src=./' + dado1[i] + '>'
    i++
    if(i === 6) {
        clearInterval(intervalAnima)
        i = 0
        let numAleatorio1 = Math.trunc(Math.random() * 6)
        imgDadoPlayer1.innerHTML = '<img src=./' + dado1[numAleatorio1] + '>'
        movimento1 = movimento1 + (numAleatorio1 * 3)
        if(numAleatorio1 === 0) {movimento1++}
        corredor1.style.left = movimento1 + '%'
        console.log(movimento1)
        if(movimento1 >= 86) {
            vencedor = '1'
          finaliza()
        }
    }     
}

function animaDados2() {  
    imgDadoPlayer2.innerHTML = '<img src=./' + dado2[i] + '>'
    i++
    if(i === 6) {
        clearInterval(intervalAnima2)
        i = 0
        let numAleatorio2 = Math.trunc(Math.random() * 6)
        imgDadoPlayer2.innerHTML = '<img src=./' + dado2[numAleatorio2] + '>'
        movimento2 = movimento2 + (numAleatorio2 * 3)
        if(numAleatorio2 === 0) {movimento2++}
        corredor2.style.left = movimento2 + '%'
        console.log(movimento2)
        if(movimento2 >=88) {
            vencedor = '2'
          finaliza()
        }
    }
}

function finaliza() {
    telaFinal.style.display = 'block'
    mostraVencedor.innerHTML = ' ' + vencedor
    corredor1.style.left = 0
    corredor2.style.left = 0
}

function reinicia() {
    telaFinal.style.display = 'none'
    movimento2 = 0
    movimento1 = 0
    corredor1.style.left = 0
    corredor2.style.left = 0
}
