import axios from "axios";

export const userApi = {
  getNicknameByUserId: async (userId, token) => {
    const {
      data: [{ nickname }],
    } = await axios.get("/account-api/users", {
      params: {
        user_id: userId,
      },
      headers: {
        Authorization: token,
      },
    });
    return nickname;
  },
  getUserInfoByToken: async (token) => {
    const { data: userInfo } = await axios.get("/account-api/users/me", {
      headers: {
        Authorization: token,
      },
    });
    return userInfo;
  },
};
