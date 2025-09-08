Iron Lady AI Chatbot
A simple, intelligent, and responsive chatbot designed to answer FAQs about Iron Lady's leadership programs. This project was created as part of the technical screening for the AI & Technology Intern role at iamironlady.com.

It features a hybrid response system: a fast, rule-based engine for common questions and a powerful AI backend (Google Gemini) for handling any other query with contextual understanding.

✨ Features
Responsive UI: Clean, modern, and mobile-friendly chat interface built with Tailwind CSS.

Hybrid Response System:

Rule-Based: Provides instant, accurate answers for predefined FAQs (programs, duration, format, etc.).

AI-Powered: Seamlessly falls back to the Google Gemini API for dynamic, intelligent responses to any other question.

User-Friendly Experience: Includes a "Thinking..." indicator while the AI processes a request.

Zero Dependencies: Runs entirely in the browser with no need for a backend server or installations.

Clean Codebase: Organized with Separation of Concerns (HTML, CSS, JS in separate files) for easy reading and maintenance.

💻 Tech Stack
Frontend: HTML5, Tailwind CSS, Vanilla JavaScript

AI Integration: Google Gemini API (gemini-1.5-flash-latest) via direct fetch calls.

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development, testing, or demonstration purposes.

Prerequisites
You only need a modern web browser (like Chrome, Firefox, or Edge) and a text editor (like VS Code).

Installation & Setup
Step 1: Clone the Repository
First, clone this repository to your local machine using Git.

git clone "https://github.com/Srivi24/Iron-Lady-Chatbot.git"
cd Iron-Lady-Chatbot

Step 2: Get Your Google Gemini API Key
This project requires a Google Gemini API key to enable its AI features. The free tier is very generous and perfect for this project.

Navigate to Google AI Studio.

Sign in with your Google account.

Click the "Get API key" button, usually found in the top right or left menu.

Click "Create API key in new project".

A new API key will be generated. Copy this key immediately and save it somewhere secure.

Step 3: Configure the API Key
Now, you need to add the API key you just copied into the project.

Open the project folder in your code editor.

Navigate to the script.js file.

At the very top of the file, you will see the following line:

const API_KEY = 'YOUR_API_KEY_HERE';

Replace the placeholder string 'YOUR_API_KEY_HERE' with your actual Gemini API key.

Example:

const API_KEY = 'AbCdEfGhIjKlMnOpQrStUvWxYz1234567890'; // This is just an example

▶️ Running the Application
This is a static web application, so running it is very simple.

After configuring your API key, make sure you have saved the script.js file.

In your file explorer, find the index.html file in the project directory.

Right-click on index.html and choose "Open with" your preferred web browser (e.g., Google Chrome).

The chatbot application will now be running locally in your browser!

💬 How to Use
Simply type a question into the input box at the bottom and either press the "Enter" key or click the send button.

Try asking a predefined question:

What programs do you offer?

How long is the program duration?

Are certificates provided?

Try asking an open-ended question to test the AI:

Why is leadership important for tech professionals?

Summarize your programs in one sentence.

Who is this program for?

📁 Project Structure
.
├── index.html      # The main HTML file for structure
├── script.js       # All JavaScript logic, including API calls
├── style.css       # Custom stylesheet (currently empty)
└── README.md       # You are here!

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.