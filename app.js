let arrApp = ['Sony', 'Samsung', 'Nokia 6', 'Xiaomi Redmi Note 4', 'Apple', 'Oppo'];


function myData() {
    let containerItem = document.querySelector('.container_item');
    containerItem.innerHTML = '';

    arrApp.forEach((product, index) => {
        let productItem = document.createElement('div');
        productItem.classList.add('item_name-main');
        productItem.innerHTML = `
            <div class="item_name">${product}</div>
            <div class="item_name-s">
                <button class="btn" onclick="edit(${index})">Edit</button>
                <button class="btn" onclick="remove(${index})">Delete</button> 
            </div>
            `;
        containerItem.appendChild(productItem);
    })
}

document.getElementById("productCount").innerText = `${arrApp.length} products`;

function addS() {
    let newProduct = document.getElementById('newProduct').value;
    if (newProduct) {
        arrApp.push(newProduct);
        myData();
        document.getElementById("newProduct").value = "";
    }
}

function remove(index) {
    arrApp.splice(index, 1);
    myData();
}

function edit(index) {
    let newProductName = prompt("Enter new product name:", arrApp[index]);
    if (newProductName) {
        arrApp[index] = newProductName;
        myData();
    }
}

window.onload = myData;