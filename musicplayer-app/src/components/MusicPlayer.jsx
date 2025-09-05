import { useEffect, useRef, useState } from 'react'
import { usePlayerStore } from '../store/usePlayerStore'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const progressRef = useRef(null)
  const { queue, currentIndex, playing, next, prev, togglePlay, volume, setVolume } = usePlayerStore()
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(30)

  const current = currentIndex >= 0 ? queue[currentIndex] : null

  // sync play/pause + volume
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = volume
    if (playing) audio.play().catch(() => {}) 
    else audio.pause()
  }, [playing, volume, currentIndex])

  // reset time when track changes
  useEffect(() => { setCurrentTime(0) }, [currentIndex])

  const onTimeUpdate = () => {
    setCurrentTime(audioRef.current?.currentTime || 0)
  }

  const onLoaded = () => {
    setDuration(audioRef.current?.duration || 30)
  }

  const onEnded = () => { next() }

  const onSeek = (e) => {
    const val = Number(e.target.value)
    if (audioRef.current) audioRef.current.currentTime = val
    setCurrentTime(val)
  }

  if (!current) return null

  const cover = current?.album?.cover_medium || ''

  return (
    <div className="fixed bottom-16 left-1 right-0 bg-black/95 backdrop-blur border-t p-3 sm:p-4">
      <div className="max-w-5xl mx-auto flex items-center gap-3 sm:gap-4">
        <img src={cover} alt="cover" className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover" />
        <div className="min-w-0 flex-1">
          <p className="font-semibold truncate">{current.title}</p>
          <p className="text-xs text-gray-600 truncate">{current.artist?.name}</p>
          <input
            ref={progressRef}
            type="range"
            min={0}
            max={duration}
            step={0.1}
            value={currentTime}
            onChange={onSeek}
            className="w-full"
          />
          <div className="text-[10px] text-gray-500 flex justify-between">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={prev} className="px-3 py-2 rounded-full bg-gray-100">⏮</button>
          <button onClick={togglePlay} className="px-4 py-2 rounded-full bg-indigo-600 text-black">
            {playing ? 'Pause' : 'Play'}
          </button>
          <button onClick={next} className="px-3 py-2 rounded-full bg-red-100">⏭</button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>
        <audio
          ref={audioRef}
          src={current.preview}
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onLoaded}
          onEnded={onEnded}
          preload="metadata"
        />
      </div>
    </div>
  )
}

function formatTime(sec) {
  const s = Math.floor(sec || 0)
  const m = Math.floor(s / 60)
  const r = s % 60
  return `${m}:${String(r).padStart(2, '0')}`
}
