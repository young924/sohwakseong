import React from "react";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import Modal from "../../../../components/Modal";
import { loginState } from "../../../../hooks/useUserInfo";
import * as S from "./style";

function LogoutModal({ isOpen, setIsOpen }) {
  const setIsLogin = useSetRecoilState(loginState);
  const history = useHistory();
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      styleInWhiteBox={{ padding: "0" }}
    >
      <S.Container>
        <h2>로그아웃 하시겠습니까?</h2>
        <S.ButtonWrapper>
          <S.Button
            onClick={() => {
              setIsLogin(false);
              localStorage.removeItem("token");
              history.push("/");
            }}
          >
            네
          </S.Button>
          <S.Button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            아니요
          </S.Button>
        </S.ButtonWrapper>
      </S.Container>
    </Modal>
  );
}

export default LogoutModal;
