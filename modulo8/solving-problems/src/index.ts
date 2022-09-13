//Exercício 1

//Resolvendo problemas:

//fazer sa verificações para ver se são ondeEdit

function isOneEdit (strA: string, strB: string): boolean {

    //se a diferença de tamanho entre as duas é maior que 1, não é oneEdit
    if(Math.abs(strB.length - strA.length) >1) return false

    //se uma é maior que a outra, a maior obrigatoriamente deve incluir a outra
    if(strA.length > strB.length) return strA.includes(strB)
    if(strB.length > strA.length) return strB.includes(strA)

    //Passando pelos if's acima, significa que as duas têm o mesmo tamanho
    //Nesse caso, varremos as strings contando quantas letras diferentes tem

    let charsDiffCount = 0
    for (let i = 0; i < strA.length; i++) {
        if(strA[i] !== strB[i]) charsDiffCount++
    }
    //Retorna true se a diferença é 1, false caso contrário
    return charsDiffCount === 1
}

console.log("0", "expected true", isOneEdit('banana', 'banana'))
console.log("0", "expected true", isOneEdit('bananak', 'banana'))
console.log("0", "expected true", isOneEdit('bananaaa', 'banana'))

//Exercício 2

export const stringCompression = (input: any) => {
    const substrings = []
    let lastChar = input [0]
    let charCount = 0

    for(const char of input) {
        if(char !== lastChar) {
            substrings.push(lastChar + charCount)
            lastChar = char
            charCount = 0
        }
        charCount++
    }

    substrings.push(lastChar + charCount)
    let result = ""
    for(const key of substrings) {
        result += key
    }
    return result.length > input.length ? input : result
}