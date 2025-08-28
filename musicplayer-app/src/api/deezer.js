// src/api/deezer.js
import axios from "axios";

const deezerApi = axios.create({
  baseURL: "https://api.deezer.com",
});

export async function searchTracks(query) {
  try {
    const res = await deezerApi.get(`/search?q=${query}`);
    return res.data.data; // array of tracks
  } catch (error) {
    console.error("Error fetching tracks:", error);
    return [];
  }
}
