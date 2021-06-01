`use strict`;

let myForm = document.getElementById("myForm");
let myTable = document.getElementById("myTable");

let food = [];
let images = [];

function Order(userName, foodType, foodImg, price) {
    this.userName = userName;
    this.foodType = foodType;
    this.foodImg = ['images/shawarmah.jfif', 'images/burger.jfif', 'images/pizza.jfif'];
    this.price = price;


    food.push(this);
    images.push(this.foodImg);
    settingItems();
}
Order.prototype.getRandomPrice = function (min, max) {
    price.push(Math.floor(Math.random() * (max - min + 1) + min));
}

function settingItems() {
    let data = JSON.stringify(food);
    localStorage.setItem('order', data);
}

function gettingItems() {
    let stringObj = localStorage.getItem('order');
    let normalObj = JSON.parse(stringObj);

    if (normalObj !== null) {
        food = normalObj;
    }
    render();
}

function render() {
    let tableRow = document.createElement('tr');
    myTable.appendChild(tableRow);
    for (let i = 0; i < images.length; i++) {
        let tableData = document.createElement('td');
        tableRow.appendChild(tableData);
        tableData.textContent = `${images[i]}`;

    }
    let tableData2 = document.createElement('td');
    tableRow.appendChild(tableData2);
    tableData2.textContent = `Customer Name: ${food.userName}`;

    let tableData3 = document.createElement('td');
    tableRow.appendChild(tableData3);
    tableData3.textContent = `Food Type: ${food.foodType}`;

    let tableData4 = document.createElement('td');
    tableRow.appendChild(tableData4);
    tableData4.textContent = `Food Price: ${food.price}`;

}

function handelSubmit(event) {
    event.preventDefault();
    let userName = event.target.userName.value;
    let foodType = event.target.foodType.value;
    // let foodImg = event.target.foodImg.value;
    // let price = event.target.price.value;
    new Order(userName, foodType,);

    render();
}
gettingItems();
myForm.addEventListener('submit', handelSubmit);