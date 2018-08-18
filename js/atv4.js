function touch(){
  var username = prompt("olá! qual o seu nome?");
  if (username) {
    document.getElementById("rockImg").src="img/rock_happy.png";
    alert("Prazer "+username);
  }

}
