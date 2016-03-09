$(document).ready(function () {
  var items = getStorage('Items');
  if(items === null){
    initStorage();
    items = getStorage('Items');
  }
  items.forEach(function(item){
    var tr = "<tr><td>"+item.name+"</td><td>"+
    item.unit+"</td><td>"+item.price+"</td><td>"+
    "<span class='glyphicon glyphicon-heart'></span>"+item.heart+
    "</td><td><button name='addCart' data-itemId='"+item.itemId+
    "' class='btn btn-danger'><span class='glyphicon glyphicon-shopping-cart'>"
    +"</span></button></td></tr>";
    $("#itemlist").append(tr);
  })
  var cart = getStorage('Cart');
  $('#cartCount').text(cart.length);
  var tradeRecord = getStorage("Receipts");
  $('#recordCount').text(tradeRecord.length);
})


$('#itemlist').on('click','button[name=addCart]',function(){
  var itemId = $(this).data('itemid');
  var cartCount = addCart(itemId);
  $('#cartCount').text(cartCount);
})

