const STORAGE_KEY = "expense-tracker-data";

let expenses = [];
let expenseChart = null;

// DOM elements
const expenseForm = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const expenseTableBody = document.getElementById("expense-table-body");
const totalAmountEl = document.getElementById("total-amount");
const filterCategorySelect = document.getElementById("filter-category");
const chartCanvas = document.getElementById("expense-chart");

// Initialize date field with today's date
dateInput.valueAsNumber = Date.now() - new Date().getTimezoneOffset() * 60000;

// Load + render on start
loadExpensesFromStorage();
render();

// --- LocalStorage helpers ---
function saveExpensesToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
}

function loadExpensesFromStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      expenses = JSON.parse(data);
    } catch (e) {
      console.error("Error parsing expenses from storage", e);
      expenses = [];
    }
  }
}

// --- Form submit handler ---
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;
  const date = dateInput.value;

  if (!description || isNaN(amount) || !category || !date) {
    alert("Please fill all fields correctly.");
    return;
  }

  const newExpense = {
    id: Date.now(),
    description,
    amount,
    category,
    date
  };

  expenses.push(newExpense);
  saveExpensesToStorage();
  render();

  expenseForm.reset();
  dateInput.valueAsNumber =
    Date.now() - new Date().getTimezoneOffset() * 60000;
});

// --- Filter handler ---
filterCategorySelect.addEventListener("change", () => {
  render();
});

// --- Render full UI ---
function render() {
  const filteredExpenses = getFilteredExpenses();
  renderTable(filteredExpenses);
  renderTotal(filteredExpenses);
  renderChart(filteredExpenses);
}

// --- Filter logic ---
function getFilteredExpenses() {
  const filterCategory = filterCategorySelect.value;
  if (filterCategory === "All") {
    return expenses.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  }
  return expenses
    .filter((exp) => exp.category === filterCategory)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

// --- Render table ---
function renderTable(list) {
  expenseTableBody.innerHTML = "";

  if (list.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.textContent = "No expenses added yet.";
    cell.style.textAlign = "center";
    cell.style.color = "#9ca3af";
    row.appendChild(cell);
    expenseTableBody.appendChild(row);
    return;
  }

  list.forEach((expense) => {
    const row = document.createElement("tr");

    const descTd = document.createElement("td");
    descTd.textContent = expense.description;

    const catTd = document.createElement("td");
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = expense.category;
    catTd.appendChild(badge);

    const dateTd = document.createElement("td");
    dateTd.textContent = formatDate(expense.date);

    const amountTd = document.createElement("td");
    amountTd.textContent = expense.amount.toFixed(2);

    const actionTd = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteExpense(expense.id));
    actionTd.appendChild(deleteBtn);

    row.appendChild(descTd);
    row.appendChild(catTd);
    row.appendChild(dateTd);
    row.appendChild(amountTd);
    row.appendChild(actionTd);

    expenseTableBody.appendChild(row);
  });
}

// --- Render total amount ---
function renderTotal(list) {
  const total = list.reduce((sum, exp) => sum + exp.amount, 0);
  totalAmountEl.textContent = total.toFixed(2);
}

// --- Render chart (by category) ---
function renderChart(list) {
  const categoryTotals = {};
  list.forEach((exp) => {
    if (!categoryTotals[exp.category]) {
      categoryTotals[exp.category] = 0;
    }
    categoryTotals[exp.category] += exp.amount;
  });

  const labels = Object.keys(categoryTotals);
  const data = Object.values(categoryTotals);

  if (expenseChart) {
    expenseChart.destroy();
  }

  if (labels.length === 0) {
    // If no data, don't draw chart
    return;
  }

  expenseChart = new Chart(chartCanvas, {
    type: "pie",
    data: {
      labels,
      datasets: [
        {
          data,
          // Chart.js will auto-pick colors if not provided in v4,
          // but we can provide a simple set for clarity.
          backgroundColor: [
            "#3b82f6",
            "#22c55e",
            "#ef4444",
            "#eab308",
            "#a855f7",
            "#f97316"
          ]
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "#e5e7eb"
          }
        }
      }
    }
  });
}

// --- Delete expense ---
function deleteExpense(id) {
  const confirmed = confirm("Delete this expense?");
  if (!confirmed) return;

  expenses = expenses.filter((exp) => exp.id !== id);
  saveExpensesToStorage();
  render();
}

// --- Utils ---
function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
