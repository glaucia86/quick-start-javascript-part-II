var friends = ["Mark", "Lisa", "Denny", "Peter", "Steven", "Claudette"];

function greetFriends(){
  for(var i = 0; i < friends.length; i++) {
    console.log("Olá amigos(as) " + friends[i]);
  }
}

greetFriends();