while (pseudo != "admin" && pass != "mdpadmin"){
  var pseudo = prompt("Bonjour, quel est votre pseudo?");
  var pass = prompt("Quel est votre mot de passe?");

  console.log("pseudo :"+pseudo);
  console.log("pass : "+pass);

  if(pseudo == "admin" && pass == "mdpadmin")
  {
    alert('login accepter');
  }else{
    alert('login echec');
    console.log(“indice?”);
  }
  }
