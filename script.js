// List of canteens with their image paths
const canteens = [
    { name: "New Asia College Student Canteen", chineseName: "新亞書院學生餐廳", image: "images/new-asia-canteen.jpg" },
    { name: "United College Student Canteen", chineseName: "聯合書院學生膳堂", image: "images/united-canteen.jpg" },
    { name: "Chung Chi College Student Canteen", chineseName: "眾志堂學生膳堂", image: "images/chung-chi-canteen.jpg" },
    { name: "Pommerenke Student Centre Coffee Shop", chineseName: "范克廉樓咖啡閣", image: "images/pommerenke-coffee.jpg" },
    { name: "CUHK Noodle House", chineseName: "中大麵膳坊", image: "images/cuhk-noodle-house.jpg" },
    { name: "CUHK Central Canteen", chineseName: "中大大膳堂", image: "images/cuhk-central-canteen.jpg" },
    { name: "CUHK Paper & Coffee", chineseName: "CUHK Paper & Coffee", image: "images/paper-coffee.jpg" },
    { name: "Orchid Lodge Restaurant", chineseName: "蘭苑餐廳", image: "images/orchid-lodge.jpg" }
];

// Display canteen showcase
function populateCanteenList() {
    const canteenList = document.getElementById("canteen-list");
    canteenList.innerHTML = "";
    canteens.forEach(canteen => {
        const div = document.createElement("div");
        div.className = "canteen";
        div.innerHTML = `
            <img src="${canteen.image}" alt="${canteen.name}" class="canteen-image">
            <p><strong>${canteen.name}</strong> (${canteen.chineseName})</p>
        `;
        canteenList.appendChild(div);
    });
}

// Store all dishes globally
let allDishes = [];

fetch("http://localhost:3000/api/dishes")
    .then(response => response.json())
    .then(dishes => {
        allDishes = dishes;
        populateDishList(dishes);
    })
    .catch(error => console.error("Error fetching dishes:", error));

// Fetch and display all ratings
fetch("http://localhost:3000/api/ratings")
    .then(response => response.json())
    .then(ratings => populateRatingsList(ratings))
    .catch(error => console.error("Error fetching ratings:", error));

// Display canteen showcase on page load
populateCanteenList();

function populateDishList(dishes) {
    const dishList = document.getElementById("dish-list");
    dishList.innerHTML = "<h2>All Dishes</h2>";
    const dishesByCanteen = {};
    dishes.forEach(dish => {
        if (!dishesByCanteen[dish.canteen]) {
            dishesByCanteen[dish.canteen] = [];
        }
        dishesByCanteen[dish.canteen].push(dish);
    });

    Object.keys(dishesByCanteen).forEach(canteen => {
        const canteenDiv = document.createElement("div");
        canteenDiv.className = "canteen-dishes";
        
        // Create clickable header with canteen name only (no image)
        const header = document.createElement("div");
        header.className = "canteen-header";
        header.innerHTML = `<h3>${canteen}</h3>`;
        
        // Create dish list (hidden by default)
        const ul = document.createElement("ul");
        ul.className = "dish-list";
        ul.style.display = "none"; // Hidden initially
        dishesByCanteen[canteen].forEach(dish => {
            const li = document.createElement("li");
            li.textContent = `${dish.name} - HK$${dish.price}`;
            ul.appendChild(li);
        });

        // Add click event to toggle dish list visibility
        header.addEventListener("click", () => {
            ul.style.display = ul.style.display === "none" ? "block" : "none";
        });

        canteenDiv.appendChild(header);
        canteenDiv.appendChild(ul);
        dishList.appendChild(canteenDiv);
    });
}

function populateRatingsList(ratings) {
    const ratingsList = document.getElementById("ratings-list");
    ratingsList.innerHTML = "<h2>All Dish Ratings</h2>";

    if (ratings.length === 0) {
        ratingsList.innerHTML += "<p>No ratings yet.</p>";
        return;
    }

    ratings.forEach(dishData => {
        const div = document.createElement("div");
        div.className = "dish";
        div.innerHTML = `
            <strong>${dishData.dish}</strong> (${dishData.canteen}) - HK$${dishData.price} - Average Rating: ${dishData.averageRating}<br>
            <ul>
                ${dishData.ratings.map(r => `<li>${r.username}: ${r.rating} stars - "${r.review}"</li>`).join("")}
            </ul>
        `;
        ratingsList.appendChild(div);
    });
}

// Handle canteen and dish selection
const canteenSelect = document.getElementById("canteen");
const dishSelect = document.getElementById("dish");
const newDishSection = document.getElementById("new-dish-section");
const newDishNameInput = document.getElementById("new-dish-name");
const priceInput = document.getElementById("price");

canteenSelect.addEventListener("change", () => {
    const selectedCanteen = canteenSelect.value;
    dishSelect.innerHTML = '<option value="" disabled selected>Select a dish</option>';
    const dishesForCanteen = allDishes.filter(d => d.canteen === selectedCanteen);
    dishesForCanteen.forEach(dish => {
        const option = document.createElement("option");
        option.value = dish.name;
        option.textContent = `${dish.name} (HK$${dish.price})`;
        dishSelect.appendChild(option);
    });
    const newDishOption = document.createElement("option");
    newDishOption.value = "new";
    newDishOption.textContent = "Other (add new dish)";
    dishSelect.appendChild(newDishOption);
    priceInput.value = "";
    newDishSection.style.display = "none";
    newDishNameInput.removeAttribute("required"); // Remove required when canteen changes
});

dishSelect.addEventListener("change", () => {
    const selectedDish = dishSelect.value;
    if (selectedDish === "new") {
        newDishSection.style.display = "block";
        newDishNameInput.setAttribute("required", ""); // Make new dish name required
        priceInput.value = "";
    } else {
        newDishSection.style.display = "none";
        newDishNameInput.removeAttribute("required"); // Remove required for existing dishes
        const selectedCanteen = canteenSelect.value;
        const dish = allDishes.find(d => d.name === selectedDish && d.canteen === selectedCanteen);
        if (dish) {
            priceInput.value = dish.price;
        }
    }
});

// Client-side emotional check function
function isReviewEmotional(review, rating) {
    const emotionalWords = ["hate", "love", "terrible", "amazing", "awful", "fantastic"];
    const lowerReview = review.toLowerCase();
    const hasEmotionalWord = emotionalWords.some(word => lowerReview.includes(word));
    const extremeRating = rating <= 1.5 || rating >= 4.5;
    return hasEmotionalWord || extremeRating;
}

// Handle form submission
const form = document.getElementById("rating-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const canteen = canteenSelect.value;
    let dishName = dishSelect.value === "new" ? newDishNameInput.value : dishSelect.value;
    const price = parseFloat(document.getElementById("price").value);
    const rating = parseFloat(document.getElementById("rating").value);
    const review = document.getElementById("review").value;

    // Validate form data
    if (!username || !canteen || !dishName || isNaN(price) || isNaN(rating) || rating < 1 || rating > 5 || !review) {
        alert("Please fill all fields correctly. Rating must be between 1 and 5, and price must be a valid number.");
        return;
    }

    // Client-side emotional check
    if (isReviewEmotional(review, rating)) {
        if (!confirm("Review or rating seems overly emotional or extreme and may be discounted. Continue?")) {
            return; // Stop submission if user cancels
        }
    }

    // Send data to server
    fetch("http://localhost:3000/api/rate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, dishName, canteen, price, rating, review })
    })
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    })
    .then(data => {
        alert(data.message);
        // Refresh dish list and ratings list
        Promise.all([
            fetch("http://localhost:3000/api/dishes").then(res => res.json()),
            fetch("http://localhost:3000/api/ratings").then(res => res.json())
        ])
        .then(([dishes, ratings]) => {
            allDishes = dishes;
            populateDishList(dishes);
            populateRatingsList(ratings);
        })
        .catch(error => console.error("Error refreshing data:", error));
    })
    .catch(error => {
        console.error("Error submitting rating:", error);
        alert("Failed to submit rating. Please try again.");
    });

    form.reset();
    newDishSection.style.display = "none";
    newDishNameInput.removeAttribute("required"); // Reset required state
});