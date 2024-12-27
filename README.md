# My Next.js App

This is a Next.js application that serves as a sample project demonstrating the use of React components, TypeScript, and CSS modules.

## Project Structure

```
my-nextjs-app
├── pages
│   ├── index.tsx          # Main entry point of the application
│   └── _app.tsx           # Custom App component for global styles
├── public
│   └── favicon.ico        # Favicon for the application
├── styles
│   ├── globals.css        # Global CSS styles
│   └── Home.module.css    # CSS module styles for the Home component
├── components
│   └── Navbar.tsx         # Navigation bar component
├── package.json           # npm configuration file
├── tsconfig.json          # TypeScript configuration file
├── next.config.js         # Next.js configuration file
└── README.md              # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-nextjs-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the application in action.

## Features

- TypeScript support for type safety
- CSS modules for scoped styling
- Custom navigation bar component
- Global styles for consistent design

## License

This project is licensed under the MIT License.