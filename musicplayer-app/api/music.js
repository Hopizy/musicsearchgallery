export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.deezer.com/chart", {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Vercel-App" // helps with some APIs
      }
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
