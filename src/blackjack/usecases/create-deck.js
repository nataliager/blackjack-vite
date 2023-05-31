import _ from 'underscore'

//export const miNombre = 'natalia';

/**
 * Create a new deck 
 * @param {Array<String>} tiposDeCarta Ex: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ex: ['A','J','Q','K']
 * @returns {Array<String>} Returns a new deck 
 */
export const crearDeck = ( tiposDeCarta , tiposEspeciales) => {
    
    if ( !tiposDeCarta  || tiposDeCarta === 0) 
        throw new Error ('tipos de carta es obligatorio como un arreglo de string');
    if ( !tiposEspeciales  || tiposEspeciales === 0) 
        throw new Error ('tipos esoeciales es obligatorio como un arreglo de string');

    let deck = [];
        
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );
    
    return deck;
}

//export default crearDeck;