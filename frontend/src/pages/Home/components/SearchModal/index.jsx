import React, { useCallback } from "react";
import { useInput } from "../../../../hooks/useInput";
import Modal from "../../../../components/Modal";
import * as S from "./style";

function SearchModal({ isOpen, setIsOpen }) {
  const [nickname, handleNickname] = useInput();
  const handleConfirm = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <S.Container>
        <h2>친구의 소확성 구경가기</h2>
        <S.Input
          type="text"
          placeholder="친구의 닉네임을 입력하세요"
          onChange={handleNickname}
          value={nickname}
        />
        <S.ConfirmButton onClick={handleConfirm}>확인</S.ConfirmButton>
      </S.Container>
    </Modal>
  );
}

export default SearchModal;
