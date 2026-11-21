
/* SpendWise - Week 6 Interactive Project */

// 1. VARIABLES
let budget = 0;

// 2. ARRAY TO STORE MULTIPLE EXPENSE RECORDS
let expenses = [];

// 3. SELECT HTML ELEMENTS USING THE DOM
const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget-input");

const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");

const budgetDisplay = document.getElementById("budget-display");
const totalExpensesDisplay = document.getElementById("total-expenses");
const remainingBudgetDisplay = document.getElementById("remaining-budget");

const expenseList = document.getElementById("expense-list");
const budgetFeedback = document.getElementById("budget-feedback");
const clearExpensesButton = document.getElementById("clear-expenses");

// 4. FUNCTION TO FORMAT MONEY
function formatMoney(amount) {
    return "KSh " + amount.toFixed(2);
}

// 5. SET THE BUDGET
budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const enteredBudget = Number(budgetInput.value);

    // DECISION MAKING
    if (enteredBudget <= 0 || !Number.isFinite(enteredBudget)) {
        alert("Please enter a budget greater than zero.");
        return;
    }

    budget = enteredBudget;

    budgetDisplay.textContent = formatMoney(budget);

    budgetInput.value = "";

    updateDashboard();
});

// 6. ADD AN EXPENSE
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const expenseName = expenseNameInput.value.trim();
    const amount = Number(amountInput.value);
    const category = categoryInput.value;

    // VALIDATION USING CONDITIONALS
    if (expenseName === "") {
        alert("Please enter an expense name.");
        return;
    }

    if (amount <= 0 || !Number.isFinite(amount)) {
        alert("Please enter an amount greater than zero.");
        return;
    }

    if (category === "") {
        alert("Please select a category.");
        return;
    }

    // CREATE AN EXPENSE OBJECT
    const newExpense = {
        id: Date.now(),
        name: expenseName,
        amount: amount,
        category: category
    };

    // STORE EXPENSE IN ARRAY
    expenses.push(newExpense);

    // UPDATE THE WEBPAGE
    updateDashboard();

    // CLEAR FORM INPUTS
    expenseForm.reset();
});

// 7. FUNCTION TO CALCULATE TOTAL EXPENSES
function calculateTotalExpenses() {
    let total = 0;

    // LOOP THROUGH THE EXPENSE ARRAY
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// 8. FUNCTION TO UPDATE THE DASHBOARD
function updateDashboard() {
    const total = calculateTotalExpenses();
    const remaining = budget - total;

    totalExpensesDisplay.textContent = formatMoney(total);
    remainingBudgetDisplay.textContent = formatMoney(remaining);

    // DISPLAY EXPENSES
    displayExpenses();

    // UPDATE BUDGET FEEDBACK
    updateBudgetFeedback(total, remaining);
}

// 9. DISPLAY EXPENSES ON THE WEBPAGE
function displayExpenses() {
    expenseList.innerHTML = "";

    // CONDITIONAL TO CHECK IF THERE ARE NO EXPENSES
    if (expenses.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.textContent = "No expenses added yet.";
        expenseList.appendChild(emptyMessage);
        return;
    }

    // LOOP THROUGH THE ARRAY
    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];

        const listItem = document.createElement("li");

        const details = document.createElement("div");
        details.className = "expense-details";

        const name = document.createElement("strong");
        name.textContent = expense.name;

        const category = document.createElement("small");
        category.textContent = "Category: " + expense.category;

        const amount = document.createElement("p");
        amount.textContent = formatMoney(expense.amount);

        details.appendChild(name);
        details.appendChild(category);
        details.appendChild(amount);

        // CREATE DELETE BUTTON
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.type = "button";

        // EVENT LISTENER FOR DELETING AN EXPENSE
        deleteButton.addEventListener("click", function() {
            deleteExpense(expense.id);
        });

        listItem.appendChild(details);
        listItem.appendChild(deleteButton);

        expenseList.appendChild(listItem);
    }
}

// 10. BUDGET FEEDBACK USING CONDITIONALS
function updateBudgetFeedback(total, remaining) {
    budgetFeedback.className = "";

    // DECISION MAKING
    if (budget <= 0) {
        budgetFeedback.textContent =
            "Set your budget to start tracking your spending.";
        budgetFeedback.className = "feedback-normal";

    } else if (total === 0) {
        budgetFeedback.textContent =
            "Your budget is set. Start adding expenses!";
        budgetFeedback.className = "feedback-normal";

    } else if (remaining < 0) {
        budgetFeedback.textContent =
            "Warning! You have exceeded your budget by " +
            formatMoney(Math.abs(remaining)) + ".";
        budgetFeedback.className = "feedback-danger";

    } else if (remaining === 0) {
        budgetFeedback.textContent =
            "You have used your entire budget.";
        budgetFeedback.className = "feedback-warning";

    } else if (total >= budget * 0.8) {
        budgetFeedback.textContent =
            "Warning! You have used 80% or more of your budget. Remaining: " +
            formatMoney(remaining);
        budgetFeedback.className = "feedback-warning";

    } else {
        budgetFeedback.textContent =
            "Good job! You are within your budget. Remaining: " +
            formatMoney(remaining);
        budgetFeedback.className = "feedback-normal";
    }
}

// 11. DELETE AN EXPENSE
function deleteExpense(id) {
    expenses = expenses.filter(function(expense) {
        return expense.id !== id;
    });

    updateDashboard();
}

// 12. CLEAR ALL EXPENSES
clearExpensesButton.addEventListener("click", function() {
    if (expenses.length === 0) {
        alert("There are no expenses to clear.");
        return;
    }

    const confirmClear = confirm(
        "Are you sure you want to clear all expenses?"
    );

    if (confirmClear) {
        expenses = [];
        updateDashboard();
    }
});

// 13. INITIAL DASHBOARD DISPLAY
updateDashboard();
