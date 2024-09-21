# Data Processing Web Application

This project is a web application designed to process and display data, focusing on data type inference and conversion for datasets using Python and Pandas on the backend, and a JavaScript framework (React) for the frontend.

## Features

- **Pandas Data Type Inference and Conversion:**
  - Automatically infers and converts data types in CSV or Excel datasets.
  - Addresses common issues with data type inference, such as mixed data types and non-standard date formats.
  - Optimized for performance and capable of handling large datasets.

- **Django Backend Development:**
  - Incorporates Python scripts for data processing into a Django project.
  - Implements Django models, views, and URLs to handle data processing logic and user interactions.
  - Provides a backend API for seamless interaction with the frontend.

- **Frontend Development using React:**
  - Developed a frontend application using React to interact with the Django backend.
  - Allows users to upload data (CSV/Excel files), submit for processing, and display the processed data.
  - Maps backend (Pandas) data types to user-friendly names for better user understanding.

## Project Structure

- **`data_processing_backend/`:** Contains the Django backend project files.
- **`data_processing_project/`:** Contains the React frontend project files.
- **`sample_data.csv`:** Sample CSV file for testing data processing functionalities.

## Installation

1. Clone the repository:
https://github.com/DeepakBolleddu/My-data-processing-app


2. Install dependencies:
- Backend:
  ```
  cd data_processing_backend/
  pip install -r requirements.txt
  ```
- Frontend:
  ```
  cd data_processing_project/
  npm install
  ```

3. Run the development servers:
- Backend:
  ```
  python manage.py runserver
  ```
- Frontend:
  ```
  npm start
  ```

4. Access the application at `http://localhost:3000` in your web browser.

## Usage

1. Upload a CSV or Excel file containing your dataset.
2. Submit the file for processing.
3. View the processed data displayed on the frontend.
4. Optionally, customize data types for columns if needed.

## Contributors

- Deepak Bolleddu (@deepakbolleddu)
