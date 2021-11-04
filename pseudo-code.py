affiche (bouttons de difficulté)
si (facile) {
  limite de point = 800
}
si (moyen) {
  limite de point = 1000
}
si (difficile) {
  limite de point = 1500
}

si (click sur le boutton 'table de temps') {
  affiche (tout les temps precedents)
  si (click sur le x) {
    cache la section de temps
  }
}

si (click sur le boutton d'aide) {
  affiche (les règles de jeu)
  si (click sur le x) {
    cache la section d'aide
  }
}

si (click sur le boutton 'debut') {
  commence le chronometre
  cache les bouttons de difficulté et la section d'acceuil
}


//commencement du jeu

points = 0
points par click = 1
si (10 points ou plus) {
  Si (cliqué sur l"amelioration +1 par click) {
      affiche (question 1)
      si (bonne reponse) {
        points par click = points par click + 1
      } sinon {
        points par click ne change pas
      }
  } 
}
si (50 points ou plus) {
  Si (cliqué sur l"amelioration +2 par click) {
      affiche (question 2)
      si (bonne reponse) {
        points par click = points par click + 2
      } sinon {
        points par click ne change pas
      }
  } 
}

si (points = 75) {
  affiche (question obligatoire 1)
1  si (bonne reponse) {
    le joueur continue le jeu normalement
  } sinon {
    le joueur perd tout ses points
  }
}

si (100 points ou plus) {
  Si (cliqué sur l"amelioration +3 par click) {
      affiche (question 3)
      si (bonne reponse) {
        points par click = points par click + 3
      } sinon {
        points par click ne change pas
      }
  } 
}
si (150 points ou plus) {
  Si (cliqué sur l"amelioration +4 par click) {
      affiche (question 4)
      si (bonne reponse) {
        points par click = points par click + 4
      } sinon {
        points par click ne change pas
      }
  } 
}
si (200 points ou plus) {
  Si (cliqué sur l"amelioration +5 par click) {
      affiche (question 5)
      si (bonne reponse) {
        points par click = points par click + 5
      } sinon {
        points par click ne change pas
      }
  } 
}

si (points = 250) {
  affiche la deuxieme question obligatoire
  si (bonne reponse) {
    le joueur continue le jeu normalement
  } sinon {
    le joueur perd tout ses points
  }
}

si (points = 450) {
  affiche (question obligatoire 3)
  si (bonne reponse) {
    le joueur continue le jeu normalement
  } sinon {
    le joueur perd tout ses points
  }
}

si (500 points ou plus) {
  Si (cliqué sur l"amelioration +50 par click) {
      affiche (question 6)
      si (bonne reponse) {
        points par click = points par click + 50
      } sinon {
        points par click ne change pas
      }
  } 
}

si (points = 900) {
  affiche (question obligatoire 4)
  si (bonne reponse) {
    le joueur continue le jeu normalement
  } sinon {
    le joueur perd tout ses points
  }
}


si (joueur atteint la limite) {
  arrete le chronometre
  met le temps récent dans la table de temps 
  reinitialise les points par click, les points, et les questions
}