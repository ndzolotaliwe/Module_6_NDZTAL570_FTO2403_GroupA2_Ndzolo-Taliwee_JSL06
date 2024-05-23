// Sample menu data
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get a reference to the menu container in your HTML
    const menuContainer = document.getElementById('menuContainer');

    // Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {
        // Create an h3 element for the category
        const categoryHeading = document.createElement('h3');
        categoryHeading.textContent = category;

        // Append the category heading to the menu container
        menuContainer.appendChild(categoryHeading);

        // Create a list element for the items in the category
        const itemList = document.createElement('ul');

        // Loop through the items in the category and create list items
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;

            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener('click', () => addToOrder(item));

            // Append the list item to the category's list
            itemList.appendChild(listItem);
        });

        // Append the list to the menu container
        menuContainer.appendChild(itemList);
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get references to the order items list and order total element in your HTML
    const orderList = document.getElementById('orderList');
    const orderTotalElem = document.getElementById('orderTotal');

    // Create a list item for the order
    const orderItem = document.createElement('li');
    orderItem.textContent = itemName;

    // Append the list item to the order items list
    orderList.appendChild(orderItem);

    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotalElem.textContent) || 0;
    const itemPrice = 60; // Assuming each item costs R60 (you can customize this)
    const newTotal = currentTotal + itemPrice;
    orderTotalElem.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem() {
    // Call the displayMenuItems function to display the menu
    displayMenuItems(menu);
}

// Call the init function to start the menu system
initMenuSystem();
