import axios from 'axios'

const baseURL = '/api'   // local dev uses Vite proxy

export const searchTracks = async (q) => {
  if (!q?.trim()) return []
  const { data } = await axios.get(`${baseURL}/search?q=${encodeURIComponent(q)}`)
  return data.data || []
}
