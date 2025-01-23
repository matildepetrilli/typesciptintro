/*1) Quali sono i tipi primitivi principali in TypeScript?
-null
-undefind
-numero
-stringa
-boleani
-any*/

/*2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.*/
let myName: string = "matilde";
let myAge: number = 23;
let myStudy: boolean = true;

/*3) Tipizza il parametro della seguente funzione:*/

const greet = (name:string):string => {  return "Ciao " + name ;}

console.log(greet('matilde'));

/*4) Specifica il tipo di ritorno della seguente funzione:*/

const sum = (a: number, b: number): number => {  return a + b }

console.log(4,5);

/*5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.*/

const calcolaPrezzoConIva = (prezzo: number): number => {
    const iva = (22/100);
    const prezzoConIva = prezzo + iva ;
    return prezzoConIva;
  }

  console.log(20);
/*6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.*/

const strSum=(stringa1:string,stringa2:string) :string =>{
return stringa1 + stringa2;
}

console.log(strSum('bella','ciao'));

/*7) Cos'è un Type Union e come si scrive?*/
/*insica che la variabile può essere di diverso dipo e si indica con il simbolo "|"*/

function variabile (valore:string | number){
    console.log(valore)
}

variabile('ciao');
variabile(55);

/*8) Crea una variabile che possa contenere un numero, null o undefined.*/
let indecisa: number|null|undefined;

/*9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.*/
type days= 'lunedi'|'martedi'|'mercoledì'|'giovedi'|'venerdi'|'sabato'|'domenica';
let settimanaDay : days;



/*10) Tipizza il seguente array di numeri nei due modi possibili:*/

const numbers = [1, 2, 3]

/*11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.*/

/*12) Qual è la differenza tra type e interface?*/

/*13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".*/

/*14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.*/

/*15) Crea un array tipizzato di oggetti "Studente" con nome e voto.*/

/*16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".*/

/*17) Crea un oggetto che implementi l'interfaccia Auto.*/

/*18) Cosa sono i Generics in TypeScript?*/

/*19) È possibile avere più tipi generici in un'interfaccia?*/

/*20) Crea un'interfaccia generica per una risposta API. */