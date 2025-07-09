// app/page.tsx
// version: 1

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Component Sandbox</h1>
        <p className="text-lg text-neutral-600 mb-8">
          This is the entry point for the consultant development environment.
        </p>
        <Link
          href="/settings/consult"
          className="inline-block bg-rose-500 text-white font-semibold rounded-md px-6 py-3 transition duration-200 ease-in-out hover:bg-gray-700"
        >
          Go to Consultant Projects
        </Link>
      </div>
    </main>
  );
}
