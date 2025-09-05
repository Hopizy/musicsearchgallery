import { Routes, Route, Link } from 'react-router-dom'
export default function header() {
      return (
    <header className="min-h-screen bg-gray-50 pb-28 bg-[url('/backimage.jpg')]">
      {/* Header with navigation */}
      <header className="fixed top-0 z-10 bg-red border-b">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-6">
        <Link to="/" className="text-xl sm:text-2xl font-bold">
            🎵 Music Player Gallery
          </Link>
              </div>
          </header>
          </header>
);
}