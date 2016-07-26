var time = prompt("Qual é o mascote do seu time?");

switch(time) {
  case "Palmeiras" :
    alert("Mascote....: Periquito");
    break;
  
  case "Flamengo" :
    alert("Mascote....: Urubu");
    break;
  
  case "Botafogo" :
    alert("Mascote....: Manequinho");
    break;
    
  default : 
    alert("Perdão! Seu time não está listado. Digite um outro time!");
    break;
}