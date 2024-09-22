# Tarik

**Tarik** is an interactive, bilingual (English and Amharic) educational web platform that delves into Ethiopia's rich history from pre-historic times to modern history. Centered around the **"Fetha Negest"** (Law of the Kings), Tarik integrates legal, religious, and social aspects of Ethiopian history. The platform leverages modern web technologies to provide an engaging learning experience through interactive content, gamification, AI-generated summaries, quizzes, and an interactive timeline.

---

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Comprehensive Content**: Detailed coverage of all eras of the Ethiopian Empire, including pre-historic times to modern history.
- **Central Focus on "Fetha Negest"**: In-depth analysis and exploration of its origins, influence, and significance.
- **Bilingual Support**: Content available in both English and Amharic, with seamless language switching.
- **Interactive Learning Tools**:
  - Gamification elements: Points, badges, and levels.
  - AI-generated summaries personalized to user progress.
  - Adaptive quizzes tailored to the user's knowledge level.
- **User Roles and Contributions**:
  - **Users**: Access content, track progress, and participate in quizzes.
  - **Contributors**: Submit content for review.
  - **Admins**: Review and approve user-submitted content.
- **Interactive Timeline**: Visual representation of significant events and historical figures.
- **Community Engagement**: Discussion forums and feedback mechanisms.
- **Responsive Design**: Optimized for desktops, tablets, and mobile devices with accessibility compliance.
- **Notifications**: Leveraging `react-hot-toast` for user-friendly notifications.

---

## Technology Stack

### **Frontend**

- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Notifications**: react-hot-toast
- **UI Components**: Custom components based on Figma design
- **Routing**: Next.js routing
- **Forms and Validation**: React Hook Form and Yup
- **Internationalization (i18n)**: Next.js built-in i18n support or react-i18next

### **Backend**

- **Framework**: NestJS with TypeScript
- **Database**: PostgreSQL with TypeORM
- **Authentication**: Passport.js with JWT strategy
- **Configuration**: @nestjs/config
- **Validation**: class-validator and class-transformer
- **Logging**: NestJS built-in logger
- **API Documentation**: Swagger (OpenAPI)

### **DevOps and Utilities**

- **Version Control**: Git
- **Package Management**: Yarn
- **Linters and Formatters**: ESLint, Prettier, and Husky with lint-staged
- **Environment Management**: dotenv
- **Testing**:
  - **Frontend**: Jest and React Testing Library
  - **Backend**: Jest and Supertest

---

## Project Structure

```
.
├── backend
│   ├── src
│   │   ├── auth
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.module.ts
│   │   │   ├── auth.service.ts
│   │   │   └── jwt.strategy.ts
│   │   ├── users
│   │   │   ├── dto
│   │   │   ├── user.entity.ts
│   │   │   ├── users.controller.ts
│   │   │   ├── users.module.ts
│   │   │   └── users.service.ts
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   └── ...
│   ├── test
│   ├── nest-cli.json
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
└── web
    ├── src
    │   ├── pages
    │   │   ├── index.tsx
    │   │   ├── login.tsx
    │   │   ├── dashboard.tsx
    │   │   └── ...
    │   ├── components
    │   │   ├── Header.tsx
    │   │   ├── Footer.tsx
    │   │   ├── ToastContainer.tsx
    │   │   └── ...
    │   ├── store
    │   │   └── useStore.ts
    │   ├── utils
    │   │   ├── api.ts
    │   │   └── ...
    │   ├── styles
    │   │   └── globals.css
    │   ├── app
    │   │   ├── layout.tsx
    │   │   └── ...
    │   └── ...
    ├── public
    │   ├── favicon.ico
    │   └── ...
    ├── next.config.js
    ├── package.json
    ├── tailwind.config.js
    ├── tsconfig.json
    └── ...
```

---

## Prerequisites

- **Node.js** >= 14.x
- **Yarn** package manager
- **PostgreSQL** database
- **Git** for version control
- **An IDE/Text Editor** (e.g., VSCode)

---

## Getting Started

### Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/tarik.git
   cd tarik/backend
   ```

2. **Install Dependencies**

   ```bash
   yarn install
   ```

3. **Configure Environment Variables**

   - Create a `.env.development` file in the `backend` directory.

     ```dotenv
     DATABASE_HOST=localhost
     DATABASE_PORT=5432
     DATABASE_USER=your_db_username
     DATABASE_PASSWORD=your_db_password
     DATABASE_NAME=tarik_db
     JWT_SECRET=your_jwt_secret_key
     ```

4. **Set Up the Database**

   - Ensure PostgreSQL is running.
   - Create a new database:

     ```sql
     CREATE DATABASE tarik_db;
     ```

5. **Run Database Migrations**

   - **Note**: If using `synchronize: true` in TypeORM config during development, migrations may not be necessary.

6. **Start the Backend Server**

   ```bash
   yarn start:dev
   ```

   - The backend server should now be running on `http://localhost:3000`.

### Frontend Setup

1. **Navigate to the Frontend Directory**

   ```bash
   cd ../web
   ```

2. **Install Dependencies**

   ```bash
   yarn install
   ```

3. **Configure Environment Variables**

   - Create a `.env.local` file in the `web` directory.

     ```dotenv
     NEXT_PUBLIC_API_URL=http://localhost:3000/api
     ```

4. **Run the Frontend Server**

   ```bash
   yarn dev
   ```

   - The frontend application should now be running on `http://localhost:3001` (or `http://localhost:3000` if the port is not specified).

---

## Available Scripts

### Backend Scripts (from `/backend` directory)

- **Start Development Server**

  ```bash
  yarn start:dev
  ```

- **Build for Production**

  ```bash
  yarn build
  ```

- **Start Production Server**

  ```bash
  yarn start:prod
  ```

- **Run Tests**

  ```bash
  yarn test
  ```

- **Run Linter**

  ```bash
  yarn lint
  ```

### Frontend Scripts (from `/web` directory)

- **Start Development Server**

  ```bash
  yarn dev
  ```

- **Build for Production**

  ```bash
  yarn build
  ```

- **Start Production Server**

  ```bash
  yarn start
  ```

- **Run Tests**

  ```bash
  yarn test
  ```

- **Run Linter**

  ```bash
  yarn lint
  ```

---

## Environment Variables

### Backend (`/backend/.env`)

| Variable           | Description                           |
| ------------------ | ------------------------------------- |
| `DATABASE_HOST`    | Database host (e.g., `localhost`)     |
| `DATABASE_PORT`    | Database port (default `5432`)        |
| `DATABASE_USER`    | Database username                     |
| `DATABASE_PASSWORD`| Database password                     |
| `DATABASE_NAME`    | Database name (e.g., `tarik_db`)      |
| `JWT_SECRET`       | Secret key for JWT authentication     |

### Frontend (`/web/.env.local`)

| Variable              | Description                                  |
| --------------------- | -------------------------------------------- |
| `NEXT_PUBLIC_API_URL` | Base URL of the backend API (with `/api`)    |

**Note**: Do not commit `.env` files to version control. They should be added to `.gitignore`.

---

## Contributing

We welcome contributions from the community! To contribute to Tarik, please follow these steps:

1. **Fork the Repository**

   - Click the "Fork" button at the top-right corner of the repository page.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/yourusername/tarik.git
   ```

3. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**

   - Follow the project's coding conventions and best practices.
   - Ensure that your code builds and runs correctly.
   - Write unit tests for new functionality.

5. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "Add feature: your feature description"
   ```

6. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Submit a Pull Request**

   - Navigate to the original repository and click "New Pull Request".
   - Provide a clear description of your changes and any relevant information.

### Code Style and Guidelines

- **Linting and Formatting**

  - Run `yarn lint` before committing to catch any linting errors.
  - Code must be formatted according to Prettier configurations.

- **Commit Messages**

  - Use clear and descriptive commit messages.
  - Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification if possible.

- **Pull Request Reviews**

  - Be open to feedback and make necessary changes promptly.
  - Ensure that your branch is up-to-date with the main branch before requesting a review.

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Contact

For any inquiries or feedback, please contact:

- **Project Maintainer**: [Your Name](mailto:your.email@example.com)
- **GitHub**: [YourUsername](https://github.com/yourusername)

---

## Additional Resources

- **Figma Design**

  - The UI/UX design for Tarik is available on Figma: [Tarik Figma Design](https://www.figma.com/design/aTuORKkw8mZy7bc43s226Y/Legacy-of-Kings?node-id=0-1&t=VDjdaTT43VHX0MsR-1)

- **react-hot-toast**

  - Tarik uses `react-hot-toast` for toast notifications in the frontend.
  - Documentation: [react-hot-toast](https://github.com/timolins/react-hot-toast)

---

## Acknowledgments

- **Contributors**: Thank you to everyone who has contributed to the development of Tarik.
- **Community**: Special thanks to the community and institutions that provided resources and support for content acquisition.
- **Libraries and Frameworks**: Appreciation for the open-source tools that made this project possible.

---

*This README provides comprehensive information about setting up and contributing to the Tarik project. We encourage you to read through it carefully and reach out if you have any questions or need assistance.*
