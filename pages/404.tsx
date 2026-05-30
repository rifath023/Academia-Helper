import Head from 'next/head';
import { useRouter } from 'next/router';

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <Head><title>404 - Page Not Found | Academia Helper</title></Head>
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-stone-900 mb-4">404</h1>
          <p className="text-xl text-stone-600 mb-8">Page not found</p>
          <button onClick={() => router.push('/')} className="px-6 py-3 bg-stone-900 text-white rounded-2xl font-semibold hover:bg-stone-800 transition-colors duration-200">
            Go Home
          </button>
        </div>
      </div>
    </>
  );
}
