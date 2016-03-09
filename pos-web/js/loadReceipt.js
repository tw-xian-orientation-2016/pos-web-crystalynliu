$(document).ready(function () {
  var receipt = getStorage('tempReceipt');

  receipt.cart.forEach(function(cartItem){
    var item = findItem(cartItem.itemId);
    var tr = "<tr><td>"
        +item.name+"</td><td>"+item.price
        +"</td><td>"+cartItem.count+"</td><td>"
        +item.unit+"</td><td name='subtotal'>"
        +cartItem.subtotal+"</td></tr>";
    $("#cartlist").append(tr);
  })
  $('#totalCount').text(receipt.cart.length);
  $('#totalprice').text("$"+receipt.totalprice);
  var tradeRecord = getStorage("TradeRecord");
  $('#recordCount').text(tradeRecord.length);
})