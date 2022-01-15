import axios from "axios";

export const starApi = {
  getStarListByUserId: async (userId, token) => {
    const { data: starList } = await axios.get("/star-api/stars", {
      params: {
        filter: "user_id",
        user_id: userId,
      },
      headers: {
        Authorization: token,
      },
    });
    return starList;
  },
  getMyStarList: async (token) => {
    const { data: starList } = await axios.get("/star-api/stars", {
      params: {
        filter: "me",
      },
      headers: {
        Authorization: token,
      },
    });
    return starList;
  },
};
