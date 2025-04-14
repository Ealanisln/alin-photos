# Alin Photos

A photo gallery project for Alin, built with React, Vite, TypeScript, and Tailwind CSS, using Cloudinary for image management.

## Setup

This project uses `pnpm` as the package manager.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Ealanisln/alin-photos.git
    cd alin-photos
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory and add any necessary environment variables (e.g., for Cloudinary). Refer to `.env.example` if one exists.
    *Note: `.env` files are ignored by Git.*

## Available Scripts

In the project directory, you can run:

### `pnpm dev`

Runs the app in development mode using Vite.
Open [http://localhost:5173](http://localhost:5173) (or the port specified by Vite) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `pnpm build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `pnpm lint`

Runs ESLint to check for code style and potential errors based on the configured rules.

### `pnpm preview`

Serves the production build locally to preview it before deployment.
