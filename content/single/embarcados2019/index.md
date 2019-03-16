+++
date = "2019-01-24T13:56:17-03:00"
draft = false
title = "Introdução à Programação de Sistemas Embarcados"

+++

# Turma Fevereiro 2019
Profs. Roberto Kenji e João Pimentel


## Referências:

 - Livro: C Programming for Arduino - Julien Bayle

 - Livro: C Completo e Total - Herbert Schildt

 - Livro: [Introdução à eletrônica para artistas](http://www.argonavis.com.br/download/eletronica-para-artistas.html) - Helder da Rocha
 - Apostila: Arduino Programming Notebook - Brian W. Evans. 
 [PORTUGUÊS](http://www.cin.ufpe.br/~jhcp/single/embarcados/notebook_pt_br.pdf) ou 
 [INGLÊS](http://www.cin.ufpe.br/~jhcp/single/embarcados/notebook_en.pdf).

 - [Documentação do Arduino em português](https://www.arduino.cc/reference/pt/)

 - [Cheatsheet](http://www.cin.ufpe.br/~jhcp/single/embarcados/cheatsheet.jpeg)

## Cronograma

### Inscrições
<table border="1px">
  <tr><td>05/fev (terça)</td><td>último dia para solicitação de inscrição</td></tr>
  <tr><td>09/fev (sábado)</td><td>divulgação dos resultados da inscrição</td></tr>
</table>

### Aulas
<table border="1px">
  <tr><td>14/fev (quinta)</td><td>8-12h, 13-17h</td></tr>
  <tr><td>18/fev (segunda)</td><td>8-12h, 13-17h</td></tr>
  <tr><td>19/fev (terça)</td><td>8-12h, 13-17h</td></tr>
  <tr><td>20/fev (quarta)</td><td>8-12h, 13-17h</td></tr>
  <tr><td>25/fev (segunda)</td><td>8-12h, 13-17h</td></tr>
  <tr><td>26/fev (terça)</td><td>8-12h, 13-17h</td></tr>
</table>

## Inscrição
<div style="background-color: #ffb734; padding: 5px;">
ATENÇÃO!!
<ul>
<li> para se inscrever é preciso ter sido aprovado na disciplina Linguagem de Programação da UACSA,
ou disciplina equivalente de outra instituição;</li>
<li> antes de se inscrever, verifique se você realmente poderá ir para a UACSA nos seis dias do curso;</li>
<li> em caso de não comparecimento do estudante no início do primeiro dia (14/02), o aluno será considerado como desistente e a vaga será dada para o próximo estudante na fila de espera;</li>
<li> estudantes que perderem mais do que 9h de aula não receberão certificado. Por exemplo, se você faltar 1 dia de aulas e chegar 1 hora atrasado em dois dias, não receberá certificado;</li>
<li> o curso só conta com 30 vagas.</li>
</ul>
</div>

Para solicitar sua inscrição no curso, envie e-mail para embarcadosuacsa arroba gmail.com com os dados abaixo. Após este email sua inscrição ainda não estará confirmada.

Após solicitar inscrição, verifique seu email diariamente para responder aos emails de confirmação.


- Nome Completo
- CPF
- Telefone celular
- Universidade
- Curso
- Histórico escolar completo anexo (pode ser o do SIGA)

Divulgação dos resultados da inscrição: 09 de fevereiro.

## Resultados da inscrição

### Inscrições aprovadas:
-  Ana Paula Martins da Silva
-  Adrielson de Araújo Dias
-  Alexandre Gomes de Moura
-  Bruno Felipe Melo de Albuquerque
-  Carlos Correia Pinto
-  Clariele de Almeida Pereira
-  Claudio Paz da Silva Filho
-  Deyvison Muniz Conrado
-  Edivaldo Ferreira dos Santos Júnior
-  Edivaldo Sebastião da Silva Júnior
-  Filipe Alan Silva de Oliveira
-  Gabriel Victor da Silva Santos
-  João Pedro de Sá Florentino
-  Jorge Barros Medeiros
-  José Otávio Cavalcanti Maciel
-  Kelvin Maia Mariano de Lima
-  Larissa Vilela Sobral
-  Lucas Victor Ramos Bunzen
-  Marcelo Wilker da Silva Santos
-  Mário Henrique de Oliveira Lira Junior
-  Marx Daylon da Cunha Barbosa.
-  Paula de Társia Borba de França
-  Pedro Alves do Nascimento Neto
-  Pedro Henrique Valentim Santos
-  Pedro Henrique Vasconcelos Pereira
-  Robério Rodrigues de Almeida Neto
-  Robson Luiz da Silva Freire
-  Romário Jonas de oliveira Veloso
-  Talita Moraes Ferreira
-  Tiago Florêncio dos Santos
-  Tomás Miranda Marcena Apolinário
-  Vanessa Maria Candida dos Santos
-  Victor Ádony Alves Santos
-  Wendell Figueiredo dos Santos

# Material das Aulas

## Aula 1
<hr />
 - [Slides João](http://www.cin.ufpe.br/~jhcp/single/embarcados/aula1joao.pdf)

 - [Slides Roberto - parte 1](http://www.cin.ufpe.br/~jhcp/single/embarcados/aula1kenji-parte1.pdf)

 - [Slides Roberto - parte 2](http://www.cin.ufpe.br/~jhcp/single/embarcados/aula1kenji-parte2.pdf)

 - [Exemplo de Push Button](http://www.cin.ufpe.br/~jhcp/single/embarcados/exemplo_pushbutton.png)

 - Projeto
   - Descrição: Crie um semáforo combinado de veículos e de pedestre.
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
