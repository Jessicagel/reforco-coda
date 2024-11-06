// Crie uma função que retorne a quantidade de itens de um array

// function qtdItens(array){
//     return array.length;  
// }

// document.write(`<h1> O tamanho da palavra maça é ${qtdItens('maça')}</h1>`);

// function pares(array){
//     let par = []
//     par = array.filter((num)=> num % 2 == 0)
//     return par;
//     }
//     document.write(`<h1> Os pares são ${pares([4,5,6,8,9])}</h1>`);
    
    // Crie uma função que transforme frases de snake_case para camelCase

    // function camelCase(frase){
    //    frase = frase.split('_');
    //    return frase.map((palavra) => palavra [0].toUpperCase() + palavra.slice(1, palavra.length)).join('')
        
    // }

 function senhaForte(){
    document.write(camelcase('snake_case'));
    const Maiuscula = /[A-Z]/;
    const minuscula = /[a-z]/;
    const caracteres = /[!@#$%^&*(),.?":{}|<>]/;
    const numeros = /[0-9]/;
    const Comprimento = /.{8,}/;



// let senha = []
//  for(let i = 0; >= 8; i++)
// }

if (!Maiuscula.test(senha)) {
    return "A senha deve conter pelo menos uma letra maiúscula.";
}
if (!numeros.test(senha)) {
    return "A senha deve conter pelo menos um número.";
}
if (!caracteres.test(senha)){
    return "A senha deve conter pelo menos um caractere especial.";
}
if (!Comprimento.test(senha)) {
    return "A senha deve ter no mínimo 8 caracteres.";
}

// Se a senha passar em todos os critérios, é considerada forte
return "Senha forte!";
}

// document.write(`<h1> Os pares são ${pares([4,5,6,8,9])}</h1>`)