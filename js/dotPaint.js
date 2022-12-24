const grade = document.querySelector('#grade')
const cor = document.querySelector('#cor')
const btnLimpa = document.querySelector('#btnLimpa')
const corFundo = document.querySelector('#corFundo')
const cliqueMouse = document.querySelector('#cliqueMouse')
const formas = document.querySelector('#formas')
function criaGrade() {
	for (var i = 0; i < 380; i++) {
		grade.innerHTML += `<div class="caixa quadro${i + 1}"></div>`
	}
}
criaGrade()

const caixas = document.querySelectorAll('.caixa')

btnLimpa.addEventListener('click', () => {
	caixas.forEach(preenche)
	function preenche(item, index) {
	  caixas[index].style.backgroundColor = '#fff'
	}
})

grade.addEventListener('click', function(e) {
	if (e.target.classList.contains('caixa')) {
	  e.target.style.backgroundColor = cor.value
	}
})

grade.addEventListener('dblclick', function(e) {
	if (e.target.classList.contains('caixa')) {
	  e.target.style.backgroundColor = '#fff'
	}
})

function preencheFundo() {
	grade.style.backgroundColor = corFundo.value
	caixas.forEach(preenche)
	function preenche(item, index) {
	  caixas[index].style.backgroundColor = corFundo.value
	}
}

function preenche() {
	caixas.forEach(preenche)
	function preenche(item, index) {
	  caixas[index].style.backgroundColor = preencher.value
	}
}

function mudaForma() {
	let raio
	switch(formas.value) {
	case 'quadrado':
      raio = 0
      break
    case 'oval':
      raio = 5
      break
    case 'redondo':
      raio = 8
	}
	caixas.forEach(mudaForma)
	function mudaForma(item, index) {
	  caixas[index].style.borderRadius = raio + 'px'
	}
}

