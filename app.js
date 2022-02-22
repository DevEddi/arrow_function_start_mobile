let qualquer = {
    numbers: [1,2,3,4,5]
}

const imprimi = () =>{
    for(let i = 0; i <qualquer.numbers.length; i++){
        console.log(qualquer.numbers[i])
    }
}

imprimi()
//console.log(qualquer.numbers[0])


/*Crie um objeto que contenha uma arrow function para calcular a raiz de 1 numero.
Fora do objeto devera ser criado um array conm 5 numeros e para cada numero, chamara funcao */

let objetoQualquer = {
    arrowQualquer: (numero) => {
        return numero / 2
    }
}
