import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Saving...");

    try {
      await addDoc(collection(db, "messages"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setStatus("✅ Message saved successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to save. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-gray-300">We’d love to hear from you!</p>
        </div>
      </header>

      <main className="flex-grow">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
    
    {/* Contact Form */}
    <form 
      onSubmit={handleSubmit} 
      className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 space-y-4"
    >
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Send a Message</h2>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your name"
        className="w-full p-2 sm:p-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        className="w-full p-2 sm:p-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Write your message..."
        rows="4"
        className="w-full p-2 sm:p-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-blue-500"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition"
      >
        Send
      </button>

      {status && (
        <p
          className={`text-center mt-2 font-medium ${
            status.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {status}
        </p>
      )}
    </form>

    {/* Contact Info */}
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-semibold">Our Contact Info</h2>
      <p className="text-gray-600 text-sm sm:text-base">
        Feel free to reach out to us directly through the following channels:
      </p>
      <div className="space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base">
        <p><strong>📍 Address:</strong> 123 Main Street, Port Harcourt, Nigeria</p>
        <p><strong>📞 Phone:</strong> +2348134062082</p>
        <p><strong>✉️ Email:</strong> contact@musicplayergallery.com</p>
      </div>
    </div>
  </div>
</main>


      
    </div>
  );
}
