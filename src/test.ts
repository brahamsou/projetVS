type Classe = "6eme" | "5eme" | "4eme" | "3eme" | "2nd" | "1er" | "terminal";

type Sexe = "homme" | "femme" | "non binaire";

type Eleve = {
  nom: string;
  prenom: string;
  age: number;
  sexe: Sexe;
  classe: Classe;
  notes: number[];
};

const john: Eleve = {
  nom: "Doe",
  prenom: "John",
  age: 14,
  sexe: "non binaire",
  classe: "4eme",
  notes: [12, 14, 8, 17, 0]
};

/**
 * Faire la fonction de calcule
 */


/**

 * Faire la fonction de calcule
 */


// Calculer la myenne de john

// Créer un nouvelle éléve : Rose
// Afficher et calculer la moyenne :)


/*
function getAverage(eleve: Eleve) {
  let moy = 0

  for (let note of eleve.notes) {
    moy = note / notes.length - 1
  }

  return 
  
}



const moyenne =getAverage(john) 
console.log(moyenne)*/


// Création de notes


function getAverage(eleve: Eleve) {
  
  const moyenne = notes.reduce((acc, note) => acc + note, 0) / notes.length
}
console.log(getAverage(eleve: Eleve))
// On réduit les notes à une moyenne
//moyenne 10.5


/*
function calculerMoyenne(notes) {
  let total = notes.reduce((acc, note) => acc + note, 0);

  return total / notes.length;
}*/



