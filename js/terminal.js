var textoComandos = document.getElementById('texto-comandos')
const comando = document.getElementById('comando')
const tempo = new Date()
var dia = tempo.getDate()
var mes = tempo.getMonth()
var ano = tempo.getFullYear()
var hora = tempo.getHours()
var minuto = tempo.getMinutes()

document.addEventListener('keydown', recebeTecla)

function recebeTecla() {
	var tecla = event.keyCode
	if (tecla == '13') {
		mostraComandos()
	}
}

function mostraComandos() {
	if (comando.value === 'dir') {
		if (hora < 10) {hora = '0' + hora}
		if (minuto < 10) {minuto = '0' + minuto}
		if (dia < 10) {dia = '0' + dia}
		if (mes < 10) {mes = '0' + mes}
		textoComandos.innerHTML = `${dia}/${mes}/${ano} - ${hora}:${minuto} -> dir - Fake Documents <br>
                                   ${dia}/${mes}/${ano} - ${hora}:${minuto} -> dir - Fake Pictures <br>
                                   ${dia}/${mes}/${ano} - ${hora}:${minuto} -> dir - Fake Desktop <br>
                                   ${dia}/${mes}/${ano} - ${hora}:${minuto} -> dir - Fake Downloads <br>
                                   ${dia}/${mes}/${ano} - ${hora}:${minuto} -> dir - Fake Music <br>
                                   ${dia}/${mes}/${ano} - ${hora}:${minuto} -> dir - Fake Games <br>
                                   ${dia}/${mes}/${ano} - ${hora}:${minuto} -> dir - Fake Contacts <br>
                                   ${dia}/${mes}/${ano} - ${hora}:${minuto} -> dir - Fake Videos <br>
                                   ${dia}/${mes}/${ano} - ${hora}:${minuto} -> dir - Fake Codes <br>`
	} else if (comando.value === 'clear') {
		textoComandos.innerHTML = ''
	} else if (comando.value === 'time') {
        textoComandos.innerHTML = tempo
	} else if(comando.value === 'exit'){
        fechaJanela2()
	} else if(comando.value === 'temas'){
        iniciaTemas()
	}else if(comando.value === 'calculadora'){
		window.open("calculadora.html")
	}else{
		textoComandos.innerHTML = 'Comando não encontrado'
	}
}