export const GetGif = async (category) => {
  if (category !== "") {
    const urlGif = `https://api.giphy.com/v1/gifs/search?api_key=syIIPWyYNfsw59c4yWBlOcl97LnfpLCe&q=${encodeURI(
      category
    )}&limit=10`;
    const request = await fetch(urlGif);
    const { data } = await request.json();
    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        image: gif.images.downsized.url,
      };
    });
    return gifs;
  }
};
