describe('findItem()',function () {
  it('should get correct result when itemId = 2',function(){
    var items = [{
      itemId: '0',
      name: '可口可乐',
      unit: '瓶',
      price: 3.00,
      heart:0
    },
    {
      itemId: '1',
      name: '雪碧',
      unit: '瓶',
      price: 3.00,
      heart:0
    },
    {
      itemId: '2',
      name: '苹果',
      unit: '斤',
      price: 5.50,
      heart:4
    }
  ]

    spyOn(localStorage,"getItem").and.returnValue(JSON.stringify(items));
    var result = findItem('2');
    var expectation={itemId: '2',name: '苹果',unit: '斤',price: 5.50,heart:4};
    expect(result).toEqual(expectation);
  })
})
