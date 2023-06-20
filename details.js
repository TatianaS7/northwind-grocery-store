window.onload = displayProductDetails;

function displayProductDetails() {
    const productOutput = document.querySelector("#product-details");

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("productId");

    return fetch(`http://localhost:8081/api/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            let productsHTML = `
            <div class = "product">    
                <div id = "productSupplier">${product.supplier}</div>
                <div id = "productTitle">${product.productName}</div> 
                <p id = "productText">Unit Price: ${product.unitPrice}</p>
                <p class = "stock">Stock: ${product.unitsInStock}</p><br>
                <a href="details.html?productId=${product.productId}" class = "cart-btn">Add to Cart</a>
            </div>`;
            productOutput.innerHTML = productsHTML;
    });
}