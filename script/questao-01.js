let idades = [17, 21, 16, 25, 19]
let maioresDeIdade = 0
let menoresDeIdade = 0

// laço de repetição para verificao todos os elementos do array idades.
for (let i = 0; i < idades.length; i++) {
// condição para contadores de maior que 18
    if( idades[i] >= 18 ){
    maioresDeIdade++
    }
}
// descobrir quantos sao menores de idade com base na informacao de quantas pessoas tem na array e quantos são maiores de idade
menoresDeIdade = idades.length - maioresDeIdade

console.log(`A quantidade de pessoas maiores de idade é ${maioresDeIdade} pessoas`)
console.log(`A quantidade de pessoas menores de idade é ${menoresDeIdade} pessoas`)
