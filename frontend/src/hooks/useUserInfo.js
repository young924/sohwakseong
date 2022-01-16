import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import { atom } from "recoil";
import { userApi } from "../api/user";
import useToken from "./useToken";

export const loginState = atom({
  key: `login`,
  default: null,
});

export const useUserInfo = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const token = useToken();

  const { data } = useQuery(
    ["userInfo", token],
    () => userApi.getUserInfoByToken(token),
    { enabled: !!token }
  );

  useEffect(() => {
    if (data) {
      setIsLogin(() => true);
    }
  }, [data]);

  return isLogin;
};
