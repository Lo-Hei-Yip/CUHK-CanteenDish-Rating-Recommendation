# CUHK-CanteenDish-Rating-Recommendation

This is a prototype of the CUHK-CanteenDish-Rating-Recommendation website without any server side work, without submit function, with only static data and approximatie NLP function.

The real source code with server side work and takes in other node modules can been found in 'RealCode' folder

The website of ‘CUHK canteen rating’ consists of two big functions Dish Rating and Review System and Dish Recommendations:
1. Dish Rating and Review System: Enable users to rate dishes on a scale of 1 to 5 stars and submit text reviews. By leveraging NLP, the platform will filter out inconsistent or overly emotional reviews to ensure data reliability. Weighted ratings will be calculated using Bayesian estimation to provide a more accurate reflection of overall dish quality
2. Dish Recommendations: With data collected from user ratings and reviews, the platform will implement collaborative filtering techniques to predict and recommend dishes suited to individual preferences. Regularization and neighbor correlation adjustments will enhance prediction accuracy and prevent overfitting, ensuring recommendations evolve dynamically based on user engagement.



Product Photo:
Rating Page
![image](https://github.com/user-attachments/assets/112a75f5-4a31-4011-8b99-8204d8709be0)
![image](https://github.com/user-attachments/assets/14d8c2c5-03ba-4a0d-b446-329abfa04f68)
![image](https://github.com/user-attachments/assets/612948a3-dc09-4192-b27e-618d43e53846)
![image](https://github.com/user-attachments/assets/91316561-6ea8-4858-a23e-5ebbf82efce3)

Recommendation Page
![image](https://github.com/user-attachments/assets/3778b987-e3f2-4164-8451-dbf400bffc56)
![image](https://github.com/user-attachments/assets/45b49da9-1293-4f63-ba3a-b4cd299c0b5c)
