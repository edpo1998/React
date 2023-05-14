/*
 * This function calcultate total price of a new order
 * @param {Array} products cartProduct: Array objects
 * @returns {number} Total Price
 *
*/
export const totalPrice = (products) =>{
    return products.reduce((sum, product) => sum + product.price,0)
}
