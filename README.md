
# SpendWise - Interactive Expense Tracker

## Project Overview

SpendWise is a personal budget and expense tracking web application.
It helps users set a budget, record expenses, calculate spending,
and monitor their remaining budget.

This project was improved using JavaScript concepts learned
during Week 6 of the PLP Web Development course.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Project Files

- index.html - The structure of the application.
- style.css - The styling and responsive design.
- script.js - The application logic and interactivity.
- README.md - Project documentation.

## Features

- Set a personal budget.
- Add expenses with names, amounts, and categories.
- Store multiple expense records in an array.
- Calculate total expenses.
- Display the remaining budget.
- Provide budget feedback.
- Delete individual expenses.
- Clear all expense records.
- Update the dashboard dynamically.
- Validate user input.

## JavaScript Concepts Used

### 1. Conditional Statements

Conditional statements are used to validate user input and
evaluate budgeting scenarios.

The application checks whether the user has exceeded the budget,
used the entire budget, used 80% or more of the budget,
or is still within the budget.

### 2. Arrays

An array called expenses stores multiple expense records.

Each expense is stored as an object containing an ID, name,
amount, and category.

The array allows the application to manage multiple records.

### 3. Loops

For loops are used to process expense records.

The application uses loops to calculate the total expenses
and display expense records on the webpage.

### 4. DOM Manipulation

JavaScript uses DOM manipulation to update dashboard figures,
display expense records, and provide budget feedback.

The webpage updates without requiring a full page reload.

### 5. Event Listeners

Event listeners handle user interactions.

The application responds to form submissions, budget settings,
expense deletion, and clearing all expense records.

### 6. Functions

Functions are used to organize the application logic.

Examples include:

- formatMoney()
- calculateTotalExpenses()
- updateDashboard()
- displayExpenses()
- updateBudgetFeedback()
- deleteExpense()

## Challenges Encountered

One challenge was connecting JavaScript to HTML elements
and ensuring the dashboard updated correctly.

I resolved this by using DOM selectors, event listeners,
functions, and loops to process and display expense records.

Another challenge was validating user input and handling
budget scenarios. I used conditional statements to provide
appropriate feedback.

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open index.html in a browser.
4. Set a budget.
5. Add expenses.
6. Test the dashboard, delete button, and clear button.

## Author

PLP Web Development Fundamentals - Week 6 Assignment
