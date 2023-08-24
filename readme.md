# Interview Rabacsa Project Setup Instructions

This repository contains a project with a frontend and a server, organized in separate folders. The frontend is built with React, Redux, and Tailwind CSS, while the server is built with Node.js and Express. The project displays dummy JSON API data.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone https://github.com/gerry9009/interview-rabacsa.git
   ```

2. **Navigate to the Project Directory**

   Move into the project directory using the following command:

   ```bash
   cd interview-rabacsa
   ```

3. **Install Dependencies**

   - For the frontend, navigate to the `frontend` folder:

     ```bash
     cd frontend
     ```

     Install the frontend dependencies:

     ```bash
     npm install
     ```

   - For the server, navigate to the `server` folder:

     ```bash
     cd ../server
     ```

     Install the server dependencies:

     ```bash
     npm install
     ```

4. **Start the Server**

   - In the `server` folder, start the server:

     ```bash
     npm start
     ```

5. **Start the Frontend**

   - In the `frontend` folder, start the development server:

     ```bash
     npm start
     ```

6. **Access the Application**

   Open your web browser and visit `http://localhost:3000` to see the frontend of the application.

## Project Structure

- `frontend/`: Contains the React frontend code with Redux and Tailwind CSS.
- `server/`: Contains the Node.js and Express server code.

## Notes

- This project is for educational purposes and demonstrates the integration of React, Redux, Tailwind CSS, Node.js, and Express.
- Dummy JSON API data is used to simulate data fetching.
