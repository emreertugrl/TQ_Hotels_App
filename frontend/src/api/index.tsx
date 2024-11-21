import axios from "axios";
import { Params } from "react-router-dom";
import { PlaceData } from "../types";

// axios ayarları
export const api = axios.create({
  baseURL: "http://localhost:4001",
});

// bütün konaklam alanlarını getiren fn
export const getPlaces = (params?: Params) =>
  api.get("/api/places", { params }).then((res) => res.data.places);

// yeni konaklama alanı oluştur
export const createPlace = (body: PlaceData) => api.post("/api/places", body);
