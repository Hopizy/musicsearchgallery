import { useState } from 'react'


export default function SearchBar({ onSearch, loading }) {
const [q, setQ] = useState('')


const submit = (e) => {
e.preventDefault()
onSearch(q)
}


return (
<form onSubmit={submit} className="flex gap-2 w-full">
<input
value={q}
onChange={(e) => setQ(e.target.value)}
placeholder="Search songs, artists, albums..."
className="flex-1 rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
/>
<button
type="submit"
disabled={loading}
className="rounded-xl bg-indigo-600 text-black px-4 py-2 disabled:opacity-60"
>{loading ? 'Searching…' : 'Search'}</button>
    </form>

)
}