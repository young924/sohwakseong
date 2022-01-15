import axios from "axios";

export const starApi = {
  getStarListByUserId: async (userId) => {
    const { data: starList } = await axios.get("/star-api/stars", {
      params: {
        filter: "user_id",
        date: userId,
      },
    });
    return starList;
  },
};
