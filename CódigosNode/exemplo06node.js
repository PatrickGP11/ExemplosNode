const fs = require('fs')

console.log("Criação do arquivo...")

const mensagem = Date() + "\n" + " Log do dia: O usuário acessou o sistema "

fs.writeFileSync('log.txt',mensagem)

try {
    fs.writeFileSync('log.txt', mensagem)
    console.log('Arquivo "log.txt" escrito com sucesso! Modo Síncrono')
} catch (error) {
    console.error('Ops! Ocorreu um erro ao escrever o arquivo', error)
}

console.log(..."Criação de arquivo finalizado...")