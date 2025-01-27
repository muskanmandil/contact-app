# Contact Management App

## Project Overview

This Contact Management App is a simple yet efficient application to manage contacts. Users can add, edit, and delete contact details using an intuitive UI built with Material-UI. The app uses a Node.js backend with a MongoDB database to store and manage contact information. 

I have hosted the application here on https://contact-app-ten-mu.vercel.app.

If you'd like to run the project locally, follow the instructions below.

## Setup Instructions

### Prerequisites
- **Node.js**: Ensure you have Node.js installed on your system.

### Steps to Run the Project
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/muskanmandil/contact-app
   cd contact-app
   ```

2. **Frontend Setup**:
   Navigate to the `frontend` folder and install dependencies:
   ```bash
   cd frontend
   npm install
   npm start
   ```
   This will start the React development server. The frontend will run on `http://localhost:3000` by default.

3. **Backend Setup**:
   Navigate to the `backend` folder and install dependencies:
   ```bash
   cd backend
   npm install
   node server.js
   ```
   This will start the backend server. By default, it will run on `http://localhost:5000`.

4. **Environment Files**:
   All necessary `.env` files for both frontend and backend are included for ease of setup.

---

## Database Choice: MongoDB

The app uses MongoDB as its database for the following reasons:
- **Flexibility**: The NoSQL schema is flexible, making it easy to add or modify fields in the contact document as requirements change.
- **Cloud Hosting**: MongoDB can be easily hosted using MongoDB Atlas, providing accessibility and reducing the need for local database management.
- **Ease of Integration**: MongoDB integrates seamlessly with Node.js and allows fast queries, making it ideal for this real-time application.
- **JSON-Like Documents**: MongoDB stores data in a JSON-like format, aligning naturally with the structure of the contact data used in this app.

---

## App Workflow

1. **Add a Contact**:
   - Click on the **+** button located at the bottom-right corner of the screen.
   - A form will appear in a popup/overlay. Fill in the required details and click **Submit**.
   - The new contact will be added and displayed in the table.

2. **Edit a Contact**:
   - Click on the **Edit** button in the **Actions** column of the contact you want to modify.
   - The same form will appear with the fields pre-filled with the existing details.
   - Update the details and click **Submit** to save the changes.

3. **Delete a Contact**:
   - Click on the **Delete** button in the **Actions** column of the contact you want to remove.
   - The contact will be deleted from the database and removed from the table.

---