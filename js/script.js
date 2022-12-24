
let hoje = document.getElementById('hoje')
let horaCompleta = document.getElementById('horaCompleta')
let dataHoraCompleta = document.getElementById('dataHoraCompleta')
let menu = document.getElementById('menu')
let diaSemana = document.getElementById('diaSemana')
let diaGG = document.getElementById('diaGG')
let anoCompleto = document.getElementById('ano')
let nomeMes = document.getElementById('nomeMes')

function ajustaTamanhoTela() {
  let alturaTela = window.innerHeight
  let divMain = document.getElementById('main')
  divMain.style.height = (alturaTela - 40) + 'px'
  menu.style.top = (alturaTela - 330) + 'px'
  dataHoraCompleta.style.top = (alturaTela - 238) + 'px'
}

ajustaTamanhoTela()

function startMenu() {
  if (menu.style.display === 'none') {
      menu.style.display = 'block' 
    } else {
      menu.style.display = 'none'
  }
}

function mostraHora() {
  const intervalo = setInterval(() => {
  const agora = new Date()
  let hora = agora.getHours()
  let minuto = agora.getMinutes()
  let segundos = agora.getSeconds()
  let dia = agora.getDate()
  let mes = agora.getMonth() + 1
  let ano = agora.getFullYear()
  let nomeDia = agora.getDay()
  console.log(mes)
  switch (nomeDia) {
    case 0:
      diaSemana.innerHTML = 'Domingo'
      break
    case 1:
      diaSemana.innerHTML = 'Segunda-feira'
      break
    case 2:
      diaSemana.innerHTML = 'Terça-feira'
      break
    case 3:
      diaSemana.innerHTML = 'Quarta-feira'
      break
    case 4:
      diaSemana.innerHTML = 'Quinta-feira'
      break
    case 5:
      diaSemana.innerHTML = 'Sexta-feira'
      break
    case 6:
      diaSemana.innerHTML = 'Sábado'
      break
    }

    switch (mes) {
    case 1:
      nomeMes.innerHTML = 'janeiro'
      break
    case 2:
      nomeMes.innerHTML = 'fevereiro'
      break
    case 3:
      nomeMes.innerHTML = 'março'
      break
    case 4:
      nomeMes.innerHTML = 'abril'
      break
    case 5:
      nomeMes.innerHTML = 'maio'
      break
    case 6:
      nomeMes.innerHTML = 'junho'
      break
    case 7:
      nomeMes.innerHTML = 'julho'
      break
    case 8:
      nomeMes.innerHTML = 'agosto'
      break
    case 9:
      nomeMes.innerHTML = 'setembro'
      break
    case 10:
      nomeMes.innerHTML = 'outubro'
      break
    case 11:
      nomeMes.innerHTML = 'novembro'
      break
    case 12:
      nomeMes.innerHTML = 'dezembro'
      break
    }
  diaGG.innerHTML = dia
  anoCompleto.innerHTML = ano
  let relogio = document.getElementById('hora')
  if (hora < 10) {hora = '0' + hora}
  if (minuto < 10) {minuto = '0' + minuto}
  if (dia < 10) {dia = '0' + dia}
  if (mes < 10) {mes = '0' + mes} 
  relogio.innerHTML = hora + ':' + minuto + '  '
  hoje.innerHTML = dia + '/' + mes + '/' + ano
  horaCompleta.innerHTML = `${hora}:${minuto}:${segundos}`
  }, 1000)
}

mostraHora()

hoje.addEventListener('click', () => {
  if(dataHoraCompleta.style.display === 'none') {
    dataHoraCompleta.style.display = 'flex'
  } else {
    dataHoraCompleta.style.display = 'none'
  }
})

function iniciaTemas() {
  let janela = document.getElementById('janela')
  janela.style.display = 'block'
}

function mostraJanela2() {
  let janela2 = document.getElementById('janela2')
  janela2.style.display = 'block' 
}

function aplicaTema() {
  let botoesRadio = document.getElementsByName('temas')

  for (let i = 0; i < botoesRadio.length; i++) {
    if (botoesRadio[i].checked) {
      if (botoesRadio[i].value === 'tema1') {
        document.getElementById('toolbar').style.backgroundColor = '#252525'
        document.getElementById('toolbar').style.color = '#CACACA'
        document.getElementById('btn-start').style.backgroundColor = '#525353'
        document.getElementById('btn-start').style.color = '#E3E3E3'
        document.getElementById('main').style.backgroundImage = 'linear-gradient(#000, #1A1A1A)'
        document.getElementById('main').style.color = '#fff'
        document.getElementById('topo-janela').style.backgroundColor = '#252525'
        document.getElementById('btn-fechar').style.backgroundColor = '#525353'
        menu.style.backgroundColor = '#525353'
      }
      if (botoesRadio[i].value === 'tema2') {
        document.getElementById('toolbar').style.backgroundColor = '#8B3B77'
        document.getElementById('btn-start').style.backgroundColor = '#330227'
        document.getElementById('main').style.backgroundImage = 'linear-gradient(#F98BFF, #FBB0FF)'
        document.getElementById('main').style.color = '#fff'
        document.getElementById('topo-janela').style.backgroundColor = '#8B3B77'
        document.getElementById('btn-fechar').style.backgroundColor = '#330227'
        menu.style.backgroundColor = '#330227'
      }
      if (botoesRadio[i].value === 'tema3') {
        document.getElementById('toolbar').style.backgroundColor = '#878447'
        document.getElementById('toolbar').style.color = '#3B2C0D'
        document.getElementById('btn-start').style.backgroundColor = '#E6AB35'
        document.getElementById('btn-start').style.color = '#3B2C0D'
        document.getElementById('main').style.backgroundImage = 'linear-gradient(#E4ED93, #BFC77A)'
        document.getElementById('main').style.color = '#3B2C0D'
        document.getElementById('topo-janela').style.backgroundColor = '#878447'
        document.getElementById('btn-fechar').style.backgroundColor = '#E6AB35'
        menu.style.backgroundColor = '#E6AB35'
      }
    }
  }
}

function fechaJanela() {
  let janela = document.getElementById('janela') 
  janela.style.display = 'none'
}

function fechaJanela2() {
  let janela = document.getElementById('janela2') 
  janela.style.display = 'none'
}