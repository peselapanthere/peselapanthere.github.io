var afficheQuesUn = 1;
var afficheQuesDeux = 1;
var afficheQuesTrois = 1;
var afficheQuesQuatre = 1;
var foisJoue = 0;

var defi = "";
var difficulte =800;
var nomDifficulte ="Facile";

document.getElementById("moyen").classList.remove("btn-selecte");
document.getElementById("difficile").classList.remove("btn-selecte");



// fonction pour changer la difficulté a facile 
function chgFacile() {
  nomDifficulte ="Facile";
  difficulte = 800;   
  defi = "Facile (But: 800pts)";
  document.getElementById("explique").innerHTML = defi;
  var btnActive1 = document.getElementById("facile");
  btnActive1.classList.add("btn-selecte");
  var btnActive2 = document.getElementById("moyen");
  btnActive2.classList.remove("btn-selecte");
  var btnActive3 = document.getElementById("difficile");
  btnActive3.classList.remove("btn-selecte");
}



// fonction pour changer la difficulté a moyen 
function chgMoyen() {
  nomDifficulte ="Moyen";
  difficulte = 1000;
  defi = "Moyen (But: 1000pts)";
  document.getElementById("explique").innerHTML = defi;
  var btnActive1 = document.getElementById("facile");
  btnActive1.classList.remove("btn-selecte");
  var btnActive2 = document.getElementById("moyen");
  btnActive2.classList.add("btn-selecte");
  var btnActive3 = document.getElementById("difficile");
  btnActive3.classList.remove("btn-selecte");
  
}

// fonction pour changer la difficulté a moyen 
function chgDifficile() {
  nomDifficulte ="Difficile";
  difficulte = 1500;
  defi = "Difficile (But: 1500pts)";
  document.getElementById("explique").innerHTML = defi;
  var btnActive1 = document.getElementById("facile");
  btnActive1.classList.remove("btn-selecte");
  var btnActive2 = document.getElementById("moyen");
  btnActive2.classList.remove("btn-selecte");
  var btnActive3 = document.getElementById("difficile");
  btnActive3.classList.add("btn-selecte");
}

//On commence avec 0 points
let clickConteur = 0;

//variable pour l'image de la panthere
let logo = document.getElementById("pic");

//on commence par gagnant 1 point par click
let point = 1


//variable pour la page avec les messages de bonne ou mauvaise reponse
let pageReponse = document.getElementById("pageReponse");

//variable pour la page avec les differentes questions
let pageQuestion = document.getElementById('pageQuestion');

//variable pour la page avec les questions a 75, 250, 450 et 900 points
let pageRecommence = document.getElementById("pageRecommence")
let recommenceReponse = document.getElementById("recommenceReponse")

//Ceci est la section dans la page qui affiche le nombre de points que le joueur gagne par click
document.getElementById("pointParClick").innerHTML = "Panthères par clic (ppc) : " + point;

//pour cacher les pages de question et de message de reponse
pageQuestion.style.display = 'none';
pageReponse.style.display = "none";
pageRecommence.style.display = "none";
recommenceReponse.style.display ="none";

//pour cacher les differentes pages que l'on ne veux pas afficher au debut du jeux
document.getElementById("pageTermine").style.display = "none";
document.getElementById("txtRegles2").style.display = "none";






//fonction qui affiche les explications du jeux sur la page
function regleAffiche2() {
  document.getElementById("txtRegles2").style.display ="block";
  document.getElementById("afficheBoutton").style.display="none";
}
//fonction qui cache les explications du jeux sur la page
function regleCache2() {
  document.getElementById("txtRegles2").style.display ="none";
  document.getElementById("afficheBoutton").style.display="block";
}


//fonction qui s'active avec chaque click de l'image de la panthere
function clicked() {
  clickConteur += point;
  document.getElementById("conteur").innerHTML = clickConteur;

  //les coordonnees aleatoires pour le deplacement de l'image
  var x = Math.floor(Math.random() * 300);
  var y = Math.floor(Math.random() * 300);
  var y2 = Math.floor(Math.random() * 300);
  
  logo.style.position = "relative";
  //on bouge l'image par les nombres aleatoires qu'on a eu dans les lignes de code precedent
  logo.style.top = x + "px"
  logo.style.left = y - y2 + "px";

  //lorsque le joueur atteint 75 points, 250 points, 450 points et 900 points, le joueur doit repondre une question
  if (clickConteur >= 75 && afficheQuesUn == 1) {
    recommence1();
  }
  if (clickConteur >= 250 && afficheQuesDeux == 1) {
    recommence2();
  }
  if (clickConteur >= 450 && afficheQuesTrois == 1) {
    recommence3();
  }
  if (clickConteur >= 900 && afficheQuesQuatre == 1) {
    recommence4();
  }




  //pour que le jeux se termine lorsque le joueur atteint le nombre de panathere cible
  //aussi, tous les bouttons et les ameliorations, et les changements faits par le joueur se reinitialisent
  while (clickConteur >= difficulte) {
    clickConteur = 0;
    foisJoue = foisJoue+1
    document.getElementById("conteur").innerHTML = clickConteur
    document.getElementById("pageTermine").style.display = "block";
    point = 1;
    termineTemp();
    document.getElementById("pointParClick").innerHTML = "Panthères par click (ppc): " + point;
    document.getElementById("plusUn").disabled = false;
    document.getElementById("plusDeux").disabled = false;
    document.getElementById("plusTrois").disabled = false;
    document.getElementById("plusQuatre").disabled = false;
    document.getElementById("plusCinq").disabled = false;
    document.getElementById("plusCinquante").disabled = false;
    var elements = document.getElementsByTagName("input");
    for (var i = 0 ; i < elements.length ; i++) {
    if (elements[i].type == "radio") {
      elements[i].checked = false;
    }
  }
    document.getElementById("minuterie").style.display = "none";
  }
}




// fonction qui montre la question pour continuer le jeux a 75 points
function recommence1() {
  pageRecommence.style.display = "block";
  document.getElementById("txtRecommence1").style.display="block";
  document.getElementById("txtRecommence2").style.display="none";
  document.getElementById("txtRecommence3").style.display="none";  
  document.getElementById("txtRecommence4").style.display="none";
}

//fonction qui verifie si le joueur a bien repondu
//si il ne repond pas bien, il perd tout ses points
function cnfrmRecommence1() {
  let recommenceReponse1 = document.getElementById("recommenceReponse1");
  pageRecommence.style.display = "none";
  recommenceReponse.style.display = "block";

  let recommence1 = document.getElementsByName("recommence1")

  if (recommence1[3].checked) {
    recommenceReponse1.innerHTML = "Bravo! bonne reponse, tu continues";
    clickConteur = clickConteur;
    afficheQuesUn = 0;
  } else {
    clickConteur = 0;
    recommenceReponse1.innerHTML = "Mauvaise reponse, tu as perdu tout tes points";
    document.getElementById("conteur").innerHTML = clickConteur;
    document.getElementById("7_1").checked = false;
    document.getElementById("7_2").checked = false;
    document.getElementById("7_3").checked = false;
    document.getElementById("7_4").checked = false;
  }
}

// fonction qui montre la question pour continuer le jeux a 250 points
function recommence2() {
  pageRecommence.style.display = "block";
  document.getElementById("txtRecommence1").style.display="none";
  document.getElementById("txtRecommence2").style.display="block";
  document.getElementById("txtRecommence3").style.display="none";  
  document.getElementById("txtRecommence4").style.display="none";
}

//fonction qui verifie si le joueur a bien repondu
//si il ne repond pas bien, il perd tout ses points
function cnfrmRecommence2 () {
  let recommenceReponse2 = document.getElementById("recommenceReponse2");
  pageRecommence.style.display = "none";
  recommenceReponse.style.display = "block";
  document.getElementById("recommenceReponse1").style.display="none" ;
  document.getElementById("recommenceReponse2").style.display="block";

  let recommence2 = document.getElementsByName("recommence2")

  if (recommence2[2].checked) {
    recommenceReponse2.innerHTML = "Bravo! bonne reponse, tu continues";
    clickConteur = clickConteur;
    afficheQuesDeux = 0;
  } else {
    clickConteur = 0;
    recommenceReponse2.innerHTML = "Mauvaise reponse, tu as perdu tout tes points";  
    document.getElementById("conteur").innerHTML = clickConteur;
    document.getElementById("8_1").checked = false;
    document.getElementById("8_2").checked = false;
    document.getElementById("8_3").checked = false;
    document.getElementById("8_4").checked = false;
  }
}

// fonction qui montre la question pour continuer le jeux a 450 points
function recommence3() {
  pageRecommence.style.display = "block";
  document.getElementById("txtRecommence1").style.display="none";
  document.getElementById("txtRecommence2").style.display="none";
  document.getElementById("txtRecommence3").style.display="block";  
  document.getElementById("txtRecommence4").style.display="none";
}

//fonction qui verifie si le joueur a bien repondu
//si il ne repond pas bien, il perd tout ses points
function cnfrmRecommence3 () {
  let recommenceReponse3 = document.getElementById("recommenceReponse3");
  pageRecommence.style.display = "none";
  recommenceReponse.style.display = "block";
  document.getElementById("recommenceReponse1").style.display="none" ;
  document.getElementById("recommenceReponse2").style.display="none" ;
  document.getElementById("recommenceReponse3").style.display="block" ;

  let recommence3 = document.getElementsByName("recommence3")

  if (recommence3[1].checked) {
    recommenceReponse3.innerHTML = "Bravo! bonne reponse, tu continues";
    clickConteur = clickConteur;
    afficheQuesTrois = 0;
  } else {
    clickConteur = 0;
    recommenceReponse3.innerHTML = "Mauvaise reponse, tu as perdu tout tes points";  
    document.getElementById("conteur").innerHTML = clickConteur;
    document.getElementById("9_1").checked = false;
    document.getElementById("9_2").checked = false;
    document.getElementById("9_3").checked = false;
    document.getElementById("9_4").checked = false;
  }
}

// fonction qui montre la question pour continuer le jeux a 900 points
function recommence4() {
  pageRecommence.style.display = "block";
  document.getElementById("txtRecommence1").style.display="none" ;
  document.getElementById("txtRecommence2").style.display="none" ;
  document.getElementById("txtRecommence3").style.display="none" ;  
  document.getElementById("txtRecommence4").style.display="block";
}

//fonction qui verifie si le joueur a bien repondu
//si il ne repond pas bien, il perd tout ses points
function cnfrmRecommence4 () {
  let recommenceReponse4 = document.getElementById("recommenceReponse4");
  pageRecommence.style.display = "none";
  recommenceReponse.style.display = "block";
  document.getElementById("recommenceReponse1").style.display="none" ;
  document.getElementById("recommenceReponse2").style.display="none" ;
  document.getElementById("recommenceReponse3").style.display="none" ;
  document.getElementById("recommenceReponse4").style.display="block";

  let recommence4 = document.getElementsByName("recommence4")

  if (recommence4[0].checked) {
    recommenceReponse4.innerHTML = "Bravo! bonne reponse, tu continues";
    clickConteur = clickConteur;
    afficheQuesQuatre = 0;
  } else {
    clickConteur = 0;
    recommenceReponse4.innerHTML = "Mauvaise reponse, tu as perdu tout tes points";  
    document.getElementById("conteur").innerHTML = clickConteur;
    document.getElementById("10_1").checked = false;document.getElementById("10_2").checked = false;
    document.getElementById("10_3").checked = false;
    document.getElementById("10_4").checked = false;  
    }
}




//fonctions pour les multiplicateurs

//cette fonction est pour le premier bouttons d'ameliorations
function multiChange1() {
  if (clickConteur < 10) {
    alert("Vous n'avez pas assez de points")
  } else {
    clickConteur -= 10;
    document.getElementById("conteur").innerHTML = clickConteur;
    pageQuestion.style.display = "block";
    document.getElementById("txtQuestion1").style.display = "block";
    document.getElementById("txtQuestion2").style.display = "none";
    document.getElementById("txtQuestion3").style.display = "none";
    document.getElementById("txtQuestion4").style.display = "none";
    document.getElementById("txtQuestion5").style.display = "none";
    document.getElementById("txtQuestion50").style.display = "none";
  }
}


//fonction qui verifie si l'utilisateur a choisi la bonne reponse
function qstConfirm1() {
  document.getElementById("txtReponse1").style.display = "block";
  document.getElementById("txtReponse2").style.display = "none";
  document.getElementById("txtReponse3").style.display = "none";
  document.getElementById("txtReponse4").style.display = "none";
  document.getElementById("txtReponse5").style.display = "none";
  document.getElementById("txtReponse50").style.display = "none";

  let msgReponse1 = document.getElementById("txtReponse1");
  pageQuestion.style.display = "none";
  pageReponse.style.display = "block";

  let qst1 = document.getElementsByName("qst1")

  if (qst1[0].checked) {
    msgReponse1.innerHTML = "Bravo! bonne reponse";
    point += 1
    document.getElementById("pointParClick").innerHTML = "Panthères par click (ppc): " + point;
    document.getElementById("plusUn").disabled = true;
    var btnActive = document.getElementById("plusUn");
    btnActive.classList.remove("btn-opacity-un");
    btnActive.classList.add("btn-opacity");
  } else {
    msgReponse1.innerHTML = "Mauvaise reponse";
    document.getElementById("1_1").checked = false;
    document.getElementById("1_2").checked = false;
    document.getElementById("1_3").checked = false;
    document.getElementById("1_4").checked = false;
  }
}


//cette fonction est pour le deuxieme bouttons d'ameliorations
function multiChange2() {
  if (clickConteur < 50) {
    alert("Vous n'avez pas assez de points")
  } else {
    clickConteur -= 50;
    document.getElementById("conteur").innerHTML = clickConteur;
    pageQuestion.style.display = "block";
    document.getElementById("txtQuestion2").style.display = "block";
    document.getElementById("txtQuestion1").style.display = "none";
    document.getElementById("txtQuestion3").style.display = "none";
    document.getElementById("txtQuestion4").style.display = "none";
    document.getElementById("txtQuestion5").style.display = "none";
    document.getElementById("txtQuestion50").style.display = "none";
  }
}

//fonction qui verifie si l'utilisateur a choisi la bonne reponse
function qstConfirm2() {
  document.getElementById("txtReponse2").style.display = "block";
  document.getElementById("txtReponse1").style.display = "none";
  document.getElementById("txtReponse3").style.display = "none";
  document.getElementById("txtReponse4").style.display = "none";
  document.getElementById("txtReponse5").style.display = "none";
  document.getElementById("txtReponse50").style.display = "none";

  let msgReponse2 = document.getElementById("txtReponse2");
  pageQuestion.style.display = "none";
  pageReponse.style.display = "block";

  let qst2 = document.getElementsByName("qst2")

  if (qst2[2].checked) {
    msgReponse2.innerHTML = "Bravo! bonne reponse";
    point += 2
    document.getElementById("pointParClick").innerHTML = "Panthères par click (ppc) : " + point;
    document.getElementById("plusDeux").disabled = true;
    var btnActive = document.getElementById("plusDeux");
    btnActive.classList.remove("btn-opacity-un");
    btnActive.classList.add("btn-opacity");
  } else {
    msgReponse2.innerHTML = "Mauvaise reponse";
    document.getElementById("2_1").checked = false;
    document.getElementById("2_2").checked = false;
    document.getElementById("2_3").checked = false;
    document.getElementById("2_4").checked = false;
  }

}


//cette fonction est pour le troisieme bouttons d'ameliorations
function multiChange3() {
  if (clickConteur < 100) {
    alert("Vous n'avez pas assez de points")
  } else {
    clickConteur -= 100;
    document.getElementById("conteur").innerHTML = clickConteur;
    pageQuestion.style.display = "block";
    document.getElementById("txtQuestion3").style.display = "block";
    document.getElementById("txtQuestion1").style.display = "none";
    document.getElementById("txtQuestion2").style.display = "none";
    document.getElementById("txtQuestion4").style.display = "none";
    document.getElementById("txtQuestion5").style.display = "none";
    document.getElementById("txtQuestion50").style.display = "none";
  }

}

//fonction qui verifie si l'utilisateur a choisi la bonne reponse
function qstConfirm3() {
  document.getElementById("txtReponse3").style.display = "block";
  document.getElementById("txtReponse1").style.display = "none";
  document.getElementById("txtReponse2").style.display = "none";
  document.getElementById("txtReponse4").style.display = "none";
  document.getElementById("txtReponse5").style.display = "none";
  document.getElementById("txtReponse50").style.display = "none";

  let msgReponse3 = document.getElementById("txtReponse3");
  pageQuestion.style.display = "none";
  pageReponse.style.display = "block";

  let qst3 = document.getElementsByName("qst3")

  if (qst3[0].checked) {
    msgReponse3.innerHTML = "Bravo! bonne reponse";
    point += 3
    document.getElementById("pointParClick").innerHTML = "Panthères par click (ppc) : " + point;
    document.getElementById("plusTrois").disabled = true;
    var btnActive = document.getElementById("plusTrois");
    btnActive.classList.remove("btn-opacity-un");
    btnActive.classList.add("btn-opacity");
  } else {
    msgReponse3.innerHTML = "Mauvaise reponse";
    document.getElementById("3_1").checked = false;
    document.getElementById("3_2").checked = false;
    document.getElementById("3_3").checked = false;
    document.getElementById("3_4").checked = false;
  }
}


//cette fonction est pour le quatrieme bouttons d'ameliorations
function multiChange4() {

  if (clickConteur >= 150) {
    clickConteur -= 150
    document.getElementById("conteur").innerHTML = clickConteur;
    pageQuestion.style.display = "block";
    document.getElementById("txtQuestion4").style.display = "block";
    document.getElementById("txtQuestion1").style.display = "none";
    document.getElementById("txtQuestion2").style.display = "none";
    document.getElementById("txtQuestion3").style.display = "none";
    document.getElementById("txtQuestion5").style.display = "none";
    document.getElementById("txtQuestion50").style.display = "none";
  } else {

    alert("Vous n'avez pas assez de points");
  }
}

//fonction qui verifie si l'utilisateur a choisi la bonne reponse
function qstConfirm4() {
  document.getElementById("txtReponse4").style.display = "block";
  document.getElementById("txtReponse1").style.display = "none";
  document.getElementById("txtReponse2").style.display = "none";
  document.getElementById("txtReponse3").style.display = "none";
  document.getElementById("txtReponse5").style.display = "none";
  document.getElementById("txtReponse50").style.display = "none";

  let msgReponse4 = document.getElementById("txtReponse4");
  pageQuestion.style.display = "none";
  pageReponse.style.display = "block";

  let qst4 = document.getElementsByName("qst4")

  if (qst4[1].checked) {
    msgReponse4.innerHTML = "Bravo! bonne reponse";
    point += 4
    document.getElementById("pointParClick").innerHTML = "Panthères par click (ppc) : " + point;
    document.getElementById("plusQuatre").disabled = true;
    var btnActive = document.getElementById("plusQuatre");
    btnActive.classList.remove("btn-opacity-un");
    btnActive.classList.add("btn-opacity");

  } else {
    msgReponse4.innerHTML = "Mauvaise reponse";
    document.getElementById("4_1").checked = false;
    document.getElementById("4_2").checked = false;
    document.getElementById("4_3").checked = false;
    document.getElementById("4_4").checked = false;
  }
}


//cette fonction est pour le cinquieme bouttons d'ameliorations
function multiChange5() {
  if (clickConteur < 200) {
    alert("Vous n'avez pas assez de points")
  } else {
    clickConteur -= 200;
    document.getElementById("conteur").innerHTML = clickConteur;
    pageQuestion.style.display = "block";
    document.getElementById("txtQuestion5").style.display = "block";
    document.getElementById("txtQuestion1").style.display = "none";
    document.getElementById("txtQuestion2").style.display = "none";
    document.getElementById("txtQuestion3").style.display = "none";
    document.getElementById("txtQuestion4").style.display = "none";
    document.getElementById("txtQuestion50").style.display = "none";
  }

}

//fonction qui verifie si l'utilisateur a choisi la bonne reponse
function qstConfirm5() {
  document.getElementById("txtReponse5").style.display = "block";
  document.getElementById("txtReponse1").style.display = "none";
  document.getElementById("txtReponse2").style.display = "none";
  document.getElementById("txtReponse3").style.display = "none";
  document.getElementById("txtReponse4").style.display = "none";
  document.getElementById("txtReponse50").style.display = "none";

  let msgReponse5 = document.getElementById("txtReponse5");
  pageQuestion.style.display = "none";
  pageReponse.style.display = "block";

  let qst5 = document.getElementsByName("qst5")

  if (qst5[3].checked) {
    msgReponse5.innerHTML = "Bravo! bonne reponse";
    point += 5
    document.getElementById("pointParClick").innerHTML = "Panthères par click (ppc) : " + point;
    document.getElementById("plusCinq").disabled = true;
    var btnActive = document.getElementById("plusCinq");
    btnActive.classList.remove("btn-opacity-un");
    btnActive.classList.add("btn-opacity");
  } else {
    msgReponse5.innerHTML = "Mauvaise reponse";
    document.getElementById("5_1").checked = false;
    document.getElementById("5_2").checked = false;
    document.getElementById("5_3").checked = false;
    document.getElementById("5_4").checked = false;
  }
}

//cette fonction est pour le dernier bouttons d'ameliorations
function multiChange50() {
  if (clickConteur < 500) {
    alert("Vous n'avez pas assez de points")
  } else {
    clickConteur -= 500;
    document.getElementById("conteur").innerHTML = clickConteur;
    pageQuestion.style.display = "block";
    document.getElementById("txtQuestion50").style.display = "block";
    document.getElementById("txtQuestion1").style.display = "none";
    document.getElementById("txtQuestion2").style.display = "none";
    document.getElementById("txtQuestion3").style.display = "none";
    document.getElementById("txtQuestion4").style.display = "none";
    document.getElementById("txtQuestion5").style.display = "none";
  }

}

//fonction qui verifie si l'utilisateur a choisi la bonne reponse
function qstConfirm50() {
  document.getElementById("txtReponse50").style.display = "block";
  document.getElementById("txtReponse1").style.display = "none";
  document.getElementById("txtReponse2").style.display = "none";
  document.getElementById("txtReponse3").style.display = "none";
  document.getElementById("txtReponse4").style.display = "none";
  document.getElementById("txtReponse5").style.display = "none";

  let msgReponse50 = document.getElementById("txtReponse50");
  pageQuestion.style.display = "none";
  pageReponse.style.display = "block";

  let qst6 = document.getElementsByName("qst6")

  if (qst6[2].checked) {
    msgReponse50.innerHTML = "Bravo! bonne reponse";
    point += 50
    document.getElementById("pointParClick").innerHTML = "Panthères par click (ppc) : " + point;
    document.getElementById("plusCinquante").disabled = true;
    var btnActive = document.getElementById("plusCinquante");
    btnActive.classList.remove("btn-opacity-un");
    btnActive.classList.add("btn-opacity");
  } else {
    msgReponse50.innerHTML = "Mauvaise reponse";
    document.getElementById("6_1").checked = false;
    document.getElementById("6_2").checked = false;
    document.getElementById("6_3").checked = false;
    document.getElementById("6_4").checked = false;
  }
}

// code pour le temps
var tempDebut;
var tempFin;
var highScore = 1000000;
var score = "";

// code executé quand on commence le jeux, commence la minuterie et cache des boutous
function commenceTemp() {
  //performance.now verifie combien de temps la page était affichée (en milisecondes)
  tempDebut = performance.now();
  document.getElementById("minuterie").style.display = "none";
  document.getElementById("record").style.display = "none";
}
//code executé quand le but est atteint
function termineTemp() {
  tempFin = performance.now();
  var diffTemp = tempFin - tempDebut;
//Transforme milisecondes en secondes
  diffTemp /= 1000;
//Transforme secondes en minutes et prend secondes de surplus
  var sec = parseInt(Math.round(diffTemp));
  minutes = sec / 60
  minutes = parseInt(Math.floor(minutes));
  var secExact = sec % 60
//Affiche text pour indiquer que le but est atteint
  document.getElementById("txtTermine").innerHTML = "Bravo! vous avez terminé en " + minutes +" Minute(s)"+ " et "+ secExact + " secondes";
//Affiche scores precedentes dans la table de temps pour etre acceder par l'utilisateur 
  score = score + "Tentative " + foisJoue +": " + minutes +" Minute(s)"+ " et "+ secExact + " secondes (" + nomDifficulte + ")<br>";
//verifie si le score enregistrer est mieux que le record, si il est il remplace celui-ci
  if (sec <= highScore) {
    highScore = sec;
    textRecord = minutes +" Minute(s)"+ " et "+ secExact + " secondes";
    document.getElementById("high").innerHTML = "Record: " + textRecord ;
  

  }
}


//fonction pour le boutton pour recommencer
//aussi, tous les bouttons se reinitialisent
function btnTermine() {
  document.getElementById("pageTermine").style.display = "none";  
  document.getElementById("minuterie").style.display = "block" ;
  let btnReset1 = document.getElementById("plusUn")
  btnReset1.classList.add("btn-opacity-un");
  let btnReset2 = document.getElementById("plusDeux")
  btnReset2.classList.add("btn-opacity-un");
  let btnReset3 = document.getElementById("plusTrois")
  btnReset3.classList.add("btn-opacity-un");
  let btnReset4 = document.getElementById("plusQuatre")
  btnReset4.classList.add("btn-opacity-un");
  let btnReset5 = document.getElementById("plusCinq")
  btnReset5.classList.add("btn-opacity-un");
  let btnReset50 = document.getElementById("plusCinquante")
  btnReset50.classList.add("btn-opacity-un");
  document.getElementById("record").style.display = "block";
}


//pour cacher les elements que l'on a pas besoin lorsque le joueur joues
document.getElementById("score").style.display = "none";
document.getElementById("retour-btn").style.display = "none";


//fonction qui affiche le menu des temps precedent
function afficheScore() {
  document.getElementById("score").style.display = "block";
  document.getElementById("txtScores").innerHTML = score
  document.getElementById("retour-btn").style.display = "block";
  document.getElementById("bouttonn").style.display = "none";
}

//fonction pour quitter le tableau avec les temps
function retourJeux() {
  document.getElementById("score").style.display = "none";
  document.getElementById("retour-btn").style.display = "none";
  document.getElementById("bouttonn").style.display = "block";

}

