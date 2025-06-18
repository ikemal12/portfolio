import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center text-gray-400">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p>Page not found.</p>
        <Link href="/" className="mt-4 inline-block text-blue-400 hover:text-white hover:underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
