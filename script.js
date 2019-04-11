const Item = function(name, quantity, unitPrice, total){
    this.name = name;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    this.total = total;
}
itemOne = new Item('Mangoe', 4, 2, 8);
itemTwo = new Item('Pepper', 5, 5, 25);
const cart = [];
const result = cart.push(itemOne, itemTwo);
console.log(cart);