// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;


function inverterString(nome) {
    let nomeInvertido = '';
    for (let i = nome.length - 1; i >= 0; i--) {
        nomeInvertido += nome[i];
    }
    console.log(nomeInvertido);
}

const nome = 'Jose Vinicius';
inverterString(nome);
