// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuSection = document.getElementById("menu");

    for (const category in menu) {
        const categoryElement = document.createElement("section");
        categoryElement.classList.add("menu-category");

        const categoryNameElement = document.createElement("h3");
        categoryNameElement.textContent = category;
        categoryElement.appendChild(categoryNameElement);

        const itemListElement = document.createElement("ul");
        menu[category].forEach(itemName => {
            const listItemElement = document.createElement("li");
            listItemElement.textContent = itemName;
            listItemElement.addEventListener("click", () => addToOrder(itemName));
            itemListElement.appendChild(listItemElement);
        });

        categoryElement.appendChild(itemListElement);
        menuSection.appendChild(categoryElement);
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItemsList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");

    const listItemElement = document.createElement("li");
    listItemElement.textContent = itemName;
    orderItemsList.appendChild(listItemElement);

    // Assuming each item costs R60
    let totalPrice = parseFloat(orderTotalElement.textContent);
    totalPrice += 60; // Add R60 for each item
    orderTotalElement.textContent = totalPrice.toFixed(2);
}

// Callback function for removing an item from the order
function removeFromOrder(itemName) {
    const orderItemsList = document.getElementById("order-items");
    const orderItemsArray = Array.from(orderItemsList.children);
    const index = orderItemsArray.findIndex(listItem => listItem.textContent === itemName);

    if (index !== -1) {
        orderItemsArray[index].remove();
        // Assuming each item costs R60
        const orderTotalElement = document.getElementById("order-total");
        let totalPrice = parseFloat(orderTotalElement.textContent);
        totalPrice -= 60; // Subtract R60 for each item removed
        orderTotalElement.textContent = totalPrice.toFixed(2);
    }
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);

    // Add event listener to remove items from the order
    const orderItemsList = document.getElementById("order-items");
    orderItemsList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            removeFromOrder(event.target.textContent);
        }
    });
}

// Start the menu system by calling the init function
initMenuSystem(menu);