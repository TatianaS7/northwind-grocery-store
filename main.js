const dropValue = document.querySelector("#product-search");
let selectedOption;
const allOutput = document.querySelector("#all-output");
const categoryOutput = document.querySelector("#category-output");

dropValue.addEventListener("change", function() {
    selectedOption = dropValue.value;
    populateCategoryDropdown();
    displayItemsByCategory();
    viewAllProducts();
});

function populateCategoryDropdown() {
    const selectedOption = dropValue.value;
    const hiddenDiv = document.getElementById("category-dropdown");


  if (selectedOption === "option2") {
    hiddenDiv.style.display = "block";

    let categoryDrop = document.querySelector("#category-dropdown");
    return fetch("http://localhost:8081/api/categories")
      .then((response) => response.json())
      .then((categoryList) => {
        for (let i = 0; i < categoryList.length; i++) {
          let category = document.createElement("option");
          category.textContent = categoryList[i].name;
          category.value = categoryList[i].name;
          categoryDrop.appendChild(category);
        }
        displayItemsByCategory(categoryList);
      });
  } else if (selectedOption === "option1" || selectedOption === "option3") {
    hiddenDiv.style.display = "none";
    displayItemsByCategory([]);
  }
}

function displayItemsByCategory(categoryList) {
  const categoryDrop = document.querySelector("#category-dropdown");
  const currentCategory = categoryDrop.value;

 /* return fetch("http://localhost:8081/api/categories")
    .then((response) => response.json())
    .then((categoryList) => {*/
      
    const selectedCategory = categoryList.find(
        (category) => category.name === currentCategory);

      if (selectedCategory) {
        allOutput.style.display = "none";
        categoryOutput.style.display = "block";

        return fetch("http://localhost:8081/api/products")
          .then(response => response.json())
          .then(productList => {
            let byCategoryData = "";
            productList.forEach((product) => {
                if (product.category === currentCategory) {
              byCategoryData += `                
              <div class = "card" id = "productCard">
              <div class="card-header">${product.supplier}</div>
                  <div class = "card-body" id = "productCardBody">
                      <div class="card-title" id = "productCardTitle">${product.productName}</div> 
                      <p class = "card-text" id = "productCardText">Unit Price: ${product.unitPrice}</p>
                      <a href="details.html?productId=${product.productId}" class = "view-product-btn">View Product</a>
                  </div>
                  <br>
              </div>`;
                }
            });
            categoryOutput.innerHTML = byCategoryData;
          });
      } else {
        categoryOutput.style.display = "none";
      }
   // });
}


//display all products
//product id, name, price, see details hyperlink 
function viewAllProducts() {

    if (selectedOption === "option3") {
        allOutput.style.display = "block";

    return fetch("http://localhost:8081/api/products")
        .then(response => response.json())
        .then(productList => {
            let productsHTML = "";
            productList.forEach(product => {
                productsHTML += `
                <div class = "card" id = "productCard">
                <div class="card-header">${product.supplier}</div>
                    <div class = "card-body" id = "productCardBody">
                        <div class="card-title" id = "productCardTitle">${product.productName}</div> 
                        <p class = "card-text" id = "productCardText">Unit Price: ${product.unitPrice}</p>
                        <a href="details.html?productId=${product.productId}" class = "view-product-btn">View Product</a>
                    </div>
                    <br>
                </div>
                `;
            });
            allOutput.innerHTML = productsHTML;
    });
} else if (selectedOption === "option1" || selectedOption === "option2") {
    allOutput.style.display = "none";
  }
}