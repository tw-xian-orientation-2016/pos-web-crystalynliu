$(document).ready(function () {
  var tradeRecord = getStorage('TradeRecord');
  var allPrice=0;
  tradeRecord.forEach(function(record){
    allPrice+=record.totalprice;
    var tr = "<tr data-time='"+record.time+"'><td>"+record.time+"</td><td>"
        +record.cart.length+"</td><td name='total'>"+record.totalprice
        +"</td><td><button name='details' data-time='"+record.time
        +"' class='btn btn-primary'><span class='glyphicon glyphicon-list-alt'>"
        +"</span></button></td><td><button name='delete' data-time='"+record.time
        +"' class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span>"
           + "</button></td></tr>";
    $("#recodelist").append(tr);

  })
  $('#allprice').text("$"+allPrice);
})

$('#recodelist').on('click','[name=details]',function(){
    var recodeTime = $(this).data("time");
    var tradeRecord = getStorage("TradeRecord");
    tradeRecord.forEach(function(record){
      if(record.time===recodeTime){
        setStorage("tempReceipt",record);
      }
    })
    location.href="receipt.html";
})

$('#recodelist').on('click','[name=delete]',function(){
    var recodeTime = $(this).data("time");
    var tradeRecord = getStorage("TradeRecord");
    var newTradeRecord=tradeRecord.filter(function(record){
      if(record.time!==recodeTime){
        return record;
      }
    })
    var tr = $("tr[data-time='"+recodeTime+"']");
    tr.remove();
    var allPrice = 0;
    newTradeRecord.forEach(function(record){
      allPrice+=record.totalprice;
    })
    $('#allprice').text("$"+allPrice);
    setStorage("TradeRecord",newTradeRecord);
})