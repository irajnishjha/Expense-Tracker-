💰 Expense Tracker Web App

A simple and efficient Expense Tracker Web Application built using HTML, CSS, and JavaScript, designed to help users record, analyze, and manage their daily financial activities.
The app stores all data using LocalStorage, ensuring that expenses remain saved even after refreshing or closing the browser.

🚀 Features
✅ Add Expenses Easily

Input fields for description, amount, category, and date

Supports custom categories when user selects “Other”

✅ Dynamic Expense Management

Add and delete expenses instantly

All updates reflect in real time in the UI

✅ Persistent Storage

Uses LocalStorage to save expenses permanently

Data remains available even after page refresh

✅ Total & Category-wise Summaries

Automatically calculates total spending

Groups and analyzes spending by category

✅ Data Visualization (Chart.js)

Displays spending breakdown using pie chart or bar chart

Helps users understand spending patterns

✅ Filtering System

Filter expenses by category to quickly analyze specific spending areas

✅ Responsive & Clean UI

Modern card layout

Dark theme styling

Mobile-friendly design

🛠️ Tech Stack
Component	Technology
Frontend Structure	HTML5
UI Styling	CSS3
Logic & Interactivity	JavaScript (ES6)
Data Storage	LocalStorage
Visualization	Chart.js
Layout	Responsive Grid & Flexbox
📸 Screenshots (Add Later)

You can insert screenshots of:

Main dashboard

Add Expense form

Chart visualization

Filter system

📂 Project Structure
/expense-tracker
│── index.html
│── style.css
│── script.js
│── README.md

🧠 How It Works
1. Add Expense

User enters:

Description

Amount

Category (or custom category)

Date

Data is validated and stored in LocalStorage.

2. Render Expenses

The expense table updates instantly using JavaScript DOM manipulation.

3. Track Spending

The app calculates:

Total spending

Category-wise totals

Graph visualization

4. Filter Expenses

Users can filter by category to get a targeted view.

🗃️ LocalStorage Format

Data is stored like this:

[
  {
    "id": 17123456789,
    "description": "Groceries",
    "amount": 450,
    "category": "Food",
    "date": "2025-01-01"
  }
]

📈 Future Enhancements (Optional)

You can add these for your resume or real-life usage:

Edit expense feature

Monthly spending report

Export data as CSV

Authentication + cloud sync

Light/Dark theme switch

🧑‍💻 Author

Rajnish Kumar Jha
Web Developer | JavaScript Enthusiast
Feel free to connect or explore more projects!
