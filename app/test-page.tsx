"use client";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Test Page - Tailwind CSS Working
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Card 1</h2>
            <p className="text-gray-400">
              This is a test card with proper styling.
            </p>
          </div>
          <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Card 2</h2>
            <p className="text-gray-400">
              Another test card with proper styling.
            </p>
          </div>
          <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Card 3</h2>
            <p className="text-gray-400">
              Third test card with proper styling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
