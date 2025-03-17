# 🚀 Invoice Form with Real-Time Data Updates

A **React.js** project that allows users to create invoices with real-time data updates. The form includes features such as **form validation, reset functionality, GraphQL API integration, and real-time invoice preview**. The design follows the **Figma** specifications and ensures a **pixel-perfect responsive layout**.

---

## 📌 Features

### **Invoice Form**
- **Structured sections:** "Bill From," "Bill To," "Invoice Details," and "Items List."
- **Form validation:** All fields are required.
- **Invoice Date:** Defaults to the current date.
- **Price calculations:**
  - Calculate the **price per item** dynamically.
  - Compute the **total amount after a 10% tax deduction**.
- **Invoice Terms:** Supports `NET_10_DAYS`, `NET_20_DAYS`, and `NET_30_DAYS`.

### **Real-Time Data Display**
- Displays **live invoice details** as the user fills the form.
- Updates **instantly** when user modifies form fields.

### **Reset Functionality**
- **"Reset" button** clears the form and invoice preview.

### **Save Functionality**
- Saves invoice data to a **GraphQL API** using a **mutation**.
- Shows a **toast message: "Invoice created successfully!"**.
- **Resets form fields** after successful creation.

### **Design & Responsiveness**
- **Pixel-perfect design** following Figma specifications.
- Fully **responsive layout** for different screen sizes.

---

## 🛠️ Tech Stack

- **Frontend**: React.js (React Hooks, Context API)
- **Form Handling**: Formik + Yup (for validation)
- **UI Library**: Material-UI / Tailwind CSS (choose one)
- **Notifications**: React-Toastify

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/invoice-form.git
cd invoice-form
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
- Create a .env file in the root directory:
```sh
REACT_APP_GRAPHQL_API_URL=https://your-graphql-api.com/graphql
```

### 4️⃣ Start the Development Server
```sh
npm start
```
