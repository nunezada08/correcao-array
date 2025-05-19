let notas = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0]
let media = 0
let soma = 0
let alunosAcimaDaMedia = 0
let maior = notas[0]
let menor = notas[0]
let contador

// laço de repetição para verificar todos os elementos da array notas.
for (let i = 0; i < notas.length; i++) {

//somando todos os elementos que estão dentro da array notas.
    soma += notas[i]
}

//fazedo a media de notas dos alunos
media = soma / notas.length

// laço de repetição para verificar todos os elementos da array numeros.
for (let i = 0; i < notas.length; i++) {

// condição para verificar quantos alunos tiveram a nota acima da media.
    if (notas[i] > media) {
        alunosAcimaDaMedia++
    }

// condição para verificar qual é a maior nota da array notas.
    if(notas[i] > maior)
        maior = notas[i]

// condição para verificar qual é a menor nota da array notas.
    if(notas[i] < menor)
        menor = notas[i]

}


console.log(`A media de notas da turma foi: ${media}`)
console.log(`Tiveram ${alunosAcimaDaMedia} alunos acima da media`)
console.log(`A maior nota da turma foi ${maior}`)
console.log(`A menor nota da turma foi ${menor}`) 