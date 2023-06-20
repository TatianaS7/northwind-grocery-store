/*const form = document.querySelector("#new-category-form")
form.onsubmit = postNewCategory

function postNewCategory (event) {
    event.preventDefault()  // Prevent the default behavior of the HTML form
    console.dir(form)

    // Pull the user-provided values out of the form
    const categoryName = form.elements["category-name"].value
    const categoryDescription = form.elements["category-description"].value

    // Prepare the data for the API. In this case, we're packaging it up as
    // a JSON string representing an object with the "name" and "description" properties
    const newCategoryJSON = JSON.stringify({
        name: categoryName,
        description: categoryDescription,
    })

    // Customize the HTTP request we're about to perform.
    const options = {
        // An HTTP POST method is used for SENDING content to the API.
        method: "POST",
        headers: {
            // Most APIs require us to identify the TYPE of content we're sending.
            // We specify this using the "Content-Type" header set to "application/json":
            "Content-Type": "application/json",
        },
        // The actual content we're sending (JSON in this case) goes in the Request Body:
        body: newCategoryJSON
    }
    
    // Send the request to the API. Note the "options" object we just built.
    fetch("http://localhost:8081/api/categories", options)
        .then(response => {
            // In this particular case, we're not worried about the Response Body, just the HTTP Status Code:
            if (response.status === 201) {
                alert("Category successfully created!")
            } else {
                alert("An error was detected. Please retry.")
            }
        })
}*/