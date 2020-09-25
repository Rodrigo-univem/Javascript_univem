function subtração() {

    let n1 = document.getElementById("numero1");
    let n2 = document.getElementById("numero2");

    var valor1 = Number(n1.value);
    var valor2 = Number(n2.value);

    let subtração = valor1 - valor2;

    alert("O valor da subtração é: " + subtração);
}

function multiplicação() {

    let n1 = document.getElementById("numero1");
    let n2 = document.getElementById("numero2");

    var valor1 = Number(n1.value);
    var valor2 = Number(n2.value);

    let multiplicação = valor1 * valor2;

    alert("O valor da multiplicação é: " + multiplicação);

}

function divisão() {

    let n1 = document.getElementById("numero1");
    let n2 = document.getElementById("numero2");

    var valor1 = Number(n1.value);
    var valor2 = Number(n2.value);

    let divisão = valor1 / valor2;

    alert("O valor da divisão é: " + divisão);

}

function somar() {

    let n1 = document.getElementById("numero1");
    let n2 = document.getElementById("numero2");

    var valor1 = Number(n1.value);
    var valor2 = Number(n2.value);

    let somar = valor1 + valor2;

    alert("O valor da soma é: " + somar);
}


function primo() {

    let n = document.getElementById("numero").value;

    let valor1 = Number(n);

    if (valor1 < 2);
    for (let i = 2; i < valor1; i++){
        if (valor1 % i == 0)
            {
            alert("NÃO É PRIMO");
            return
        }
    }
alert("É PRIMO ");
        return
}


function contarVogais(a) {
    var cont = 0;
    var a = document.getElementById("txt");
    console.log(a);
    for (let i of a.value) {
        if ((i == "a") || (i == "e") || (i == "i") || (i == "o") || (i == "u")) {
            console.log(a);
            cont += 1;
        }
    }
    alert("Quantidade vogais digitadas foram: " + cont);
}