function calcular(tipo, valor) {
        var resultado = document.getElementById('resultado')
        if(tipo === 'acao') {
          if (valor === 'c') {
            //limpar o visor (id resultado)
          resultado.value = ''
          }

          if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            resultado.value += valor
          }

          if(valor === '=') {
            var valor_campo = eval(resultado.value)
            resultado.value = valor_campo
          }

        }else if(tipo === 'valor') {
          resultado.value += valor
        }
}

function mostraCalculadora() {
  document.getElementById('janela2').style.display = 'block'
}