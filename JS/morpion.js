var morpion = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1);

var auJoueur1 = true;

function placerSigne(idCase)
{
    if(morpion[idCase] == -1)
    {
    var image = (auJoueur1) ? 0:1;
    document.getElementById(idCase).innerHTML = '<img src="'+image+'.gif" alt="image !" />';
    morpion[idCase] = "1";

}

else{
alert("Case occupée");
}

if(auJoueur1 == false){
auJoueur1 = true;
}

else{
}
}

function resetGame(){

for(var i=0;i<9;i++)
{
morpion[i] = "";
}
}

for(var i=0; i<9; i++)
{
 document.write(morpion[i]);
}
