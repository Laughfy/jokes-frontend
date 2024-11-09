# Jokes Frontend

This frontend application provides an interactive user interface for viewing, submitting, and moderating jokes.

## Features

- Submit a new joke and select its type.
- Retrieve and view random jokes.
- View available joke categories.

## Technologies

- **Next.js**: React framework with server-side rendering for fast and SEO-friendly applications.
- **TypeScript**: Type-safe language to improve code quality and maintainability.

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Laughfy/jokes-frontend.git
   cd jokes-frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env.local` file with the following (modify with actual backend URLs):
     ```plaintext
     NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
     ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

## Docker Instructions

1. **Build Docker image**:

   ```bash
   docker build -t jokes-frontend .
   ```

2. **Run Docker container**:
   ```bash
   docker run -p 3000:3000 --env-file .env.local jokes-frontend
   ```

## License

Licensed under the MIT License.
