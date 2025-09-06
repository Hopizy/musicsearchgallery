// /api/music.js
export default async function handler(req, res) {
  const { q } = req.query; // search query from frontend

  try {
    const url = q
      ? `https://api.deezer.com/search?q=${encodeURIComponent(q)}`
      : `https://api.deezer.com/chart`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Vercel-App", // helps avoid blocks
      },
    });

    if (!response.ok) {
      throw new Error(`External API error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("API Route Error:", error.message);
    res.status(500).json({ error: "Failed to fetch music data" });
  }
}
