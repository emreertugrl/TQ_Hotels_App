import axios from "axios";
import { Params } from "react-router-dom";

// axios ayarları
export const api = axios.create({
  baseURL: "http://localhost:4001",
});

// bütün konaklam alanlarını getiren fn
export const getPlaces = (params?: Params) =>
  api.get("/api/places", { params }).then((res) => res.data.places);
