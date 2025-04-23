# CUHK-CanteenDish-Rating-Recommendation

This is a prototype of the CUHK-CanteenDish-Rating-Recommendation website without any server side work
The real source code with server side work and takes in other node modules can been found in 'RealCode' folder

The website of ‘CUHK canteen rating’ consists of two big functions Dish Rating and Review System and Dish Recommendations:
1. Dish Rating and Review System: Enable users to rate dishes on a scale of 1 to 5 stars and submit text reviews. By leveraging NLP, the platform will filter out inconsistent or overly emotional reviews to ensure data reliability. Weighted ratings will be calculated using Bayesian estimation to provide a more accurate reflection of overall dish quality
2. Dish Recommendations: With data collected from user ratings and reviews, the platform will implement collaborative filtering techniques to predict and recommend dishes suited to individual preferences. Regularization and neighbor correlation adjustments will enhance prediction accuracy and prevent overfitting, ensuring recommendations evolve dynamically based on user engagement.
