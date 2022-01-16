import axios from "axios";

export const starApi = {
  getStarListByUserId: async (userId) => {
    const { data: starList } = await axios.get(
      `/star-api/users/${userId}/stars/`
    );
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
  createMyStar: async (item, target_number, yaw, pitch, token) => {
    const { data } = await axios.post(
      "/star-api/stars/",
      {
        item: item,
        target_number: target_number,
        yaw: yaw,
        pitch: pitch,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return data;
  },
  deleteStar: async (starId, token) => {
    const { data } = await axios.delete(`/star-api/stars/${starId}`, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  },
};
