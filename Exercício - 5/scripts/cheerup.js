/* Sessão de Terapia - Robô de JavaScript*/

/*
  A janela de confirmação retorna um valor booleano (true ou false)
   - se o paciente clicar em 'ok' irá retornar: true;
   - se o paciente clicar em 'cancel' irá retornar: false;
*/

var triste = confirm("Como você está se sentindo hoje?");

/* Aqui é o mesmo que escrever: 'while(sad === true) */
while(triste) {
  alert("Piada: Sabe o que o Catchup malandro disse para o sal? P: É nóis nas frita mano.");
  var yes = confirm("Gostaria de continuar com a sessão?");
  
  if(yes) {
    var response = prompt("Por favor, diga-me os seus problemas:", "Digite os seus sentimentos aqui");
    
  if(response) {
    alert("Desculpe se você está se sentindo assim.... Eu sei que não posso perceber isso, mas o computador dará a você um grande abraço!!! **abraço!!");
    triste = false;
  } 
  else {
    sad = false;
    }
  }
}