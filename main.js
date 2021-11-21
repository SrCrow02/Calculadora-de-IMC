const calcular = document.getElementById('calcular')

function imc() {
	const nome = document.getElementById('nome').value;
	const altura = document.getElementById('altura').value;
	const peso = document.getElementById('peso').value;
	const resultado = document.getElementById('resultado');imc

	if(nome != '' && altura != '' && peso != ''){

	let calc_imc = (peso / (altura * altura)).toFixed(1)

	let classificacao = ''

	if(calc_imc < 18.5) {
		classificacao = 'abaixo do peso!'
	} else if(calc_imc < 25) {
		classificacao = 'com o peso ideal!'
	} else if(calc_imc < 30) {
		classificacao = 'levemente acima do peso!'
	} else if(calc_imc < 35) {
		classificacao = 'com obesidade de grau 1'
	} else if(calc_imc < 40) {
		classificacao = 'Com abesidade grau 2'
	} else if(calc_imc < 45) {
		classificacao = 'com obesidade grau 3!!!'
	}

	resultado.textContent = `${nome}, seu imc é de ${calc_imc} e você está ${classificacao}`;

	} else {
		resultado.textContent = 'Preencha todos os campos!'
	}
}

calcular.addEventListener('click', imc);
