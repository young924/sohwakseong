import React, { useMemo } from "react";

import { useInput } from "../../../../hooks/useInput";
import Modal from "../../../../components/Modal";
import * as S from "./style";

function CartStarModal({isOpen, setIsOpen, emoticon="⭐️", starName="별 이름"}) {
  const modalColor = useMemo(() => ({
    backgroundColor: "#E6E7E8"
  }))
  const [targetNumber, handleTargetNumber] = useInput(1);

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      styleInWhiteBox={modalColor}
    >
      <S.Container>
        <h2>별 담기</h2>
        <S.ImoticonContainer>
          <S.ImoticonHolder>
          {emoticon}
          </S.ImoticonHolder>
          <p>{starName}</p>
        </S.ImoticonContainer>

        <S.InputWrapper>
        <p>목표 횟수</p>
        <S.Input
          type={"number"}
          min={"1"}
          max={"999"}
          value={targetNumber}
          onChange={handleTargetNumber}
          />
        </S.InputWrapper>
      </S.Container>

    </Modal>
  )
}

export default CartStarModal;
