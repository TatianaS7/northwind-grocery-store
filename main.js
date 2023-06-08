function getAllProducts() {
    return fetch("http://localhost:8081/api/products")
        .then(response => response.json())
}

window.onload = function () {
    getAllProducts()
        .then(productList => console.log(productList));
}