// Handle recommendation form submission
const form = document.getElementById("recommend-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    updateRecommendations(username);
});

// Map canteen names to image paths and Chinese names
const canteenInfo = {
    "New Asia College Student Canteen": { image: "images/new-asia-canteen.jpg", chineseName: "新亞書院學生餐廳" },
    "United College Student Canteen": { image: "images/united-canteen.jpg", chineseName: "聯合書院學生膳堂" },
    "Chung Chi College Student Canteen": { image: "images/chung-chi-canteen.jpg", chineseName: "眾志堂學生膳堂" },
    "Pommerenke Student Centre Coffee Shop": { image: "images/pommerenke-coffee.jpg", chineseName: "范克廉樓咖啡閣" },
    "CUHK Noodle House": { image: "images/cuhk-noodle-house.jpg", chineseName: "中大麵膳坊" },
    "CUHK Central Canteen": { image: "images/cuhk-central-canteen.jpg", chineseName: "中大大膳堂" },
    "CUHK Paper & Coffee": { image: "images/paper-coffee.jpg", chineseName: "CUHK Paper & Coffee" },
    "Orchid Lodge Restaurant": { image: "images/orchid-lodge.jpg", chineseName: "蘭苑餐廳" }
};

// Function to update recommendations
function updateRecommendations(username) {
    Promise.all([
        fetch(`http://localhost:3000/api/recommend/${username}`).then(response => response.json()),
        fetch("http://localhost:3000/api/ratings").then(response => response.json())
    ])
        .then(([recommendations, ratings]) => {
            const recDiv = document.getElementById("recommendations");
            recDiv.innerHTML = "<h2>Your Recommended Dishes</h2>";

            if (recommendations.length === 0) {
                recDiv.innerHTML += "<p>No recommendations yet. Rate more dishes!</p>";
            } else {
                // Create a lookup map for ratings by dish-canteen key
                const ratingsMap = {};
                ratings.forEach(rating => {
                    const key = `${rating.dish}-${rating.canteen}`;
                    ratingsMap[key] = rating.averageRating;
                });

                // Group recommendations by canteen
                const recommendationsByCanteen = {};
                recommendations.forEach(dish => {
                    if (!recommendationsByCanteen[dish.canteen]) {
                        recommendationsByCanteen[dish.canteen] = [];
                    }
                    recommendationsByCanteen[dish.canteen].push(dish);
                });

                // Display recommendations organized by canteen
                Object.keys(recommendationsByCanteen).forEach(canteen => {
                    const canteenDiv = document.createElement("div");
                    canteenDiv.className = "canteen-section";
                    const canteenData = canteenInfo[canteen] || { image: "images/default-canteen.jpg", chineseName: "Unknown" };
                    canteenDiv.innerHTML = `
                        <h3>${canteen} (${canteenData.chineseName})</h3>
                        <img src="${canteenData.image}" alt="${canteen}" class="canteen-image">
                    `;
                    const dishList = document.createElement("ul");
                    recommendationsByCanteen[canteen].forEach(dish => {
                        const li = document.createElement("li");
                        li.className = "dish";
                        const key = `${dish.name}-${dish.canteen}`;
                        const avgRating = ratingsMap[key] ? ratingsMap[key] : "N/A";
                        li.innerHTML = `<strong>${dish.name}</strong> - HK$${dish.price} - Predicted: <span>${dish.score}</span> - Avg Rating: <span>${avgRating}</span>`;
                        dishList.appendChild(li);
                    });
                    canteenDiv.appendChild(dishList);
                    recDiv.appendChild(canteenDiv);
                });
            }

            // Populate the ranking table with all dishes
            populateRankingTable(ratings);
        })
        .catch(error => console.error("Error fetching recommendations or ratings:", error));
}

// Function to populate the ranking table
function populateRankingTable(ratings) {
    const tableBody = document.getElementById("ranking-table-body");
    tableBody.innerHTML = ""; // Clear existing content

    if (ratings.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='5'>No ratings available yet.</td></tr>";
        return;
    }

    // Sort all dishes by Bayesian average rating (descending)
    ratings.sort((a, b) => parseFloat(b.averageRating) - parseFloat(a.averageRating));

    // Populate the table with ranked dishes
    ratings.forEach((dishData, index) => {
        const rank = index + 1; // Rank starts from 1
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${rank}</td>
            <td>${dishData.dish}</td>
            <td>${dishData.canteen}</td>
            <td>${dishData.price}</td>
            <td>${dishData.averageRating}</td>
        `;
        tableBody.appendChild(row);
    });
}