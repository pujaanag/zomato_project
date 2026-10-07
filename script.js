const searchBox = document.querySelector("main input");

searchBox.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        let searchValue = searchBox.value.trim();

        if (searchValue === "") {
            alert("Please enter a restaurant, cuisine or dish!");
        } else {
            alert("Searching for: " + searchValue);
        }
    }
});
