// Arrow function

let a = 5;
let b = 10;

let c = (a, b) => a + b;

console.log(c(a,b));

let d = (x,y) =>{
    let op;
    if(x => 5){
        op = x *y;

    }else {
        op = x /y;
    }

    return op;
}

console.log(d(a, b));

// um argumento

let frase = "O eddi está com fomw"

let fraseArray = (frase) => frase.split(' ');

console.log(fraseArray(frase));


// sem argumneto

let semArg = () => console.log("Não tenho argumento")
semArg();