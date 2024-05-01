function ativ1(){
    var A = 10;
    var B = 20;
    var C = parseInt(A);
    A = B;
    B = C;
    alert("A variável A é: " + A + " e a variável B é: " + B);
}
function ativ5a(){
    var valor = parseInt(prompt("Digite um número: "));
    var antecessor = valor - 1;
    alert("O antecessor é: " + antecessor);
}
function ativ5b(){
    var valor = parseInt(prompt("Digite um número: "));
    var sucessor = valor + 1;
    alert("O sucessor é: " + sucessor);
}
function ativ6a(){
    var base = parseInt(prompt("Informe a base:"));
    var altura = parseInt(prompt("Informe a altura:"));
    var area = base * altura;
    alert("A área do retângulo é: " + area)
}
function ativ6b(){
    var raio = parseInt(prompt("Informe o raio:"));
    var area = 3.14 * raio ** 2; 
    alert("A área do círculo é: " + area);
}