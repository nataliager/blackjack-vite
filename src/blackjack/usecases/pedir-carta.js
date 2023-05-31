
/**
 * Get a card from the deck
 * @param {Array<String>} deck Ex: ['3C','2D','6H','7S']
 * @returns {String} Returns a card from the deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 || deck.length < 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}