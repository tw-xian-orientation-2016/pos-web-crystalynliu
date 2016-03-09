function updateCart(itemId) {
  var cart = getStorage('Cart')
  var index = findIndexofCart(itemId,cart);
  var price = findItem(itemId).price;
  
  if(index==-1){
    cart.push({itemId:itemId,count:1,subtotal:price});
  }else{
    cart[index].count++;
    cart[index].subtotal+=price;
  }
  setStorage('Cart',cart);
  return cart.length;
}

function findIndexofCart(itemId,Cart){
  var index = -1;
    Cart.forEach(function(cartItem,i){
      if(cartItem.itemId==itemId){
        index=i;
      }
    })
  return index;
}