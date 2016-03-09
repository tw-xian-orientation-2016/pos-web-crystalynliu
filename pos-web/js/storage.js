function initStorage() {
  var Items = [{
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
      heart:0
    },
    {
      itemId: '3',
      name: '荔枝',
      unit: '斤',
      price: 15.0,
      heart:00
    },
    {
      itemId: '4',
      name: '电池',
      unit: '个',
      price: 2.00,
      heart:0
    },
    {
      itemId: '5',
      name: '方便面',
      unit: '袋',
      price: 4.50,
      heart:0
    }
  ];
  setStorage("Items",Items);
  setStorage("Cart",[]);
  setStorage("Receipts",[]);
  setStorage("tempReceipt","");
  
}

function setStorage(key,value){
  localStorage.setItem(key,JSON.stringify(value));
}

function getStorage(key){
  return JSON.parse(localStorage.getItem(key));
}