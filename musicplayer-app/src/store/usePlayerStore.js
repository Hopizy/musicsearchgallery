import { create } from 'zustand'
export const usePlayerStore = create((set, get) => ({
queue: [],
currentIndex: -1,
playing: false,
volume: 0.9,
setQueue: (tracks) => set({ queue: tracks, currentIndex: tracks.length ? 0 : -1 }),
playAt: (index) => set({ currentIndex: index, playing: true }),
togglePlay: () => set({ playing: !get().playing }),
next: () => set((s) => ({ currentIndex: s.queue.length ? (s.currentIndex + 1) % s.queue.length : -1, playing: true })),
prev: () => set((s) => ({ currentIndex: s.queue.length ? (s.currentIndex - 1 + s.queue.length) % s.queue.length : -1, playing: true })),
setVolume: (v) => set({ volume: v }),
}))