import axios from "axios";

const baseURL = "/api"; // works on both localhost + Vercel

export const searchTracks = async (q) => {
  if (!q?.trim()) return [];
  const { data } = await axios.get(
    `${baseURL}/music?q=${encodeURIComponent(q)}`
  );
  return data.data || [];
};
