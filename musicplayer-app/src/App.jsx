import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

// Later you can add these
// import LibraryPage from "./pages/LibraryPage";
// import SearchPage from "./pages/SearchPage";
// import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900 text-white justiy-center">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/library" element={<LibraryPage />} /> */}
          {/* <Route path="/search" element={<SearchPage />} /> */}
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
