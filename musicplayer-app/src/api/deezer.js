export default async function handler(req, res) {
const { q } = req.query;
if (!q) return res.status(400).json({ error: 'Missing q' });
try {
const r = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(q)}`);
const data = await r.json();
res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
return res.status(200).json(data);
} catch (e) {
return res.status(500).json({ error: 'Upstream error', details: String(e) });
}
}