export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Elite Portfolio System
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Next.js 15 + TypeScript + Tailwind CSS
        </p>
        <div className="space-y-2 text-sm text-gray-500">
          <p>✅ Project Structure Created</p>
          <p>✅ Dependencies Installed</p>
          <p>✅ Deployment Working</p>
        </div>
        <div className="mt-8">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            Phase 1 Day 1: Complete
          </span>
        </div>
      </div>
    </div>
  );
}
