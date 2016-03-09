function findItem(itemId) {
  var item;
  var items = getStorage('Items');
  items.forEach(function(currentItem){
    if(currentItem.itemId==itemId){
      item = currentItem;
    }
  })
  return item;
}

function UpdateItemHeart(cart){
  var items = getStorage('Items');
  var newItems = items.map(function(item){
    cart.forEach(function(cartItem){
      if(item.itemId == cartItem.itemId){
        item.heart ++ ;
      }
    })
    return item;
  })
  setStorage("Items",newItems);
}