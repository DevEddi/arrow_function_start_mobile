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
        return Math.sqrt(numero)
    }
}


let qualquerQualquer = [2,4,6,8,10]

for(i = 0; i<qualquerQualquer.length; i++){
    console.log(objetoQualquer.arrowQualquer(qualquerQualquer[i]))
}