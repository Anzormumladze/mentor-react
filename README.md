
# Task Management App

A task management application built with React, TypeScript, and Material-UI.

## Table of Contents

- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the project, clone the repository and run the following commands:

```bash
git clone <repository-url>
cd task-management-app
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project Structure

The project structure is as follows:

```
task-management-app/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── TaskForm.tsx
│   │   └── TaskList.tsx
│   ├── hooks/
│   │   ├── useAuthors.ts
│   │   └── useTasks.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── Tasks.tsx
│   ├── services/
│   ├── utils/
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── README.md
```

## Dependencies

The project dependencies are listed in the `package.json` file:

```json
"dependencies": {
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@hookform/resolvers": "^3.6.0",
    "@mui/material": "^5.15.21",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^14.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.10",
    "axios": "^1.7.2",
    "framer-motion": "^11.2.12",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.52.0",
    "react-router-dom": "^6.24.0",
    "react-scripts": "5.0.1",
    "sass": "^1.77.6",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4",
    "yup": "^1.4.0"
}
```

## Features

- Task creation and management
- Form handling with React Hook Form
- Validation with Yup
- State management with React hooks
- Routing with React Router
- Styling with Material-UI and SASS

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License.

---

