/*  Planejando um Projeto:
-----------------------------------------------
1. O que eu quero fazer?:
-----------------------------------------------

Eu quero criar um jogo de aventura de zumbi porém em formato de texto onde o jogador 
começará com um determinado cenário aleatório. Eles irão escolher uma arma e lutar contra o zumbi.
O jogador tem 33% de chances de perder ou matar o zumbi e com isso ganhar o jogo.

-----------------------------------------------
2. Quais passos você acha necessário?
-----------------------------------------------

Começando:
1. Escreva os cenários
2. Armazenar uma lista de possíveis cenários
3. Uma caixa de alerta aleatória da lista de cenários possíveis

Armas:
1. Criar uma lista de armas
2. Salvar a lista de armas
3. Avisar qual arma o jogador encontrou

-----------------------------------------------
3. Qual é a sintaxe ou padrão de código você irá usar?
-----------------------------------------------

Arrays para listas
Você precisará de múltiplos números. Com isso, se fará necessário criar uma função chamada: 'randomNumber'

-----------------------------------------------
Lembrete: Há várias maneiras de criar coisas com código. A parte mais importante é escrever um código que 
esteja funcionando. Se você não conseguir desenvolver o seu código, torne-o o mais simples possível.
Depois, reveja diferentes maneiras que você poderá melhorar o seu código!
*/

var beginningScenarios = ["Você acordou em um hospital. Tudo está completamente silencioso. Com isso, você começa a caminhar na ponta dos pés até a porta e abre.", 
"Você está de pé no lado oeste da casa branca e de frente para a porta. Há uma pequena caixa de mensagens aqui.",
"Você vê uma loja de conveniência aberta e decide roubar alguns bens."];

function randomNumber(range) {
    return Math.round(Math.random() * range)
}

alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)]);

var weaponList = ["Machado", "Arco-Flexa", "Taco de Baseball", "Galinha de Plástico"];

var weapon = weaponList[randomNumber(weaponList.length -1)];
alert("Sendo um zumbi muito feio, você decide procurar primeiro uma arma. Depois de escutar algo você percebe e pega imediatamente " + weapon + ".");

alert("De repente um zumbi surge através da porta! Você já está com " + weapon + " e avança no zumbi.");

var survival = randomNumber(2);

if(survival === 0) {
    alert("O zumbi te pegou! Você perdeu!");
} else if (survival > 0) {
    alert("Você conseguiu matar o zumbi com " + weapon + ". Você ganhou!");
}