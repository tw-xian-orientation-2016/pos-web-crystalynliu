$(document).ready(function () {
  var receipt = getStorage('tempReceipt');

  receipt.cart.forEach(function(cartItem){
    var item = findItem(cartItem.itemId);
    var tr = "<tr><td>"
        +item.name+"</td><td>"+priceFormat(item.price)
        +"</td><td>"+cartItem.count+"</td><td>"
        +item.unit+"</td><td name='subtotal'>"
        +priceFormat(cartItem.subtotal)+"</td></tr>";
    $("#cartlist").append(tr);
  })
  $('#totalCount').text(getItemsCount(receipt.cart));
  $('#totalprice').text(priceFormat(receipt.totalprice));
  var tradeRecord = getStorage("TradeRecord");
  $('#recordCount').text(tradeRecord.length);
  $('#receiptTime').text(receipt.time);
  loadStar();
})