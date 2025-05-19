let numeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27]
let impares = 0
let pares = 0
let maioresQue20 = 0

// laço de repetição para verificar todos os elementos da array numeros.
for (let i = 0; i < numeros.length; i++){

// condição para contar quantos numeros sao pares e impares.

    if(numeros[i] %2 == 0){
        pares++
    } else{
        impares++
    }

// condição para contar quantos numeros são maiores que 20.

    if(numeros[i] > 20)
        maioresQue20++

}

console.log(`A quantidade de numeros impares é: ${impares}`)
console.log(`A quantidade de numeros pares é: ${pares}`)
console.log(`A quantidade de numeros maiores que 20 é: ${maioresQue20}`)
