# Cook.io - Cooking Made Easy 🍽️

![Cook.io Banner](./assets/images/banner.png)

## 📌 About the Project
**Cook.io** is a modern, user-friendly recipe application that allows users to search for, view, and save their favorite recipes. It leverages the **Edamam API** to fetch and display a wide range of recipes based on various filters like ingredients, dietary preferences, and cuisine types.

## 🎯 Features
- 🔍 **Search Recipes** by keyword (e.g., "pizza," "burger").
- 🏷 **Filter Recipes** based on diet, health, and cuisine type.
- 📖 **View Recipe Details** including ingredients, calories, and cooking time.
- 💾 **Save Favorite Recipes** for later access.
- 🌙 **Dark/Light Mode Toggle** for better user experience.

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript (ES6+)
- **API:** Edamam Recipe API
- **Storage:** LocalStorage (for saved recipes)

## 📂 Project Structure
```
Cook.io/
│-- assets/
│   ├── css/style.css
│   ├── images/
│   ├── js/
│   │   ├── api.js
│   │   ├── global.js
│   │   ├── home.js
│   │   ├── detail.js
│   │   ├── recipes.js
│   │   ├── saved_recipes.js
│-- index.html
│-- recipes.html
│-- detail.html
│-- saved-recipes.html
│-- README.md
```

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/alienxviking/cook.io.git
cd cook.io
```

### 2️⃣ Open in Browser
Simply open `index.html` in your favorite browser.

### 3️⃣ API Configuration
To use the Edamam API, make sure your `api.js` file contains **valid credentials**:
```js
const APP_ID = "438677e8";
const API_KEY = "7a5ee1fd6ae47e4fc6108f88a93facd6";
const USER_ID = "alienxviking";
```
Replace with your **actual** Edamam credentials.

### 4️⃣ Run Locally with Live Server *(Optional)*
Use **VS Code Live Server** extension or run:
```sh
npx http-server
```

## ⚡ API Usage & Rate Limits
Cook.io uses the **Edamam Recipe API** which has rate limits:
- **Free Plan:** 10 requests per minute, 1000 requests per month.
- Upgrade if you need more requests: [Edamam Pricing](https://developer.edamam.com/plans)

## 🐛 Troubleshooting
If the API isn't working:
1. **Check API Key & User ID** in `api.js`.
2. **Wait for the rate limit reset** if you've exceeded requests.
3. **Open the browser console (`F12` > Console)** for errors.


Happy Cooking! 🍕🔥

