import { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import TrackList from '../components/TrackList'
import { searchTracks } from '../lib/api'
import { usePlayerStore } from '../store/usePlayerStore'

export default function Home() {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const setQueue = usePlayerStore((s) => s.setQueue)
  const playAt = usePlayerStore((s) => s.playAt)

  const onSearch = async (q) => {
    setError('')
    setLoading(true)
    try {
      const res = await searchTracks(q)
      const filtered = res.filter((t) => !!t.preview)
      setTracks(filtered)
      if (!filtered.length) setError('No tracks found. Try another search.')
    } catch (e) {
      setError('Something went wrong fetching music. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // load tracks into queue
  useEffect(() => { setQueue(tracks) }, [tracks, setQueue])

  return (
    <div>
      <SearchBar onSearch={onSearch} loading={loading} />

      {error && (
        <div className="mt-4 bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-xl">
          {error}
        </div>
      )}
    
      <div className="mt-6">
        {loading ? (
          <div className="text-center text-gray-500 py-10">Fetching tracks…</div>
        ) : (
          <TrackList tracks={tracks} onSelect={(i) => playAt(i)} />
        )}
      </div>
       <p></p>

  
    </div>
    
  )
}
