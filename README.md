
## DelishDeliver - Full Stack Food Ordering Website

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Key Functionalities](#key-functionalities)
- [Admin Panel Features](#admin-panel-features)
- [Conclusion](#conclusion)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
    
## Project Overview
DelishDeliver is a full-stack food ordering website built using React JS, MongoDB, Express, and Node JS. The website allows users to browse food items, add them to their cart, and place orders with secure online payments via Stripe. It includes a fully functional Admin Panel to manage food items and orders, providing a seamless user experience with real-time updates and a responsive design.

## Installation
To run the project locally, follow these steps:

1. Clone the repository: `git clone  https://github.com/astharane03/DelishDeliver.git`
2. Install the dependencies: `npm install`
3. Run backend : `npm run server`
4. Run frontend: `npm run dev`
5. Run admin: `npm run dev`

## Usage
This will start the website on [http://localhost:5173](http://localhost:5173/)  and admin panel on [http://localhost:5174](http://localhost:5174/) in your browser.

## Features
- **User Authentication** : Secure user registration and login system using JWT (JSON Web Token).
- **Shopping Cart** : Users can add and remove food items to/from the cart, view items, and adjust quantities in real-time.
- **Order Placement** : Seamless checkout process with Stripe integration for secure online payments.
- **Order Tracking** : Users can view their order history and status updates.
- **Admin Panel** : Admins can manage food items, view orders, and update order statuses from a dedicated panel.
- **Responsive Design** : The website is optimized for both desktop and mobile devices.

## Tech Stack
- **Frontend** : React JS, CSS
- **Backend** : Node JS, Express
- **Database** : MongoDB 
- **Payment Gateway** : Stripe
- **Authentication** : JWT (JSON Web Token)

## Project Structure
1. Frontend (React JS):

- **Sign In / Sign Up** : Users can create accounts and log in.
- **Cart Page** : Displays selected food items with options to modify the cart.
- **Place Order Page** : Integrates Stripe for secure online payments.
- **User Orders** : Allows users to track past orders and check order status.

2. Backend (Node JS & Express):

- **API for Food Items** : Fetch food data from MongoDB to display on the frontend.
- **Cart & Order API** : Manages the user's cart, places orders, and communicates with the Stripe API for payments.
- **Admin Panel** : Allows the admin to add, update, and delete food items. Admins can also view and update order statuses.

3. Database (MongoDB):

- **MongoDB Atlas**  is used to store user details, food items, and orders.
  
## Key Functionalities
- **Authentication** : Users can register and log in securely using JWT-based authentication.
- **Shopping Cart** : Real-time cart updates for adding/removing food items.
- **Payment** : Integration of Stripe for handling secure payments.
- **Admin Panel** : Manage the food inventory, view customer orders, and update order statuses.
- **Order Tracking** : Users can track their orders with status updates provided by the admin.

## Admin Panel Features
- **Food Management** : Add, edit, or delete food items.
- **Order Management** : View customer orders and update their status (oreder processing, out for delivery or delivered).

## Conclusion
DelishDeliver is a robust and scalable food ordering platform with real-time updates and secure payment integration. The project demonstrates a complete full-stack implementation using modern web technologies and is a practical solution for online food delivery businesses.

## Future Enhancements

- **Coupons & Discounts** : Allow users to apply discounts during checkout.
- **Order Analytics** : Provide analytics for the admin to track order trends and user activity.

## Contributing
Feel free to contribute! 
