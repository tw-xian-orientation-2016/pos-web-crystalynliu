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