import axios from "axios";

// axios ayarları
export const api = axios.create({
  baseURL: "http://localhost:4001",
});

// bütün konaklam alanlarını getiren fn
export const getPlaces = () =>
  api.get("/api/places").then((res) => res.data.places);
