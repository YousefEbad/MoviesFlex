const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "f5a452626cda4ba2ce56b27606b67f70",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
