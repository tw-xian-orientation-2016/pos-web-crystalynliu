function addCart(itemId) {
  var cart = getStorage('Cart')
  var index = findIndexofCart(itemId,cart);
  var price = findItem(itemId).price;
  
  if(index===-1){
    cart.push({itemId:itemId,count:1,subtotal:price});
  }else{
    cart[index].count++;
    cart[index].subtotal+=price;
  }
  setStorage('Cart',cart);
  return cart.length;
}

function updateCart(itemId,count) {
  var cart = getStorage('Cart')
  var index = findIndexofCart(itemId,cart);
  var price = findItem(itemId).price;

  cart[index].count=count;
  cart[index].subtotal=count*price;

  setStorage('Cart',cart);
  return cart;
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

function calculateTotalPrice(cart){
  var totalPrice = cart.reduce(function(p,c){
    return p+=c.subtotal;
  },0)
  return totalPrice;
}

function deleteCartItem(itemId){
  var cart = getStorage("Cart");
  var newCart = cart.filter(function(cartItem){
    if(cartItem.itemId!=itemId){
      return cartItem;
    }
  })
  setStorage("Cart",newCart);
  return newCart;
}