// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 text-center">
      <h1 className="text-6xl font-bold text-red-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-gray-400">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-semibold transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
