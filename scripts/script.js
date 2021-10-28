var afficheQuesUn = 1;
var afficheQuesDeux = 1;
var afficheQuesTrois = 1;
var afficheQuesQuatre = 1;

//On commence avec 0 points
let clickConteur = 0;

//variable pour l'image de la panthere
let logo = document.getElementById("pic");

//on commence par gagnant 1 point par click
let point = 1

let pageReponse = document.getElementById("pageReponse");
let pageQuestion = document.getElementById('pageQuestion');

//Ceci est la section dans la page qui affiche le nombre de points que le joueur gagne par click
document.getElementById("pointParClick").innerHTML = "Pantheres par click: " + point;

//pour cacher les pages de question et de mauvaise reponse
pageQuestion.style.display = 'none';
pageReponse.style.display = "none";


//fonction qui s'active avec chaque click de l'image de la panthere
function clicked() {
  clickConteur += point;
  document.getElementById("conteur").innerHTML = clickConteur;

  //les coordonnees aleatoires pour le deplacement de l'image
  var x = Math.floor(Math.random() * 375);
  var y = Math.floor(Math.random() * 375);
  var y2 = Math.floor(Math.random() * 375);
  logo.style.position = "relative";
  logo.style.top = x + "px"
  logo.style.left = y - y2 + "px";

  if (clickConteur >= 50 && afficheQuesUn == 1) {
    recommence1();
  }
  if (clickConteur >= 200 && afficheQuesDeux == 1) {
    recommence2();
  }
  if (clickConteur >= 500 && afficheQuesTrois == 1) {
    recommence3();
  }
  if (clickConteur >= 900 && afficheQuesQuatre == 1) {
    recommence4();
  }

  //pour que le jeux se termine lorsque l'utilisateur appuis les pantheres besoins
  if (clickConteur >= 1000) {
    clickConteur = 0;
    alert("terminer");
    point = 1
    document.getElementById("pointParClick").innerHTML = "Points par click: " + point;
    document.getElementById("plusUn").disabled = false;
    document.getElementById("plusDeux").disabled = false;
    document.getElementById("plusTrois").disabled = false;
    document.getElementById("plusQuatre").disabled = false;
    document.getElementById("plusCinq").disabled = false;
    document.getElementById("plusDix").disabled = false;
    termineTemp();
    document.getElementById("conteur").innerHTML = clickConteur;
    document.getElementById("minuterie").style.display = "block";
  }



}

function recommence1() {
  var continueUn = prompt("1+1=");
  if (continueUn == 2) {
    clickConteur = clickConteur;
    alert("Bonne reponse");
    afficheQuesUn = 0;
  } else {
    clickConteur = 0;
    alert("Mauvaise Reponse recommence a 0");

  }
}
function recommence2() {
  var continueDeux = prompt("1+1=");
  if (continueDeux == 2) {
    alert("Bonne reponse");
    clickConteur = clickConteur;
    afficheQuesDeux = 0;
  } else {
    alert("Mauvaise Reponse recommence a 0");
    clickConteur = 0;
  }
}
function recommence3() {
  var continueTrois = prompt("1+1=");
  if (continueTrois == 2) {
    alert("Bonne reponse");
    clickConteur = clickConteur;
    afficheQuesTrois = 0;
  } else {
    alert("Mauvaise Reponse recommence a 0");
    clickConteur = 0;
  }
}
function recommence4() {
  var continueQuatre = prompt("1+1=");
  if (continueQuatre == 2) {
    alert("Bonne reponse");
    clickConteur = clickConteur;
    afficheQuesQuatre = 0;
  } else {
    alert("Mauvaise Reponse recommence a 0");
    clickConteur = 0;
  }
}






//fonctions pour les multiplicateurs
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
    document.getElementById("txtQuestion10").style.display = "none";
  }
}

function qstConfirm1() {
  document.getElementById("txtReponse1").style.display = "block";
  document.getElementById("txtReponse2").style.display = "none";
  document.getElementById("txtReponse3").style.display = "none";
  document.getElementById("txtReponse4").style.display = "none";
  document.getElementById("txtReponse5").style.display = "none";
  document.getElementById("txtReponse10").style.display = "none";

  let msgReponse1 = document.getElementById("txtReponse1");
  pageQuestion.style.display = "none";
  pageReponse.style.display = "block";

  let qst1 = document.getElementsByName("qst1")

  if (qst1[0].checked) {
    msgReponse1.innerHTML = "Bravo! bonne reponse";
    point += 1
    document.getElementById("pointParClick").innerHTML = "Points par click: " + point;
    document.getElementById("plusUn").disabled = true;
    var btnActive = document.getElementById("plusUn");
    btnActive.classList.add("btn-opacity");
  } else {
    msgReponse1.innerHTML = "Mauvaise reponse";
  }
}


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
    document.getElementById("txtQuestion10").style.display = "none";
  }
}

function qstConfirm2() {
  document.getElementById("txtReponse2").style.display = "block";
  document.getElementById("txtReponse1").style.display = "none";
  document.getElementById("txtReponse3").style.display = "none";
  document.getElementById("txtReponse4").style.display = "none";
  document.getElementById("txtReponse5").style.display = "none";
  document.getElementById("txtReponse10").style.display = "none";

  let msgReponse2 = document.getElementById("txtReponse2");
  pageQuestion.style.display = "none";
  pageReponse.style.display = "block";

  let qst2 = document.getElementsByName("qst2")

  if (qst2[2].checked) {
    msgReponse2.innerHTML = "Bravo! bonne reponse";
    point += 2
    document.getElementById("pointParClick").innerHTML = "Points par click: " + point;
    document.getElementById("plusDeux").disabled = true;
    var btnActive = document.getElementById("plusDeux");
    btnActive.classList.add("btn-opacity");
  } else {
    msgReponse2.innerHTML = "Mauvaise reponse";
  }

}



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
    document.getElementById("txtQuestion10").style.display = "none";
  }

}


function qstConfirm3() {
  document.getElementById("txtReponse3").style.display = "block";
  document.getElementById("txtReponse1").style.display = "none";
  document.getElementById("txtReponse2").style.display = "none";
  document.getElementById("txtReponse4").style.display = "none";
  document.getElementById("txtReponse5").style.display = "none";
  document.getElementById("txtReponse10").style.display = "none";

  let msgReponse3 = document.getElementById("txtReponse3");
  pageQuestion.style.display = "none";
  pageReponse.style.display = "block";

  let qst3 = document.getElementsByName("qst3")

  if (qst3[0].checked) {
    msgReponse3.innerHTML = "Bravo! bonne reponse";
    point += 3
    document.getElementById("pointParClick").innerHTML = "Points par click: " + point;
    document.getElementById("plusTrois").disabled = true;
    var btnActive = document.getElementById("plusTrois");
    btnActive.classList.add("btn-opacity");
  } else {
    msgReponse3.innerHTML = "Mauvaise reponse";
  }
}

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
    document.getElementById("txtQuestion10").style.display = "none";
  } else {

    alert("Vous n'avez pas assez de points");
  }
}


function qstConfirm4() {
  document.getElementById("txtReponse4").style.display = "block";
  document.getElementById("txtReponse1").style.display = "none";
  document.getElementById("txtReponse2").style.display = "none";
  document.getElementById("txtReponse3").style.display = "none";
  document.getElementById("txtReponse5").style.display = "none";
  document.getElementById("txtReponse10").style.display = "none";

  let msgReponse4 = document.getElementById("txtReponse4");
  pageQuestion.style.display = "none";
  pageReponse.style.display = "block";

  let qst4 = document.getElementsByName("qst4")

  if (qst4[1].checked) {
    msgReponse4.innerHTML = "Bravo! bonne reponse";
    point += 4
    document.getElementById("pointParClick").innerHTML = "Points par click: " + point;
    document.getElementById("plusQuatre").disabled = true;
    var btnActive = document.getElementById("plusQuatre");
    btnActive.classList.add("btn-opacity");

  } else {
    msgReponse4.innerHTML = "Mauvaise reponse";
  }
}



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
    document.getElementById("txtQuestion10").style.display = "none";
  }

}


function qstConfirm5() {
  document.getElementById("txtReponse5").style.display = "block";
  document.getElementById("txtReponse1").style.display = "none";
  document.getElementById("txtReponse2").style.display = "none";
  document.getElementById("txtReponse3").style.display = "none";
  document.getElementById("txtReponse4").style.display = "none";
  document.getElementById("txtReponse10").style.display = "none";

  let msgReponse5 = document.getElementById("txtReponse5");
  pageQuestion.style.display = "none";
  pageReponse.style.display = "block";

  let qst5 = document.getElementsByName("qst5")

  if (qst5[3].checked) {
    msgReponse5.innerHTML = "Bravo! bonne reponse";
    point += 5
    document.getElementById("pointParClick").innerHTML = "Points par click: " + point;
    document.getElementById("plusCinq").disabled = true;
    var btnActive = document.getElementById("plusCinq");
    btnActive.classList.add("btn-opacity");
  } else {
    msgReponse5.innerHTML = "Mauvaise reponse";
  }
}

function multiChange10() {
  if (clickConteur < 500) {
    alert("Vous n'avez pas assez de points")
  } else {
    clickConteur -= 500;
    document.getElementById("conteur").innerHTML = clickConteur;
    pageQuestion.style.display = "block";
    document.getElementById("txtQuestion10").style.display = "block";
    document.getElementById("txtQuestion1").style.display = "none";
    document.getElementById("txtQuestion2").style.display = "none";
    document.getElementById("txtQuestion3").style.display = "none";
    document.getElementById("txtQuestion4").style.display = "none";
    document.getElementById("txtQuestion5").style.display = "none";
  }

}


function qstConfirm10() {
  document.getElementById("txtReponse10").style.display = "block";
  document.getElementById("txtReponse1").style.display = "none";
  document.getElementById("txtReponse2").style.display = "none";
  document.getElementById("txtReponse3").style.display = "none";
  document.getElementById("txtReponse4").style.display = "none";
  document.getElementById("txtReponse5").style.display = "none";

  let msgReponse10 = document.getElementById("txtReponse10");
  pageQuestion.style.display = "none";
  pageReponse.style.display = "block";

  let qst6 = document.getElementsByName("qst6")

  if (qst6[2].checked) {
    msgReponse10.innerHTML = "Bravo! bonne reponse";
    point += 10
    document.getElementById("pointParClick").innerHTML = "Points par click: " + point;
    document.getElementById("plusDix").disabled = true;
    var btnActive = document.getElementById("plusDix");
    btnActive.classList.add("btn-opacity");
  } else {
    msgReponse10.innerHTML = "Mauvaise reponse";
  }
}


// code pour le temps
var tempDebut;
var tempFin;
var highScore = 1000000;
var score = "";

function commenceTemp() {
  tempDebut = performance.now();
  document.getElementById("minuterie").style.display = "none";
  document.getElementById("record").style.display = "none";

};

function termineTemp() {
  tempFin = performance.now();
  var diffTemp = tempFin - tempDebut; //in ms 
  // strip the ms 
  diffTemp /= 1000;

  // get seconds 
  var sec = parseInt(Math.round(diffTemp));
  alert(sec + " secondes");
  score = score + sec + " secondes<br>"
  if (sec <= highScore) {
    highScore = sec;
    document.getElementById("high").innerHTML = "Record: " + highScore + "s";
    document.getElementById("high2").innerHTML = "Record: " + highScore + "s";

  }
  document.getElementById("record").style.display = "block";
}

document.getElementById("score").style.display = "none";
document.getElementById("retour-btn").style.display = "none";

function afficheScore() {
  document.getElementById("score").style.display = "block";
  document.getElementById("txtScores").innerHTML = score
  document.getElementById("retour-btn").style.display = "block";
}

function retourJeux() {
  document.getElementById("score").style.display = "none";
  document.getElementById("retour-btn").style.display = "none";
}

