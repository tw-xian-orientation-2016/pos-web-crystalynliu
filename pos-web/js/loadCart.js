$(document).ready(function () {
  var cart = getStorage('Cart');
  cart.forEach(function(cartItem){
    var item = findItem(cartItem.itemId);
    var tr = "<tr data-itemId='"+cartItem.itemId+"''><td>"
        +item.name+"</td><td>"+item.price
        +"</td><td><input name='countInput' data-itemId='"+cartItem.itemId+"' value='"
        +cartItem.count+"''></td><td>"+item.unit+"</td><td name='subtotal'>"
        +priceFormat(cartItem.subtotal)+"</td><td><button name='delete' data-itemId='"
        +cartItem.itemId+"'class='btn btn-danger'>"
        +"<span class='glyphicon glyphicon glyphicon-trash'></span></button></td></tr>";
    $("#cartlist").append(tr);
  })
  $('#totalCount').text(getItemsCount(cart));
  var tradeRecord = getStorage("TradeRecord");
  $('#recordCount').text(tradeRecord.length);
  var totalprice = calculateTotalPrice(cart);
  $('#totalprice').text(priceFormat(totalprice));
    var star = getStorage('star');
  $('#star').text(star.star);
  $('#unstar').text(star.unstar);
})

$('#cartlist').on('change','[name=countInput]',function(){
    var count = $(this).val();
    if(count===""){
      count=1;
      $(this).val(count);
    }
    var itemId = $(this).data("itemid");
    var cart = updateCart(itemId,count);
    $('#totalCount').text(getItemsCount(cart));
    var index = findIndexofCart(itemId,cart);
    $(this).parent().siblings('[name=subtotal]').text(priceFormat(cart[index].subtotal));
    var totalprice = calculateTotalPrice(cart);
    $('#totalprice').text(priceFormat(totalprice));
})

$('#cartlist').on('click','[name=delete]',function(){
    var itemId = $(this).data("itemid");
    var cart = deleteCartItem(itemId);

    $('#totalCount').text(getItemsCount(cart));
    var trDel = $('tr[data-itemid='+itemId+']');
    trDel.remove();
    var totalprice = calculateTotalPrice(cart);
    $('#totalprice').text(priceFormat(totalprice));
})

$('#checkout').click(function(){
  var cart = getStorage("Cart");
  var tradeRecord = getStorage("TradeRecord");
  var myDate = new Date();
  var now = myDate.toLocaleString( );
  var receipt = {cart:cart,totalprice:calculateTotalPrice(cart),time:now};
  setStorage("tempReceipt",receipt);
  tradeRecord.push(receipt);
  setStorage("TradeRecord",tradeRecord);
  UpdateItemHeart(cart);
  setStorage("Cart",[]);
  location.href="receipt.html";
})