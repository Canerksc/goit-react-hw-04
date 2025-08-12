const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY; 

export async function fetchImages(query, page = 1) {
  const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
  const url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=${API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Veri alınırken hata oluştu");

  return res.json(); // { results: [...], total_pages: number, ... }
}
