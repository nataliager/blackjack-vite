
/**
 * Get the value of the card 
 * @param {String} card Ex: '3C'
 * @returns {Number} Returns value of the card
 */
export const valorCarta = ( card ) => {

    const val = card.substring(0, card.length - 1);
    return ( isNaN( val ) ) ? 
            ( val === 'A' ) ? 11 : 10
            : val * 1;
}