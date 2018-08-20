## Considerações gerais

A escolha da linguagem é deixada para você, utilize **a que você se sente mais confortável**. A entrada deverá ser por `STDIN` (*standard input*) e a saída por `STDOUT` (*standard output*) na linguagem que você escolher. 

Forneça as instruções de instalação e execução do seu sistema, observaremos **principalmente seu *design* de código**. Aspectos como coesão, baixo acoplamento e legibilidade são os principais pontos.

Escolha um dos desafios abaixo para resolver, caso já tenha participado do processo seletivo, por favor escolha um desafio diferente do que foi feito anteriormente.

## 1 - Conversão de medidas

Você terá que criar um sistema que **formate a saída** de uma **dada entrada** para as três unidades de dados: **tempo, bytes e porcentagem**.

### Regras para formatação

#### Tempo

A entrada provida deve ser no formato `<numero> <ms>`, ex: `1340 ms`. A unidade usada para entrada será milisegundo.
* Quando a entrada for menor que 1 segundo a saída deve continuar em milisegundos `ms`.
* Quando a entrada for menor que 60 segundos a saída deve ser em segundos `s`.
* Quando a entrada for menor que 60 minutos a saída deve ser em minutos `min`.
* Quando a entrada for maior ou igual a 60 minutos a saída deve ser em horas `h`.

#### *Bytes*

A entrada provida deve ser no formato `<numero> <bytes>`, ex: `16 B`. A unidade usada para entrada será bytes (8 bits).
* Quando a entrada for menor que 1000 bytes a saída deve continuar em `B`.
* Quando a entrada for menor que 1000 elevado a 2 a saída deve ser em kilobyte `kB`.
* Quando a entrada for maior ou igual a 1000 elevado a 2 a saída deve ser em megabyte `MB`.

#### Porcentagem

A entrada provida deve ser no formato `<numero flutuante>`, ex: `0.16`. A unidade usada para entrada será um número flutuante onde, por exemplo, `0.1` significa `10%` e `0.98` significa `98%`.

#### Milímetros(novo)

A entrada provida deve ser no formato `<numero> <mm>`, ex: `10 mm`. A unidade usada para entrada será milímetros.
* Quando a entrada for menor que 10 milímetros a saída deve continuar em `mm`.
* Quando a entrada for menor que 100 a saída deve ser em centrímetros `cm`.
* Quando a entrada for maior ou igual a 1000 a saída deve ser em metro `m`.
* Quando a entrada for maior ou igual a 100000 a saída deve ser em kilômetro `km`.

### Exemplos de entradas e saídas esperadas pelo seu programa

| Entrada | Saída |
| ------ | ------ |
| 30 ms | `30 ms` |
| 5000 ms | `5 s` |
| 5400000 ms | `1.5 h` |
| 0.14 | `14%` |
| 50 B | `50 B` |
| 2000 B | `2 kB` |
| 10 mm | `1 cm` |

---

## Requisitos para rodar
* NodeJS [NodeJS](https://nodejs.org/en/) 
* Npm [Npm](https://www.npmjs.com/) 

## Recursos(Dev)
* ESlint [ESlint](https://eslint.org/) 
* Jest [Jest](https://jestjs.io/) 

## Instalação
	npm install

## Rodar

#### Testes

	npm t

![Covered](https://i.imgur.com/ND0DxfWl.png)


#### Rodar em Dev Mode

	npm start
  Aguardar a mensagem: "Enter your data to convert"

#### Fazer o Build
Saída será em dist/

npm run build

#### Rodar o Build

node dist/app.js
Aguardar a mensagem: "Enter your data to convert"

#### Rodar o Build com argumentos

* node dist/app.js 600 ms
* echo '600 ms' | node dist/app.js

## Screens

![Output](https://i.imgur.com/73DSQdcl.png)

![Output](https://i.imgur.com/SVCedVKl.png)


---
# OBRIGADO PELA OPORTUNIDADE
---