Back-End:



O conceito do back-end é simplesmente tudo que faz o código funcionar (roda por de baixo dos panos)

Esse código foi desenvolvido com Node.Js utilizando o VsCode como interpretador de código.
Ao inicar o projeto, é necessário abrir o VsCode após instalar o Node.Js, criar a pasta com o nome desejado
e logo depois abrir o terminal será necessário digitar npm init -y (-y serve para que tudo seja definido como yes).
Após o comando no terminal, será criada um arquivo com o nome package.jason e nele vão conter algumas informações importantes.
Dentro da sua pasta, crie uma pasta (normalmente definida como server.js), defina o nome com a sua preferência. Ainda com o terminal
aberto, digite npm i express, assim serão instaladas as bibliotecas do express.


Passos para criação do código - 

Primeiramente dentro do arquivo server.js importe o express (import express from 'express'),
segunda a recomendação da documentação do express, é necessário criar uma variável chamada app.
Depois que criar a variável app, será possível utilizar todos os recursos do express.
Apois isso, é possível definir as rotas 


(import express from 'express')

const app = express()



