const btnPesquisa = document.getElementById('btn-pesquisa')
const btnSorte = document.getElementById('btn-sorte')
const mostraMensagem = document.getElementById('mostra-mensagem')
	  btnPesquisa.addEventListener('click', geraMensagem)
	  btnSorte.addEventListener('click', mensagemSorte)
	  document.addEventListener('keydown', recebeTecla)

function recebeTecla() {
	var tecla = event.keyCode
	if (tecla == '13') {
		geraMensagem()
	}
}	  

function geraMensagem() {
	let mensagens = Array()
	    mensagens[0] = 'Não sei! Não sou o google!'
	    mensagens[1] = 'Não entendi nada que você escreveu! Aprenda a escrever antes de pesquisar!'
	    mensagens[2] = 'Não achei nada! Dá próxima vez, tenta no Google de verdade!'
	    mensagens[3] = 'Não estou a fim de pesquisar hoje!'
	    mensagens[4] = 'Sua pesquisa está muito mal formulada! Tente novamente!'
	    mensagens[5] = 'Não achei nada! Alias, nem procurei!'

	let randomMessage = Math.trunc(Math.random() * 6)
	mostraMensagem.innerHTML = mensagens[randomMessage]
}

function mensagemSorte() {
	let mensagens = Array()
	    mensagens[0] = 'sinto muito! Hoje não é seu dia de sorte!'
	    mensagens[1] = 'Por que você clicou nesse botão? Ninguém usa esse botão!'
	    mensagens[2] = 'Que azar! Esse não é o google de verdade.'
	    mensagens[3] = 'Hoje você não vai encontrar nada aqui.'
	    mensagens[4] = 'Está perdendo seu tempo! Entre no Google de verdade.'

	let randomMessage = Math.trunc(Math.random() * 5)
	mostraMensagem.innerHTML = mensagens[randomMessage]
}