import axios from "axios";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const imageResults = response.data.collection.items;
        const parsedImages = imageResults.filter(
          (imageResult) => imageResult.data[0].media_type === "image"
        );
        return parsedImages.map((parsedImage) => parsedImage.links[0].href);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default getImages;
