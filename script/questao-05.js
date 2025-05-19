let precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190]
let precoComDesconto = []
let preco = 0
let desconto = 0
let somaPrecosComDesconto = 0
let somaTotalPrecos = 0
let subtracao 
let media 


for (let i = 0; i < precos.length; i++){

    preco = precos[i]

    if(precos[i] > 100){
        desconto = precos[i] * 10 / 100
        preco = precos[i] - desconto
    }

    precoComDesconto[i] = preco

    somaTotalPrecos += precos[i]
    somaPrecosComDesconto += precoComDesconto[i]
    
    subtracao = somaTotalPrecos - somaPrecosComDesconto

    media = somaPrecosComDesconto / precoComDesconto.length


}

console.table(precos)
console.table(precoComDesconto)
console.log(`A perda que a loja teve com os descontos foi de: R$${subtracao.toFixed(2)}`)
console.log(`O valor medio dos produtos após o desconto é de: R$${media.toFixed(2)}`)