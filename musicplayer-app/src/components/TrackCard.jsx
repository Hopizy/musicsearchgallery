export default function TrackCard({ track, onPlay }) {
const artists = track?.artist?.name ?? ''
const album = track?.album?.title ?? ''
const cover = track?.album?.cover_medium || track?.album?.cover || ''

return (
<button onClick={onPlay} className="text-left bg-white rounded-2xl p-3 player-shadow hover:shadow-2xl transition w-full">
<div className="flex gap-3 items-center">
<img src={cover} alt={album} className="w-16 h-16 rounded-xl object-cover" />
<div className="min-w-0">
<p className="font-semibold truncate">{track.title}</p>
<p className="text-sm text-gray-600 truncate">{artists}</p>
<p className="text-xs text-gray-500 truncate">{album}</p>
</div>
</div>
</button>
)
}