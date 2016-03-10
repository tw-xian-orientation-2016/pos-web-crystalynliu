$(document).ready(function () {
  var items = getStorage('Items');
  if(items === null){
    initStorage();
    items = getStorage('Items');
  }
  items.forEach(function(item){
    var tr = "<tr><td>"+item.name+"</td><td>"+priceFormat(item.price)+
    "</td><td>"+item.unit+"</td><td>"+
    "<i id='heart' class='glyphicon icon-heart'></i>"+item.heart+
    "</td><td><button name='addCart' data-itemId='"+item.itemId+
    "' class='btn btn-danger'><span class='glyphicon glyphicon-shopping-cart'>"
    +"</span></button></td></tr>";
    $("#itemlist").append(tr);
  })
  var cart = getStorage('Cart');
  $('#cartCount').text(getItemsCount(cart));
  var tradeRecord = getStorage("TradeRecord");
  $('#recordCount').text(tradeRecord.length);
  var star = getStorage('star');
  $('#star').text(star.star);
  $('#unstar').text(star.unstar);
})


$('#itemlist').on('click','button[name=addCart]',function(){
  var itemId = $(this).data('itemid');
  var cartCount = addCart(itemId);
  $('#cartCount').text(cartCount);
})

