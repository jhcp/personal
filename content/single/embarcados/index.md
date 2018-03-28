+++
date = "2018-03-26T13:56:17-03:00"
draft = false
title = "Introdução à Programação de Sistemas Embarcados"

+++

Profs. Roberto Kenji e João Pimentel


# Referências:

 - Livro: C Programming for Arduino - Julien Bayle

 - Livro: C Completo e Total - Herbert Schildt

 - Livro: [Introdução à eletrônica para artistas](http://www.argonavis.com.br/download/eletronica-para-artistas.html) - Helder da Rocha
 - Apostila: Arduino Programming Notebook - Brian W. Evans. [PORTUGUÊS](notebook_pt_br.pdf) ou [INGLÊS](notebook_en.pdf).

 - [Documentação do Arduino em português](https://www.arduino.cc/reference/pt/)

 - [Cheatsheet](cheatsheet.jpeg)

# Turma Março 2018

## Aula 1

 - [Slides João](aula1joão.pdf)

 - [Slides Roberto - parte 1](aula1kenji-parte1.pdf)

 - [Slides Roberto - parte 2](aula1kenji-parte2.pdf)

 - [Exemplo de Push Button](exemplo_pushbutton.png)

 - Projeto
   - Descrição: Escreva um semáforo combinado de veículos e de pedestre.
   Por padrão, o semáforo deverá ficar aberto para os veículos e fechado para os pedestres.
   O projeto deve conter um botão (push button) para pedestres.
   Quando o botão é pressionado, o semáforo dos veículos deverá ficar amarelo (imediatamente).
   Após um certo tempo, o semáforo dos veículos passará de amarelo para vermelho.
   Concomitantemente, o semáforo dos pedestres ficará verde.
   Após algum tempo, o semáforo dos pedestres ficará piscando em vermelho, indicando
   que irá fechar em breve, enquanto o semáforo dos veículos permanece vermelho.
   Após algum tempo piscando, o semáforo dos pedestres ficará vermelho em definitivo,
   ao mesmo tempo em que o semáforo dos veículos voltará para seu estado inicial (verde).
   - Resolução:

 - [Questionário](https://goo.gl/forms/LhvOp8lUqtSZ6ctC2)

 - [Vídeos sobre números binários](https://pt.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/number-systems-introduction)

 - [Texto sobre números binários](https://www.tecmundo.com.br/infografico/9424-como-um-computador-faz-calculos-pelo-sistema-binario-.htm)

## Aula 2

- [Slides Roberto - parte 1](aula2kenji-parte1.pdf)

- [Slides Roberto - parte 2](aula2kenji-parte2.pdf)

- [Exemplo Semáforo Refatorado](https://www.tinkercad.com/things/lsRlh2fF7nc)

- [Exemplo Pisca-Pisca sem delay()](https://www.tinkercad.com/things/9Fmb7YLFRuO)

- [Exemplo de Debounce](https://www.tinkercad.com/things/bxMeDZzWh4j)

- [Google sobre o assunto](https://www.google.com.br/search?q=arduino+delay+n%C3%A3o+bloqueante)

- Projeto
  - Descrição: Faça um projeto com três leds que fiquem alternando em sequência com intervalos de 3 segundos.
    Se o usuário apertar um botão (push button), os 2 leds irão imediatamente se acender,
    só voltando a piscar quando o usuário soltar o botão.
    OBS: a reação ao apertar do botão deve ser imediata.
  - Resolução: https://www.tinkercad.com/things/9Hq3sZqKBRk

## Aula 3

- [Slides Roberto - parte 1](aula3kenji-parte1.pdf)

- [Slides Roberto - parte 2](aula3kenji-parte2.pdf)

- [Exemplo 1](https://www.tinkercad.com/things/82jRMjBJ57S)

- [Exemplo 2](https://www.tinkercad.com/things/iNXi9pq43RE)

- [Exemplo 3](https://www.tinkercad.com/things/lmARHvd7IoS)

- Projeto
  - Descrição: Faça um projeto com três leds que fiquem alternando em sequência
   com intervalos de 3 segundos, como o da aula anterior.
   Além dos piscas, o projeto deve ter dois potenciômetros. Um potênciometro
   irá controlar o brilho dos LEDs. O outro potênciometro irá controlar a velocidade
   dos leds (ou seja, o tempo que cada LED fica aceso).
   DICA: Use como ponto de partida a resolução da aula anterior.


## Aula 4

 - [Slides Roberto](#)

## Aula 5

 - [Slides João](#)

## Extra

### Arredondamento

O C conta com funções de arredondamento de números, que também estão disponíveis
no Arduino.

- round: arredonda para o inteiro mais próximo
- floor: arredonda para baixo (piso)
- ceil: arredonda para cima (teto)

Exemplo:

```
Serial.println("round 2.3: "+String(round(2.3)));
Serial.println("round 2.8: "+String(round(2.8)));
Serial.println("floor 2.8: "+String(floor(2.8)));
Serial.println("ceil 2.8: "+String(ceil(2.8)));
```
