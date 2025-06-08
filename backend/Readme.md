# Bad Idea Incubator - "Fail Forward Fiesta"

Welcome to the Bad Idea Incubator, a platform where terrible, impractical, and hilariously bizarre business/startup ideas get their moment in the spotlight! Submit your worst creations, "invest" fake currency, and watch the chaos unfold.

This project serves as a comprehensive learning experience, focusing on building a full-stack application with modern technologies and best practices.

## Project Vision

The core idea is to create a fun, engaging platform that allows users to:

- Register and log in securely.
- Submit their "bad ideas" with descriptions and optional video pitches.
- Browse, search, and filter through a collection of hilariously awful ideas.
- Comment on ideas and interact with other users.
- "Invest" a virtual currency ("BadCoin" or "FailTokens") into ideas they find particularly amusing or terrible.
- Potentially upgrade to a premium "Idea Connoisseur" role via a (sandbox) payment to unlock special perks.
- See leaderboards for the "most funded" bad ideas or top "investors."

## Tech Stack (Planned)

**Backend:**

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Validation:** Zod
- **Authentication:** JWT (JSON Web Tokens)
- **File/Video Storage:** Cloudinary (or similar Video CDN like Mux / AWS S3 + CloudFront)
- **Payment Integration:** Stripe (Sandbox Mode)

**Frontend (Planned for later):**

- **Framework/Library:** React (with TypeScript)
- **State Management:** (To be decided - e.g., Zustand, Redux Toolkit, Context API)
- **Styling:** (To be decided - e.g., Tailwind CSS, Styled Components)

**DevOps & Tools:**

- **Containerization:** Docker, Docker Compose
- **Version Control:** Git, GitHub
- **Package Managers:** npm (or Yarn)
- **Environment Variables:** `dotenv`
- **Code Quality:** ESLint, Prettier

## Core Features Roadmap (High-Level)

This is a rough plan and may evolve. We'll tackle these features iteratively.

1.  **Phase 0: Backend Foundation & Setup (Current Phase)**

    - [x] Project initialization (Node.js, TypeScript)
    - [x] Basic Express server setup
    - [x] PostgreSQL database setup with Docker
    - [x] Prisma ORM integration
    - [x] Zod for initial validation considerations
    - [ ] `.env` configuration for secure settings

2.  **Phase 1: User Authentication & Authorization**

    - [ ] User model definition (Prisma)
    - [ ] User registration endpoint (with Zod validation)
    - [ ] User login endpoint
    - [ ] JWT generation and validation middleware
    - [ ] Password hashing (e.g., bcrypt)
    - [ ] Basic Role-Based Access Control (RBAC) structure (e.g., `USER`, `ADMIN`)

3.  **Phase 2: "Bad Idea" Management (CRUD)**

    - [ ] "Idea" model definition (Prisma) - linking to users
    - [ ] API endpoints for creating, reading, updating, and deleting ideas
    - [ ] Zod validation for idea submissions
    - [ ] Authorization checks (e.g., only owner can update/delete their idea)

4.  **Phase 3: Video Pitch Integration**

    - [ ] Integration with a Video CDN (e.g., Cloudinary)
    - [ ] API endpoint for uploading video pitches associated with ideas
    - [ ] Secure handling and serving of video URLs

5.  **Phase 4: Sandbox Payment Integration & Premium Role**

    - [ ] Integration with Stripe (Sandbox)
    - [ ] API endpoint for "upgrading" user role to "Idea Connoisseur"
    - [ ] Webhooks for handling payment success/failure
    - [ ] Modifying RBAC to grant perks to premium users

6.  **Phase 5: "Investment", Voting & Social Features**

    - [ ] "BadCoin" (virtual currency) system
    - [ ] API endpoints for "investing" BadCoin in ideas
    - [ ] Commenting system for ideas
    - [ ] Voting/reaction system for ideas
    - [ ] Leaderboards (e.g., most "funded" ideas)

7.  **Phase 6: Frontend Development (React)**

    - [ ] Setup React project with TypeScript
    - [ ] Components for user registration/login
    - [ ] Components for submitting and displaying ideas (including videos)
    - [ ] UI for investment, commenting, and voting
    - [ ] User profiles and dashboards
    - [ ] Admin panel (basic)

8.  **Phase 7: Advanced Features & Polish**

    - [ ] Search and filtering for ideas
    - [ ] Notifications (e.g., when someone comments on your idea)
    - [ ] Improved error handling and logging
    - [ ] More comprehensive admin functionalities
    - [ ] (Optional) Real-time updates for comments/investments (e.g., WebSockets)

9.  **Phase 8: Deployment**
    - [ ] Dockerizing the full application (backend + frontend)
    - [ ] Deploying to a cloud platform (e.g., Fly.io, Render, AWS, Heroku)

## Getting Started (Development - Backend Focus Initially)

1.  **Clone the repository (once it's on GitHub):**
    ```bash
    git clone <repository-url>
    cd bad-idea-incubator
    ```
2.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Set up environment variables:**
    - Create a `.env` file in the `backend` directory.
    - Copy the contents of `.env.example` (we should create this soon) into `.env`.
    - Fill in your specific values (e.g., database credentials, JWT secret).
    ```
    # backend/.env.example
    PORT=8080
    DATABASE_URL="postgresql://yourusername:yourstrongpassword@localhost:5433/bad_idea_db?schema=public"
    JWT_SECRET="yoursupersecretjwtkey"
    # Add other variables as needed (e.g., CLOUDINARY_URL, STRIPE_SECRET_KEY)
    ```
5.  **Start the PostgreSQL database using Docker:**
    (Ensure Docker and Docker Compose are installed and running)
    ```bash
    docker-compose up -d
    ```
6.  **Run Prisma migrations (to set up the database schema):**
    (We will do this after defining models in `schema.prisma`)
    ```bash
    npx prisma migrate dev --name init
    ```
7.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The backend API should now be running on `http://localhost:PORT` (as specified in your `.env`).

## Project Structure (Initial Backend)

bad-idea-incubator/
├── backend/
│ ├── prisma/
│ │ ├── schema.prisma # Prisma schema (database models)
│ │ └── migrations/ # Database migration files
│ ├── src/
│ │ ├── controllers/ # Request handlers (routes logic)
│ │ ├── services/ # Business logic
│ │ ├── middlewares/ # Express middlewares (auth, validation, error handling)
│ │ ├── routes/ # API route definitions
│ │ ├── utils/ # Utility functions (e.g., password hashing)
│ │ ├── types/ # Custom TypeScript type definitions/interfaces
│ │ └── index.ts # Main application entry point
│ ├── .env # Environment variables (DO NOT COMMIT)
│ ├── .env.example # Example environment variables (commit this)
│ ├── .gitignore
│ ├── docker-compose.yml # Docker configuration for services (e.g., PostgreSQL)
│ ├── package.json
│ ├── package-lock.json
│ └── tsconfig.json
└── README.md # This file

## Contribution

This is primarily a personal learning project. However, suggestions and discussions are welcome!

---

This README provides a good overview. We'll update the checkboxes `[ ]` to `[x]` as we complete tasks. We'll also add more detail to the "Project Structure" and "Getting Started" sections as the project grows.

**Action Item for You (Trainee):**

1.  Create this `README.md` file in the root of your `bad-idea-incubator` project.
2.  Create a `.env.example` file inside your `backend` directory with the placeholder content shown in the README. This is a best practice so others (or your future self) know what environment variables are needed. **Remember to add `.env` to your `.gitignore` if you haven't already to avoid committing your actual secrets.**
