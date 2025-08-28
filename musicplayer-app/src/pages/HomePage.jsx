// src/pages/HomePage.jsx
import { Play } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col bg-[url('/backimage.jpg')]">
      {/* Navbar */}
      <header className="flex items-center justify-between px-4 md:px-6 py-4 bg-gray-800 bg-[url('/backimage1.jpg')]">
        <h1 className="text-xl md:text-2xl font-bold">🎵 Music Search Gallery</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-purple-400">Home</a>
          <a href="/library" className="hover:text-purple-400">Library</a>
          <a href="/search" className="hover:text-purple-400">Search</a>
          <a href="/profile" className="hover:text-purple-400">Profile</a>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded bg-gray-700">☰</button>
      </header>

      {/* Hero Section */}
      <section className="px-4 md:px-6 py-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center md:text-center bg-[url('/backimage1.jpg')]">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Welcome here </h2>
        <p className="text-base md:text-lg mb-6">Enjoy your favorite music anytime, anywhere.</p>
        
      </section>

      {/* Music Categories */}
      <main className="flex-1 px-4 md:px-6 py-8 space-y-10">
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">🔥 Trending Now</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
  {Array(4).fill(0).map((_, i) => (
    <div key={i} className="bg-gray-800 rounded-lg p-3 md:p-4 hover:bg-gray-700">
      
      {/* Album Cover */}
      <img
  src={`/wizkid.jpg`}   // example: cover1.jpg, cover2.jpg...
  alt={`Song ${i+1} cover`}
  className="h-24 md:h-32 w-full object-cover rounded-lg mb-2 md:mb-3"
/>
  

      {/* Song Info */}
      <p className="text-sm md:text-base font-semibold">Song {i+1}</p>
      <p className="text-xs md:text-sm text-gray-400">Artist {i+1}</p>
    </div>
  ))}
</div>
        </section>

        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">🎧 Recommended for You</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-3 md:p-4 hover:bg-gray-700">
                <div className="h-24 md:h-32 bg-gray-600 rounded-lg mb-2 md:mb-3"></div>
                <p className="text-sm md:text-base font-semibold">Album {i+1}</p>
                <p className="text-xs md:text-sm text-gray-400">Artist {i+1}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Music Player Footer */}
      <footer className="bg-gray-800 px-4 md:px-6 py-3 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
        <div className="text-center md:text-left">
          <p className="font-semibold text-sm md:text-base">Now Playing:</p>
          <p className="text-xs md:text-sm text-gray-400">Song Title - Artist</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">⏮</button>
          <button className="p-2 rounded-full bg-purple-500 hover:bg-purple-400">▶</button>
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">⏭</button>
        </div>
      </footer>
    </div>
  );
}
