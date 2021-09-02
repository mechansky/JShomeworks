const main = document.querySelector('#main')

var box = [];
var emptyBox = 'Корзина пуста'

function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}


box.push(
    new Product('принтер', 7400, 3)
);

box.push(
    new Product('сканер', 9800, 4)
);

box.push(
    new Product('ксерокс', 10000, 5)
);

box.push(
    new Product('монитор', 12500, 10)
);

box.push(
    new Product('клавиатура', 4200, 15)
);


if (box == 0) {
    main.insertAdjacentHTML('beforeend', `<div class="prod_item total">${emptyBox}</div>`);
} else {
    for (i of box) {
        var n = 0;
        main.insertAdjacentHTML('beforeend',
            `<div class="prod_item">
        <span>Наименование товара - ${i.name};</span> 
        <span>цена товара - ${i.price.toFixed(2)}Р;</span>
        <span>количество - ${i.quantity} шт</span>
        </div>`);
        n++;
    }
}


function getPriceOfBox(box) {
    var totalPrice = 0;
    for (let i = 0; i < box.length; i++) {
        totalPrice = totalPrice + (box[i].price * box[i].quantity)
    }
    return totalPrice
}

function getAmountOfBox(box) {
    var totalAmount = 0;
    for (let i = 0; i < box.length; i++) {
        totalAmount = totalAmount + box[i].quantity
    }
    return totalAmount
}


if (box != 0) {
    var totalPrice = main.insertAdjacentHTML('beforeend',
        `<hr><div class="prod_item total">Общее количество товаров: ${getAmountOfBox(box)} шт. Сумма корзины: 
    ${getPriceOfBox(box)} руб</div>`);
}