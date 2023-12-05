# Solução dos Desafios
## Desafio 01
Antes de tudo, verifiquei no banco de dados se o usuário existia. Também percebi que ele era o único que possuía letras maiúsculas no login. Então, fui para o backend e examinei os controllers de autenticação. A variável que estava recebendo o UID tinha o método `toLowerCase()`, o que fazia com que o username inserido ficasse em minúsculo. Isso impossibilitava que o usuário "manzoG", por ter uma letra maiúscula, conseguisse fazer login.

## Desafio 02
Ao analisar as DevTools, percebi que o frontend não estava conseguindo fazer a chamada para a API. Fui para o arquivo `schedule.apis.ts` e verifiquei que o parâmetro `search` não estava sendo passado. Ao realizar o teste, percebi que ainda não estava funcionando. Após uma busca mais aprofundada, cheguei ao arquivo `Schedule.tsx` na pasta `pages` e notei que o `listSchedule` não estava recebendo o parâmetro `search`. Ao adicioná-lo e realizar o teste novamente, constatei que esse era o problema.

## Desafio 03
Disponibilizei as consultas feitas para obter os dados necessarios em Reports.


<h1 align="center">
🐦 Support Guy Yazo Challenge 🐦
</h1>

> Teste para vaga de Support Guy da <a href="https://www.yazo.com.br/">Yazo.</a>

<div align="center">
<img src="https://user-images.githubusercontent.com/95248203/236875042-9e75626f-de17-46f1-87e0-04297a71d5ef.png" alt="Yazo Logo">
</div>

> Três desafios que simulam o dia-a-dia de um support guy da Yazo.

#

## ❓ Sobre

A proposta dos desafio é simular a realidade do cargo de Support Guy, onde a função principal é resolver os conflitos que aparecem durante os eventos e das necessidades do cliente.

Este exercício consiste em uma união de três problemas comuns que o Support Guy enfrenta normalmente.

#
## 👨🏼‍💻 Preparativos e submissão do desafio

Para iniciar o desafio execute um [fork](https://github.com/Yazo-Connecting-Experiences/Support-Guy-Yazo-Challenge/fork), com o fork em mão você poderá fazer o clone do projeto para sua maquina para então seguir para a configuração do projeto

Após o desenvolvimento da resolução dos desafios, você pode realizar o commit e o push para o seu fork, e então enviar o URL do seu repositório pelo WhatsApp


#



## 🚀 Instalando

Para instalar o projeto, siga estas etapas:

- Tenha instalado <a href="https://nodejs.org/en/download/">Node</a> ou <a href="https://classic.yarnpkg.com/en/docs/install">Yarn</a> em sua máquina.
- Tenha instalado o <a href="https://git-scm.com/downloads">Git</a>

Abra o terminal e digite os seguintes comandos:

```
git clone URL_DE_CLONE_DO_SEU_FORK

cd Support-Guy-Yazo-Challenge
```

Ainda com o terminal aberto, você necessitará rodar o Front e o Back juntos. Realize uma das seguintes ações:

#

## 💻️ Rodando o Front


Se baixou Node utilize o seguinte comando:

```
cd FrontEnd && npm install

npm run dev
```

Se baixou Yarn utilize o seguinte comando:

```
cd FrontEnd && yarn

yarn dev
```

Com este procedimento, abrirá uma página no navegador e poderá acessa-lo.

#

## 💻️ Rodando o Back

Se baixou Node utilize o seguinte comando:

```
cd BackEnd && npm install

npm run dev
```

Se baixou Yarn utilize o seguinte comando:

```
cd BackEnd && yarn

yarn dev
```


#
## 🐦 Boa sorte! 🐦
