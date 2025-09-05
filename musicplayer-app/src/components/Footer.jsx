export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-gray-400 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* App Name */}
        <h2 className="text-lg font-semibold text-white">🎵 Music Player Gallery</h2>

        {/* Links */}
        <nav className="flex gap-4 mt-3 md:mt-0">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/login" className="hover:text-white">Login</a>
          <a href="contact" className="hover:text-white">Contact</a>
        </nav>

        {/* Copyright */}
        <p className="text-sm mt-3 md:mt-0">
                  © {new Date().getFullYear()} Music Player Gallery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
