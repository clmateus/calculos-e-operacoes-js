const num1 = Number(prompt("Digite um número"))
const num2 = Number(prompt("Digite outro número"))

alert(`A soma de ${num1} e ${num2} é: ${num1 + num2}`)
alert(`A subtração de ${num1} e ${num2} é: ${num1 - num2}`)
alert(`A multiplicação de ${num1} e ${num2} é: ${num1 * num2}`)
alert(`A divisão de ${num1} e ${num2} é: ${num1 / num2}`)
alert(`O resto da divisão de ${num1} e ${num2} é: ${num1 % num2}`)

if((num1 + num2) % 2 === 0) {
  alert(`${num1 + num2} é um número par`)
} else {
  alert(`${num1 + num2} é um número ímpar`)
}

if(num1 === num2) {
  alert(`Os dois números inseridos são iguais`)
} else {
  alert(`Os dois números inseridos são diferentes`)
}