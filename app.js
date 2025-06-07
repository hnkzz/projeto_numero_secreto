let attempts = 0;
let guess;
let nome = 'Lua'

alert('Seja bem-vindo ao Jogo do Número Secreto');

let max = parseInt(prompt('Qual vai ser o seu número máximo?'));
let correctNumber = parseInt(Math.random() * max + 1);

while (guess != correctNumber) {
    console.log(correctNumber);
    attempts++;

    guess = parseInt(prompt('Insira um número de 1 a ' + max), 10);

    if (guess == correctNumber) {
        alert(`Acertou em ${attempts} ${attempts == 1 ? 'tentativa' : 'tentativas'}!`);
    } else {
        alert(`O número secreto é ${guess > correctNumber ? 'menor' : 'maior'} que ${guess}.`);
    }
}
