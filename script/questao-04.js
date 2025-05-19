let temperaturasCelsius = [0, 10, 20, 30, 40]
let temperaturaFahrenheit = []

//formula: F = C * 9/5

// laço de repetição para verificar todos os elementos da array temperaturaCelsius.
for (let i = 0; i < temperaturasCelsius.length; i++) {

//fazendo a conversão das temperaturasCelsius e colocando na nova array temperaturaFahrenheit.
    temperaturaFahrenheit[i] = temperaturasCelsius[i] * 9/5 + 32
}

console.table(temperaturaFahrenheit)
console.table(temperaturasCelsius)
