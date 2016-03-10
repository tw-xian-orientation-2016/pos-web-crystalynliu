describe('addCart',function () {
  it('should get correct result when itemId = 2',function(){
    var cart = [{
      itemId: '0',
      count:2,
      totalprice:6
    },
    {
      itemId: '2',
      count:1,
      totalprice:3
    }
  ]

    spyOn(localStorage,"getItem").and.returnValue(JSON.stringify(cart));
    spyOn(localStorage,"setItem").and.stub();
    var result = addCart('2');
    expect(result).toEqual(4);
  })
})

describe('updateCart',function () {
  it('should get correct result when itemId = 0 and count=3',function(){
    var cart = [{
      itemId: '0',
      count:2,
      subtotal:6
    },
    {
      itemId: '2',
      count:1,
      subtotal:3
    }
  ]

    spyOn(localStorage,"getItem").and.returnValue(JSON.stringify(cart));
    spyOn(localStorage,"setItem").and.stub();
    spyOn(window,"findItem").and.returnValue({
      itemId: '0',
      name: '可口可乐',
      unit: '瓶',
      price: 3.00,
      heart:0
    })
    var result = updateCart('0',3);
    var expectation = [{
      itemId: '0',
      count:3,
      subtotal:9
    },
    {
      itemId: '2',
      count:1,
      subtotal:3
    }]
    expect(result).toEqual(expectation);
  
  })

})

describe('deleteCartItem',function () {
  it('should get correct cart when itemId = 0 ',function(){
    var cart = [{
      itemId: '0',
      count:2,
      subtotal:6
    },
    {
      itemId: '2',
      count:1,
      subtotal:3
    }
  ]

    spyOn(localStorage,"getItem").and.returnValue(JSON.stringify(cart));
    spyOn(localStorage,"setItem").and.stub();
    var result = deleteCartItem('0');
    var expectation = [
    {
      itemId: '2',
      count:1,
      subtotal:3
    }]
    expect(result).toEqual(expectation);
  
  })

})