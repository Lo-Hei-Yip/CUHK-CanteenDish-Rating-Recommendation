const express = require("express");
const path = require("path");
const fs = require("fs");
const Sentiment = require("sentiment");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Initialize sentiment analyzer
const sentiment = new Sentiment();

// Load initial data from data.json
let data = { users: [], dishes: [] };
const dataFilePath = path.join(__dirname, "data.json");

if (fs.existsSync(dataFilePath)) {
    const rawData = fs.readFileSync(dataFilePath);
    data = JSON.parse(rawData);
} else {
    data = {
        users: [
            { username: "Alice", ratings: [{ dish: "Chicken Rice", canteen: "New Asia College Student Canteen", rating: 4.5, review: "Tasty!", price: 35 }] },
            { username: "Bob", ratings: [{ dish: "Chicken Rice", canteen: "United College Student Canteen", rating: 4.0, review: "Good portion", price: 26 }] }
        ],
        dishes: [
            { name: "Chicken Rice", canteen: "New Asia College Student Canteen", price: 35 },
            { name: "Chicken Rice", canteen: "United College Student Canteen", price: 26 }
        ]
    };
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

const C = 5; // Bayesian constant: average number of ratings threshold
const epsilon = 0.1; // Regularization constant for similarity computation

// Function to determine review weight based on sentiment analysis
function getReviewWeight(review, rating) {
    const analysis = sentiment.analyze(review);
    const score = analysis.score;

    // Check for overly emotional reviews (high absolute sentiment score)
    if (Math.abs(score) > 3) {
        // Check for inconsistency between rating and sentiment
        if ((rating > 3 && score < 0) || (rating < 3 && score > 0)) {
            return 0.3; // Heavily discount inconsistent emotional reviews
        } else {
            return 0.5; // Discount emotional but consistent reviews
        }
    } else {
        // Check for inconsistency in neutral reviews
        if ((rating > 3 && score < 0) || (rating < 3 && score > 0)) {
            return 0.7; // Moderate discount for inconsistent neutral reviews
        } else {
            return 1.0; // Full weight for consistent neutral reviews
        }
    }
}

// Compute baseline predictor using least squares
function computeBaselinePredictor() {
    const users = data.users.map(u => u.username);
    const items = data.dishes.map(d => `${d.name}-${d.canteen}`);
    let ratings = [];
    data.users.forEach(user => {
        user.ratings.forEach(r => {
            ratings.push({ username: user.username, item: `${r.dish}-${r.canteen}`, rating: r.rating });
        });
    });

    const globalAverage = ratings.length > 0 ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length : 3;

    // Initialize biases
    const userBiases = {};
    const itemBiases = {};
    users.forEach(u => userBiases[u] = 0);
    items.forEach(i => itemBiases[i] = 0);

    // Iterative optimization (approximating least squares)
    const lambda = 0.1; // Regularization parameter
    const iterations = 50;
    for (let iter = 0; iter < iterations; iter++) {
        // Update user biases
        users.forEach(user => {
            let sumError = 0;
            let count = 0;
            ratings.forEach(r => {
                if (r.username === user) {
                    const predicted = globalAverage + userBiases[user] + itemBiases[r.item];
                    sumError += r.rating - predicted;
                    count++;
                }
            });
            if (count > 0) {
                userBiases[user] = sumError / (count + lambda);
            }
        });

        // Update item biases
        items.forEach(item => {
            let sumError = 0;
            let count = 0;
            ratings.forEach(r => {
                if (r.item === item) {
                    const predicted = globalAverage + userBiases[r.username] + itemBiases[item];
                    sumError += r.rating - predicted;
                    count++;
                }
            });
            if (count > 0) {
                itemBiases[item] = sumError / (count + lambda);
            }
        });
    }

    return { globalAverage, userBiases, itemBiases };
}

// Compute error matrix (actual rating - baseline prediction)
function computeErrorMatrix(baseline) {
    const errorMatrix = {};
    data.users.forEach(user => {
        errorMatrix[user.username] = {};
        user.ratings.forEach(r => {
            const item = `${r.dish}-${r.canteen}`;
            const baselineRating = baseline.globalAverage + 
                                 (baseline.userBiases[user.username] || 0) + 
                                 (baseline.itemBiases[item] || 0);
            errorMatrix[user.username][item] = r.rating - baselineRating;
        });
    });
    return errorMatrix;
}

// Compute —— between dishes
function computeDishSimilarity(itemA, itemB, errorMatrix) {
    const users = Object.keys(errorMatrix);
    const commonUsers = users.filter(user => errorMatrix[user][itemA] && errorMatrix[user][itemB]);

    if (commonUsers.length === 0) return 0;

    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    commonUsers.forEach(user => {
        const valA = errorMatrix[user][itemA];
        const valB = errorMatrix[user][itemB];
        dotProduct += valA * valB;
        normA += valA * valA;
        normB += valB * valB;
    });

    normA = Math.sqrt(normA);
    normB = Math.sqrt(normB);
    return normA * normB === 0 ? 0 : dotProduct / (normA * normB + epsilon);
}

// Dish-based collaborative filtering function
function getRecommendations(username) {
    const targetUser = data.users.find(u => u.username.toLowerCase() === username);
    if (!targetUser || targetUser.ratings.length === 0) return [];

    // Compute baseline predictor
    const baseline = computeBaselinePredictor();

    // Compute error matrix
    const errorMatrix = computeErrorMatrix(baseline);

    // Get all dishes and user-rated dishes
    const allItems = data.dishes.map(d => `${d.name}-${d.canteen}`);
    const targetRatings = targetUser.ratings.map(r => `${r.dish}-${r.canteen}`);

    // Compute similarities between dishes
    const similarities = {};
    allItems.forEach(itemA => {
        similarities[itemA] = [];
        allItems.forEach(itemB => {
            if (itemA !== itemB) {
                const similarity = computeDishSimilarity(itemA, itemB, errorMatrix);
                similarities[itemA].push({ item: itemB, similarity });
            }
        });
    });

    // Predict ratings for unrated dishes
    const predictions = [];
    allItems.forEach(item => {
        if (targetRatings.includes(item)) return; // Skip rated dishes

        // Baseline prediction
        let predictedRating = baseline.globalAverage + 
                             (baseline.userBiases[targetUser.username] || 0) + 
                             (baseline.itemBiases[item] || 0);

        // Adjust using similar dishes
        let totalWeight = 0;
        let weightedError = 0;
        targetRatings.forEach(ratedItem => {
            const similarDishes = similarities[ratedItem]
                .filter(s => Math.abs(s.similarity) > 0) // Only consider non-zero similarities
                .sort((a, b) => Math.abs(b.similarity) - Math.abs(a.similarity))
                .slice(0, 5); // Top-5 similar dishes
            similarDishes.forEach(similar => {
                if (similar.item === item) {
                    const weight = similar.similarity;
                    const error = errorMatrix[targetUser.username][ratedItem] || 0;
                    weightedError += weight * error;
                    totalWeight += Math.abs(weight);
                }
            });
        });

        if (totalWeight > 0) {
            predictedRating += weightedError / totalWeight;
        }

        // Clip rating between 1 and 5
        predictedRating = Math.max(1, Math.min(5, predictedRating));

        const [name, canteen] = item.split("-");
        const dishData = data.dishes.find(d => d.name.toLowerCase() === name.toLowerCase() && d.canteen === canteen);
        predictions.push({ name, canteen, price: dishData?.price || 0, score: predictedRating });
    });

    // Return top-3 recommendations
    return predictions
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .map(p => ({
            name: p.name,
            canteen: p.canteen,
            price: p.price,
            score: parseFloat(p.score.toFixed(2))
        }));
}

// API endpoint to get all dishes
app.get("/api/dishes", (req, res) => {
    res.json(data.dishes);
});

// API endpoint to get user data
app.get("/api/users", (req, res) => {
    res.json(data.users);
});

// API endpoint to submit rating/review
app.post("/api/rate", (req, res) => {
    const { username, dishName, canteen, price, rating, review } = req.body;

    // Add or update dish with canteen and price
    let dish = data.dishes.find(d => d.name.toLowerCase() === dishName.toLowerCase() && d.canteen === canteen);
    if (!dish) {
        dish = { name: dishName, canteen, price: parseFloat(price) };
        data.dishes.push(dish);
    } else if (dish.price !== price) {
        dish.price = parseFloat(price); // Update price if different
    }

    let user = data.users.find(u => u.username.toLowerCase() === username.toLowerCase());
    if (!user) {
        user = { username, ratings: [] };
        data.users.push(user);
    }

    const existingRating = user.ratings.find(r => r.dish.toLowerCase() === dishName.toLowerCase() && r.canteen === canteen);
    if (existingRating) {
        existingRating.rating = parseFloat(rating);
        existingRating.review = review;
        existingRating.price = parseFloat(price);
    } else {
        user.ratings.push({ dish: dishName, canteen, rating: parseFloat(rating), review, price: parseFloat(price) });
    }

    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    console.log(`Updated data.json with: ${username}, ${dishName}, ${canteen}, ${price}, ${rating}, ${review}`);

    res.json({ message: "Rating submitted successfully" });
});

// API endpoint for recommendations
app.get("/api/recommend/:username", (req, res) => {
    const username = req.params.username.toLowerCase();
    const recommendations = getRecommendations(username);
    res.json(recommendations);
});

// API endpoint for all ratings with Bayesian averaging
app.get("/api/ratings", (req, res) => {
    // Compute global weighted average
    let totalWeightedSum = 0;
    let totalWeight = 0;
    data.users.forEach(user => {
        user.ratings.forEach(rating => {
            const weight = getReviewWeight(rating.review, rating.rating);
            totalWeightedSum += rating.rating * weight;
            totalWeight += weight;
        });
    });
    const globalAverage = totalWeight > 0 ? totalWeightedSum / totalWeight : 0;

    const ratingsByDish = {};
    data.users.forEach(user => {
        user.ratings.forEach(rating => {
            const key = `${rating.dish}-${rating.canteen}`;
            if (!ratingsByDish[key]) {
                ratingsByDish[key] = { dish: rating.dish, canteen: rating.canteen, price: rating.price, ratings: [] };
            }
            const weight = getReviewWeight(rating.review, rating.rating);
            ratingsByDish[key].ratings.push({
                username: user.username,
                rating: rating.rating,
                review: rating.review,
                weight: weight
            });
        }); 
    });

    const aggregatedRatings = Object.keys(ratingsByDish).map(key => {
        const { dish, canteen, price, ratings } = ratingsByDish[key];
        const totalWeightForDish = ratings.reduce((sum, r) => sum + r.weight, 0);
        const weightedSumForDish = ratings.reduce((sum, r) => sum + r.rating * r.weight, 0);
        const bayesianAverage = totalWeightForDish > 0 
            ? (C * globalAverage + weightedSumForDish) / (C + totalWeightForDish) 
            : globalAverage;
        return { dish, canteen, price, averageRating: bayesianAverage.toFixed(2), ratings };
    });

    res.json(aggregatedRatings);
});

// Serve index.html for root route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Serve recommend.html for /recommend route
app.get("/recommend", (req, res) => {
    res.sendFile(path.join(__dirname, "recommend.html"));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});