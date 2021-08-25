/*Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. 
Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.*/


class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getInformation() {
        console.log("наименование: " + this.name + "\nцена: " + this.price + "\nколичество: " + this.quantity)
    }
}


function getPriceOfBasket(basket) {
    var totalPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        totalPrice = totalPrice + basket[i].price
    }

    return "стоимость корзины составляет: " + totalPrice + " рублей"
}


product1 = new Product('принтер', 1000, 20)
product2 = new Product('сканер', 500, 1)
product3 = new Product('ксерокс', 350, 3)

warehouse = [product1, product2, product3]

console.log(getPriceOfBasket(warehouse))