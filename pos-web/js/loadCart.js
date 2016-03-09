$(document).ready(function () {
  var cart = getStorage('Cart');
  cart.forEach(function(cartItem){
    var item = findItem(cartItem.itemId);
    var tr = "<tr data-itemId='"+cartItem.itemId+"''><td>"
        +item.name+"</td><td>"+item.price
        +"</td><td><input name='countInput' data-itemId='"+cartItem.itemId+"' value='"
        +cartItem.count+"''></td><td>"+item.unit+"</td><td name='subtotal'>"
        +cartItem.subtotal+"</td><td><button data-itemId='"
        +cartItem.itemId+"'class='btn btn-danger'>"
        +"<span class='glyphicon glyphicon glyphicon-trash'></span></button></td></tr>";
    $("#cartlist").append(tr);
  })
  $('#totalCount').text(cart.length);
  var tradeRecord = getStorage("Receipts");
  $('#recordCount').text(tradeRecord.length);
  var totalprice = calculateTotalPrice(cart);
  $('#totalprice').text("$"+totalprice);
})

$('#cartlist').on('change','[name=countInput]',function(){
    var count = $(this).val();
    var itemId = $(this).data("itemid");
    var cart = updateCart(itemId,count);
    $('#totalCount').text(cart.length);
    var index = findIndexofCart(itemId,cart);
    $(this).parent().siblings('[name=subtotal]').text(cart[index].subtotal);
    var totalprice = calculateTotalPrice(cart);
    $('#totalprice').text("$"+totalprice);
})