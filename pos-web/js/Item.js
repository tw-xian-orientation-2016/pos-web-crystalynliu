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

function getItemsCount(cart){
  var count = 0;
  cart.forEach(function(cartItem){
    count+=parseInt(cartItem.count);
  })
  return count;
}

function priceFormat(price){
  if(!/\./.test(price)) //为整数字符串在末尾添加.00
      price += '.00';
  price += '00';        //在字符串末尾补零
  price = "$" + price.match(/\d+\.\d{2}/)[0];
  return price;
};