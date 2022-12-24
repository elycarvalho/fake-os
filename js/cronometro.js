let segundo = 0
let decimos = 0
let minuto = 0
let segundosSaida = document.getElementById('segundos')
let decimosSaida = document.getElementById('decimos')
let minutosSaida = document.getElementById('minutos')
let btnIniciar = document.getElementById('btn-iniciar')
let btnStop = document.getElementById('btn-stop')
let btnReset = document.getElementById('btn-reset')
let btnVolta = document.getElementById('btn-volta')
let Interval
let voltas = document.getElementById('voltas')
let voltaSaida = ['00:00:00','00:00:00','00:00:00','00:00:00','00:00:00']

btnIniciar.addEventListener('click', () => {
	clearInterval(Interval)
	Interval = setInterval(startTime, 10)
})

btnStop.addEventListener('click', () => {
	clearInterval(Interval)
})

btnReset.addEventListener('click', () => {
	clearInterval(Interval)
	decimos = '00'
	segundo = '00'
	minuto = '00'
	segundosSaida.innerHTML = segundo
	decimosSaida.innerHTML = decimos
	minutosSaida.innerHTML = minuto
   voltaSaida = ['']
   voltaSaida.shift()
   voltas.innerHTML = voltaSaida
   console.log(Interval)
})


voltaSaida.shift()

btnVolta.addEventListener('click', () => {
  
	voltaSaida.unshift(`${minuto} : ${segundo} : ${decimos}`)

   voltas.innerHTML = voltaSaida[0] + '<br>' +
                      voltaSaida[1] + '<br>' +
                      voltaSaida[2] + '<br>' +
                      voltaSaida[3] + '<br>' +
                      voltaSaida[4] + '<br>'
   if(voltaSaida.length > 4) {
     voltaSaida.pop()
   }
})

function startTime(){
	decimos++
	if(decimos <= 9){
	  decimosSaida.innerHTML = '0' + decimos
    }

    if(decimos > 9){
       decimosSaida.innerHTML = decimos
    }

    if(decimos > 99){
    	segundo++
    	segundosSaida.innerHTML = '0' + segundo
    	decimos = 0
    	decimosSaida.innerHTML = '0' + decimos
    }

    if(segundo > 9){
    	segundosSaida.innerHTML = segundo
    }

    if(segundo > 59) {
    	minuto++
    	minutosSaida.innerHTML = '0' + minuto
    	segundo = '00'
    	segundosSaida.innerHTML = segundo
    }
}