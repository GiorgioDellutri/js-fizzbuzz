for (let i = 1; i <= 100; i++) {
    if (((i %  3) == 0 ) && ((i % 5) == 0)){

    console.log('fizbuzz')
    }

    if ( (i %  3) == 0 ) {

        console.log('fizz');
    } else if ((i % 5) == 0){

        console.log('buzz');
    } else {
        console.log(i)
    }
}



// BONUS 1:
// Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

