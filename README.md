# Vehicle-Driver Management System
# Overview
The Vehicle-Driver Management System is a web application designed to manage and organize drivers and vehicles efficiently. This project provides functionalities for driver creation, vehicle-driver assignment, time scheduling, conflict handling, driver requests, response management, and location-based searches.

# Features
Driver Creation: Add new drivers with their credentials.
Vehicle-Driver Assignment: Assign vehicles to drivers.
Time Scheduling: Schedule and manage driver availability.
Conflict Handling: Handle scheduling conflicts.
Driver Requests: Manage and process driver requests.
Response Management: Track and manage responses to driver requests.
Location-Based Search: Search for drivers based on their location.

# Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js with Express.js
Database: MongoDB

# Installation
Clone the Repository
bash
Copy code
git clone https://github.com/your-username/vehicle-driver-management-system.git
cd vehicle-driver-management-system
Install Dependencies

Navigate to the backend directory and install the required Node.js packages:

bash
Copy code
cd backend
npm install
Set Up Environment Variables

Create a .env file in the backend directory and add the following variables:
env
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
Run the Application

Start the backend server:

bash
Copy code
npm start
The server will be running on http://localhost:5000.

# Usage
Frontend: The frontend is already implemented. You can view the website by opening the index.html file in your browser.
Backend: The backend provides APIs for interacting with the system. Refer to the API documentation for details on available endpoints and usage.
# API Documentation
For detailed information on the available API endpoints, refer to the API documentation provided in the docs directory.
Contributing
Feel free to submit issues, suggest improvements, or contribute to the project. Please follow the contribution guidelines outlined in the CONTRIBUTING.md file.
