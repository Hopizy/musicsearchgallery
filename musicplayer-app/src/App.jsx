import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/About'
import MusicPlayer from './components/MusicPlayer'
import Login from './pages/Login'
import Footer from './components/Footer'
import Contact from './pages/Contact'

export default function App() {

  return (
    <div className="min-h-screen bg-gray-50 pb-28 bg-[url('/backimage.jpg')]">
      {/* Header with navigation */}
      <header className="z-10 bg-red border-b">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-6">
          <nav className="flex gap-4 text-sm text-gray-600">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold">🎵MusicPlayerGallery</h2>
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <Link to="/about" className="hover:text-indigo-600">About</Link>
            <Link to="/login" clasName="hover:text-indigo-600">Login</Link>
            <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
          </nav>
        </div>
      </header>
    
 {/* Main routes */}
      <main className="max-w-5xl mx-auto px-16 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      
      {/* Persistent music player at the bottom */}
      <MusicPlayer/>
   <Footer />
    </div>
  )
}
