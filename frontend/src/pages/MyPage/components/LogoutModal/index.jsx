import React from "react";
import Modal from "../../../../components/Modal";
import * as S from "./style";

function LogoutModal({ isOpen, setIsOpen }) {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      styleInWhiteBox={{ padding: "0" }}
    >
      <S.Container>
        <h2>로그아웃 하시겠습니까?</h2>
        <S.ButtonWrapper>
          <S.Button onClick={() => {}}>네</S.Button>
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
