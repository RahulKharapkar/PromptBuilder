# Custom Prompt Generator

A React + Vite-based web application that interacts with a reverse-engineered ChatGPT proxy API to generate concise and customized prompts. This app allows users to input details such as topic, purpose, tone, and length to create a refined prompt for various use cases.

## Features

- **User-Friendly Interface**: The app features a clean, responsive interface that makes it easy for users to input their requirements.
- **Customizable Prompts**: Users can define the following parameters:
  - **Topic**: Specify the subject matter of the prompt.
  - **Purpose**: Define the desired outcome of the prompt (e.g., explanation, story, summary).
  - **Tone**: Choose the tone of the response (e.g., formal, casual, professional).
  - **Length**: Adjust the length of the generated prompt to fit the user's needs.
- **Instant Generation**: Once parameters are set, users can quickly generate a refined prompt with a click of a button.
- **Clean Display**: The generated prompt is displayed in a readable, formatted layout.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (>= v16)
- [npm](https://www.npmjs.com/) (>= v8)

### Steps to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RahulKharapkar/PromptBuilder.git
   cd PromptBuilder
   
2. **Install dependencies:**
   npm install

3. **Start the development server:**
    npm run dev

Visit http://localhost:5173 in your browser to view the app.

### Usage
  Set the Topic: Enter the subject or theme for the prompt.
  Choose the Purpose: Select what you want the prompt to achieve (e.g., to inform, entertain, summarize).
  Select Tone: Pick the tone that suits your needs (e.g., formal, casual, etc.).
  Adjust Length: Decide on the length of the generated prompt.
  Generate Prompt: Click the "Generate" button to receive a refined prompt based on your selections.
### Technologies Used
  React: A JavaScript library for building user interfaces.
  Vite: A fast build tool and development server.
  ChatGPT Proxy API: A reverse-engineered API that communicates with ChatGPT to generate prompts.
  CSS: For styling the web app's user interface.

### Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Create a new pull request.

**License**
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments
Thanks to OpenAI for providing the inspiration with ChatGPT.
Special thanks to the community that helped reverse engineer the ChatGPT API.
If you have any questions or feedback, feel free to open an issue or contact me directly.
