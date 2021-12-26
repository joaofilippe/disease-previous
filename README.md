# D3_Challange

## Lógica:

O SARS-COV-2, vírus causador da COVID-19, possui uma **taxa de reprodução** que faz com que a transmissão se dê de maneira exponecial. Ou seja, os números absolutos iniciais se dão de maneira mais tímida, porém, cresce subtamente quando atinge um número razoável de pessoas atingidas.

Além disso, após 15 dias, os infectados param de transmitir o vírus e, desse modo, não podem mais constar como possiveis transmissores.

Desse modo, temos as seguintes variáveis para trabalhar:

- A taxa de transmissão viral;
- Os dias percorridos;
- Os períodos em que as pessoas estão transmitindo o vírus;

Para essa simulação, estaremos trabalhando com a mobilidade da população em 100%. A taxa de transmissão será **1.006** ou **0,6%** e o tempo de transmissão será de **15 dias**.

------------------------------------
### Como irá funcionar o programa:
Esse programa será escrito em TypeScript, visto que o principal problema apresentado é garantir a *tipagem* do parâmetro que irá ser passado para a função da estimativa. 

Dessa forma, o consumidor irá usar uma API REST para poder fazer suas requisições.

A API terá apenas um método GET, onde você irá por meio de uma URL passar por *query params* a quantidade de dias desejados na URL. 

Ex.:
http://localhost:3003/infects?days="NUMBER_OF-DAYS"

A resposta será um objeto com a mensagem da evolução do período do primeiro dia até o dia escolhido em formato JSON.

### Como usar o programa:
Você pode consumir pelo PostMan a API pela seguinte url:

https://joaof-d3-challange.herokuapp.com/infecteds?days='NUMBER_DAYS'

Caso você prefira instalar e rodar na sua máquina é bem simples. Para isso você deverá ter o NodeJS em seu ambiente e, na pasta desejada, rodar o comando:
```Node
npm install
```

Após instalados os módulos é só rodar o comando:
```Node
npm run start
```

Pronto, o seu arquivo estará pronto na porta 3003.

Você pode utilizar o Postman, ou o serviço que preferir, para fazer as requições que deverão ser passadas via *query*.

Ex.: 
> http://localhost:3003/infects?days=10
> 
> http://localhost:3003/infects?days=40
> 
> http://localhost:3003/infects?days=120

## Propostas:
#### Arquitetura:
Em relação à arquitetura, como o programa é bastante enxuto, podemos optar por camadas. Nesse caso, teríamos apenas duas: a *controller* e a *business*.

Na *controller* iríamos tratar das requisições e respostas dadas, enquanto na *business* teríamos a execução do programa do cálculo em si.

Caso fossemos ampliar esse projeto, poderíamos trabalhar com uma camada *data* que ficaria responsável por armazenar os dados e comparar com as previsões.

Isso possibilitaria que pudessemos corrigir as variáveis, tais como os dias de transmissão e a taxa de transmissão.

#### Infraestrutura:
No atual nível, necessitaríamos apenas de um servidor API para podermos disponibilizar uma url acessível para aos consumidores do API.

Em caso de uma implementação continuada, os responsáveis pelo acompanhamento da evolução da doença iriam se utilizar de um banco de dados, preferencialmente um relacional, para poder comparar a previsão do algoritmo e a atual evolução da doença.
