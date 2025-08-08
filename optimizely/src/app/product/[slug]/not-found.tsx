import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto h-24 w-24 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.2-5.5-3M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Product Not Found
        </h1>
        
        <p className="text-gray-600 mb-8">
          Sorry, we couldn&apos;t find the product you&apos;re looking for. It may have been moved, deleted, or you may have mistyped the URL.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/products"
            className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Browse All Products
          </Link>
          
          <Link
            href="/"
            className="block w-full bg-gray-200 text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
} 