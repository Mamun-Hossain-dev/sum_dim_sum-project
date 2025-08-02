'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = '404: Page Not Found';
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center">
      <div className="rounded-lg bg-white p-8 shadow-md">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link href="/">
          <button className="mt-6 rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
