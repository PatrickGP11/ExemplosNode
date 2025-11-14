//Importar o módulo 'fs' Fyle System

const fs = require('fs')

console.log("Iniciando nosso script...")

const mensagem = "Log do dia: O usuário acessou o sistema"+Date()

fs.writeFileSync('log.txt',mensagem)

try {
    fs.writeFileSync('log.txt', mensagem)
    console.log('Arquivo "log.txt" escrito com sucesso! Modo Síncrono')
} catch (error) {
    console.error('Ops! Ocorreu um erro ao escrever o arquivo:',erro)
}

console.log(..."Script finalizado!...")