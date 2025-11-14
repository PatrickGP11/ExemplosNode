// Importando um Módulo 'fs' (File System)

const fs = require('fs')

console.log("Iniciando nosso script ...")

//2 Definir o conteúdo da mensagem

const usuario = "Patrick"
const mensagem = "Log do dia: O usuário acessou o sistema. \n"+usuario

//3 Escrever o arquivo de forma síncrona

fs.writeFileSync('arquivo02.txt',mensagem)

try {
    fs.writeFileSync("arquivo02.txt",mensagem)
    console.log("Arquivo criado com sucesso.")
} catch (erro) {
    console.error("Desculpe-me, ocorreu um erro ao escrever o arquivo: ", erro)
}

console.log("Finalizando nosso script ...")