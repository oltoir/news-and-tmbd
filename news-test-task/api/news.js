import axios from "axios";

const api_key = "5bfefeaf9f1f41cbf1bbd055f6d6f79b";
const api_url = "https://api.themoviedb.org/3/discover/movie/";
const api_url2 = "https://api.themoviedb.org/3/movie/";

// Получение новостей
export const getNews = (page_size, page) => {
  return axios.get(api_url + "?api_key=" + api_key + "&page=" + page + "&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page_size=" + page_size);
};

export const getNewsById = (id) => {
  return axios.get(api_url2 + id + "?api_key=" + api_key + "&language=ru-RU")
};