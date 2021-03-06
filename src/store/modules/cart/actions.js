// export function addToCart(id) {
//   return {
//     type: '@cart/ADD_TO_CART',
//     id,
//   };
// }

export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}
export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE_FROM_CART',
    id: id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
