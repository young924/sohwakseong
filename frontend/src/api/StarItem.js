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
};