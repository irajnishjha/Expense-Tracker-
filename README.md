# 💰 Expense Tracker Web App

A fully responsive, user-friendly **Expense Tracker Web Application** built using **HTML, CSS, and JavaScript**, designed to help users track, manage, and analyze daily financial activities. Data is stored permanently in the browser using **LocalStorage**, ensuring persistence even after refresh.

---

## 📌 Table of Contents

1. Overview
2. Features
3. Tech Stack
4. Project Structure
5. Installation & Setup
6. How It Works
7. LocalStorage Format
8. Screenshots (Placeholder)
9. Future Enhancements
10. Author

---

## 🔍 1. Overview

The Expense Tracker Web App allows users to:

* Add expenses with description, amount, category, and date.
* Use custom categories when selecting *Other*.
* View, filter, and delete expenses dynamically.
* Visualize spending patterns through a pie chart using Chart.js.
* Store all data persistently using LocalStorage.

This project focuses on clean UI, responsive layout, and smooth user interaction.

---

## 🚀 2. Features

### ✔ Add & Manage Expenses

* Add expenses with description, amount, category, and date.
* Custom category input appears when user selects **Other**.
* Delete expenses instantly from the table.

### ✔ Persistent Storage

* All expenses are saved in LocalStorage.
* Data remains even after browser refresh or restart.

### ✔ Category Filtering

* Filter expenses by category for quick insights.
* Filter dynamically updates the table and chart.

### ✔ Spending Summary

* Calculates **total spending**.
* Generates category-wise spending breakdown.

### ✔ Chart Visualization

* Pie chart created using **Chart.js**.
* Helps users track spending patterns visually.

### ✔ Clean & Responsive UI

* Dark theme layout
* Card-based components
* Mobile-friendly grid system

---

## 🛠️ 3. Tech Stack

| Component | Technology         |
| --------- | ------------------ |
| Structure | HTML5              |
| Styling   | CSS3               |
| Logic     | JavaScript (ES6)   |
| Storage   | LocalStorage       |
| Charts    | Chart.js           |
| Layout    | Flexbox + CSS Grid |

---

## 📂 4. Project Structure

```
expense-tracker/
│── index.html        # UI structure
│── style.css         # Styling and layout
│── script.js         # Application logic
│── README.md         # Project documentation
```

---

## 📥 5. Installation & Setup

1. Download or clone the repository.
2. Place all files in the same folder.
3. Open `index.html` in any browser.

No server or backend setup required.

---

## ⚙️ 6. How It Works

### 🧾 Adding an Expense

User inputs:

* Description
* Amount
* Category (or custom category)
* Date

### 💾 Saving Data

Each expense is stored in LocalStorage as an object inside an array.

### 📊 Rendering UI

JavaScript updates:

* Expense table
* Total amount
* Category-wise chart

### 🔎 Filtering

Selecting a category updates:

* Expense table
* Chart visualization

---

## 🗃️ 7. LocalStorage Data Format

```json
[
  {
    "id": 171234567890,
    "description": "Groceries",
    "amount": 500,
    "category": "Food",
    "date": "2025-01-12"
  }
]
```

---

## 📸 8. Screenshots (Add Later)

* Dashboard view
* Add Expense form
* Chart visualization
* Mobile responsive layout

---

## 🌟 9. Future Enhancements

* Edit/Update existing expense
* Monthly or date-range filter
* Export data to CSV/PDF
* Light/Dark mode switch
* Category color coding

---

## 👨‍💻 10. Author

**Rajnish Kumar Jha**
Frontend Developer | JavaScript Enthusiast

Feel free to use or modify this project for learning and portfolio building!
