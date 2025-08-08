export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Filters Skeleton */}
        <div className="mb-8 flex items-center justify-between animate-pulse">
          <div className="flex gap-4">
            <div className="w-32 h-10 bg-gray-200 rounded"></div>
            <div className="w-32 h-10 bg-gray-200 rounded"></div>
          </div>
          <div className="w-24 h-10 bg-gray-200 rounded"></div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse"
            >
              <div className="aspect-w-1 aspect-h-1 bg-gray-200"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
                <div className="flex items-center justify-between">
                  <div className="h-6 w-20 bg-gray-200 rounded"></div>
                  <div className="h-10 w-24 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className="w-10 h-10 bg-gray-200 rounded animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
