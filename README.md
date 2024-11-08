# Form Validation Project Using EJS, Tailwind CSS, and JavaScript

This simple project demonstrates form validation using **EJS (Embedded JavaScript)** for templating, **Tailwind CSS** for modern styling, and **JavaScript** for client-side validation. It provides an intuitive way to validate user input in forms and displays feedback for incorrect inputs.

## Features

- **EJS Templates**: Uses EJS for dynamic content generation, making it easy to embed JavaScript logic directly into HTML templates.
- **Tailwind CSS**: Implements Tailwind CSS for clean and responsive UI styling.
- **Client-side Validation**: Utilizes JavaScript for client-side form validation, ensuring instant user feedback.
- **Error Messages**: Displays clear and informative error messages to guide users in correcting invalid input.
- **Responsive Design**: Ensures the form works smoothly on various screen sizes.

## Setup Instructions

1. **Clone the Repository:**
    ```bash
    git clone <repository-url>
    ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Start the Server:**
    ```bash
    npm start
    ```

4. **Access the Application:**
   Open your web browser and go to [http://localhost:3000](http://localhost:3000) to use the application.

## Usage

1. **Fill Out the Form:**
   Enter your information in the provided form fields.

2. **Submit the Form:**
   Click the submit button to trigger validation.

3. **Validation Feedback:**
   If any fields are invalid, error messages will appear next to the respective fields. Adjust the inputs as needed.

4. **Successful Submission:**
   Once all fields are valid, the form will be submitted successfully.

## File Structure

- **`views/`**: Contains EJS templates for rendering HTML.
- **`public/`**: Holds static assets such as CSS and client-side JavaScript files.
- **`app.js`**: The main entry point of the application, handling server setup and routes.
- **`routes/`**: Includes route handlers for various endpoints.
- **`utils/`**: Contains utility functions for form validation and other tasks.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the **MIT License**.
