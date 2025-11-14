// Importando um Módulo 'fs' (File System)

const fs = require('fs')

console.log("Iniciando nosso script ...")

//2 Definir o conteúdo da mensagem

const dia = new Date() //+ "\n" + nascimento
const usuario = "Patrick Gonçalves Pinheiro"
const cadastro = "---Dados Cadastrais---"
const aula = "Aula de Node com Banco de Dados"
const email = "Email: patrickgonsalves06@gmail.com"
const github = "https://github.com/PatrickGP11?tab=repositories"
const linkedin = "https://www.linkedin.com/public-profile/settings"
const mensagem = "Log do dia: " + dia.getDate() + "/" + (dia.getMonth() + 1) + "\n O usuário acessou o sistema: \n" + usuario + " " + dia.getDate() + "/" + (dia.getMonth() + 1) + " " + dia.getHours() + " : " + dia.getMinutes() + "\n" + cadastro + "\n" + aula + "\n" + email + "\n" + github + "\n" + linkedin + "\n"

//3 Escrever o arquivo de forma síncrona                

fs.writeFileSync('dados.txt', mensagem)

try {
    fs.writeFileSync("dados.txt", mensagem)
    console.log("Arquivo criado com sucesso.")
} catch (erro) {
    console.error("Desculpe-me, ocorreu um erro ao escrever o arquivo: ", erro)
}

console.log("Finalizando nosso script ...")