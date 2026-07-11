# Continuous Integration Pipeline

## Overview

This project demonstrates a Continuous Integration (CI) pipeline using GitHub Actions. The workflow automatically validates the project whenever code is pushed to the repository or a pull request is created. It installs dependencies, builds the application, performs code quality checks, executes automated tests, and runs a security scan to help maintain code quality and reliability.

---

## Features

- Automated CI pipeline using GitHub Actions
- Triggered on every push to the `main` branch
- Triggered on every pull request to the `main` branch
- Automatic dependency installation
- Build validation
- ESLint code quality checks
- Prettier formatting validation
- Automated testing using Jest
- Security scanning using `npm audit`

---

## Technologies Used

- Node.js
- Express.js
- GitHub Actions
- Jest
- ESLint
- Prettier
- Supertest
- npm

---

## Workflow Overview

The GitHub Actions workflow performs the following steps automatically:

1. Checkout the repository
2. Set up the Node.js environment
3. Install project dependencies
4. Build the project
5. Run ESLint for code quality checks
6. Verify code formatting using Prettier
7. Execute automated tests with Jest
8. Perform a security scan using `npm audit`

---

## Workflow Triggers

The workflow executes automatically when:

- Code is pushed to the `main` branch.
- A pull request is opened or updated targeting the `main` branch.

---

## Project Structure

```text
ci-pipeline-demo/
│
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   ├── app.js
│   └── server.js
├── tests/
│   └── app.test.js
├── .eslintrc.json
├── .prettierrc
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/ci-pipeline-demo.git
```

Navigate to the project directory:

```bash
cd ci-pipeline-demo
```

Install dependencies:

```bash
npm install
```

---

## Running the Application

Start the server:

```bash
npm start
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## Available Scripts

Run the development server:

```bash
npm start
```

Run the build step:

```bash
npm run build
```

Run automated tests:

```bash
npm test
```

Run ESLint:

```bash
npm run lint
```

Format the project:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

Run a security scan:

```bash
npm audit
```

---

## GitHub Actions Workflow

The GitHub Actions workflow automatically validates the project by:

- Installing dependencies
- Building the application
- Running ESLint
- Checking formatting with Prettier
- Executing Jest test cases
- Performing a security scan with `npm audit`

The workflow helps detect issues early and ensures code quality before changes are merged.

---

## Screenshots

### GitHub Actions Workflow

<img width="1497" height="286" alt="image" src="https://github.com/user-attachments/assets/09c065ef-bbdc-4f00-bd58-0e74ffd07772" />

### Workflow Execution

<img width="1600" height="748" alt="image" src="https://github.com/user-attachments/assets/8590dd17-cd17-44da-be2c-33e8fdd7f1ca" />

Demo update





