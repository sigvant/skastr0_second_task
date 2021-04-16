// - Crie uma aplicação de linha de comando para detectar tipos. Receba um input pela linha de comando e mostre na tela o tipo do input.
// 	- Dica: por padrão, todos os valores de entrada serão strings. Converta o valor corretamente e mostre o tipo que o usuário espera.
// 	- Output esperado:
// 		- Input: 1
// 		- Output: number, integer
// 		- Input: 1.52
// 		- Output: number, float
// 		- Input: test
// 		- Output: string
// 		- Input: true
// 		- Output: boolean
// 		- Input: 
// 		- Output: erro, input vazio!
// - (desafio): Adicione a capacidade de validar múltiplos valores em um único input de uma vez só ao programa
// 	- Output esperado:
// 		- Input: test test 1 12 5.67
// 		- Output: string string number, integer number, integer number, float

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

let verified = true;

readline.question("Type freely: \n", input => {

	array = input.split(' ');
	console.log(array);

	for (let i = 0; i < array.length; i++){
		verifyEmpty(array[i], i);
		if(verified) {
		analyseInput(array[i], i);
		}
		verified = true;
	} 

	console.log('all inputs verified. crack open a cold one')
	readline.close();
})

let verifyEmpty = (input, i) => {


	if(input === '') {
		verified = false;
		return console.log(`error, input ${i + 1} is empty, failed verification`);
	} 

	return console.log(`input ${i + 1} verified:`);	
}

let analyseInput = (input, i) => {

	error = false;
	if(input === 'true' || input === 'false') {
		return console.log(`boolean`)
	}

	if((typeof (parseFloat(input)) == 'number') && !(isNaN(input))) {
			input = input.replace(',', '');
			
			if(parseFloat(input)%1 == 0) {
				return console.log(`number, integer`);
			} else { 
				return console.log(`number, float`);
			}
	} 
	if(isNaN(input)) {
		return console.log(`string`);
	}
}