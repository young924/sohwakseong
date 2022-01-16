import axios from "axios";

export const starItemApi = {
  getStarItemList: async (token) => {
    const { data: starList } = await axios.get("/star-api/star-items/", {
      params: {
        filter: "all",
      },
      headers: {
        Authorization: token,
      },
    });
    return starList;
  },
  createStarItem: async (starName, emoticon, token) => {
    const { data } = await axios.post(
      "/star-api/star-items/",
      {
        title: starName,
        emoticon: emoticon,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return data;
  },
};
