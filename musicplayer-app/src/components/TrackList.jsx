import TrackCard from './TrackCard'
export default function TrackList({ tracks, onSelect }) {
if (!tracks?.length) return (
<div className="text-center text-gray-500 py-10">No tracks to show yet. Try a search!</div>
)
return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{tracks.map((t, i) => (
<TrackCard key={t.id} track={t} onPlay={() => onSelect(i)} />
))}
</div>
)
}