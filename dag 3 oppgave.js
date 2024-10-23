// oppgave 1
// = er brukt for å tildele verdier som for eks
// let x = "14";

// == skjekker om verdiene er like og bare er en (løs sammenligning) og kan konvertere de, til samme type om nødvenig, som for eks
// 14 == 14

// === skjekker for likheter uten å kovertere typene (streng sammenligning)
// 14 === 14

//OPPGAVE 2

// de blir brukt til å sjekke om en verdi oppfyller visse kriterier
// de kan brukes til å Kjørt på ulik kode basert på brukerens input
// de kan brukes til å Styre loops eller kompleks programlogikk

//eksempel 1
// let age = 18;
// if (age >= 18) {
//   console.log("You are an adult.");
// }

//eksempel 2
let isRaining = true;
if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("No need for an umbrella.");
}

//OPPGAVE 3

let x = 10;

if (x === 10) {
  console.log("True");
} else {
  console.log("False");
}

//OPPGAVE 4

let age = 20;
let hasDriversLicense = true;

if (age >= 18 && hasDriversLicense) {
  console.log("Go for a drive!");
} else {
  console.log("You should stay inside.");
}

//OPPGAVE 5

const userName = "bob";
let userAge = 21;

let userIsAdmin = false;
let userIsLoggIn = false;
let userIsBlocked = false;

let goToPage = "";

if (!userName == "" && userAge >= 18 && !userIsBlocked && !userIsAdmin) {
  userIsLoggIn = true;
  goToPage = "/home";
} else if (userIsAdmin) {
  userIsAdmin = true;
  goToPage = "/admin";
} else {
  goToPage = "/logIn";
}
console.log(goToPage);
