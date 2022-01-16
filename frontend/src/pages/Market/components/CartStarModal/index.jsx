import React, { useMemo } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

import { useInput } from "../../../../hooks/useInput";
import Modal from "../../../../components/Modal";
import * as S from "./style";
import { ReactComponent as RightArrow } from "../../../../assets/icon/rightArrow.svg"

function CartStarModal({isOpen, setIsOpen, itemId=0, emoticon="⭐️", itemName="별 이름"}) {
  const modalColor = useMemo(() => ({
    backgroundColor: "#E6E7E8"
  }))
  const [targetNumber, handleTargetNumber] = useInput(1);

  const history = useHistory();
  const pushToSelect = () => {
    console.log('??')
    history.push({
                pathname: `/select/${itemId}/${targetNumber}`,
              });
  }

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
          <p>{itemName}</p>
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
        <RightArrow onClick={pushToSelect} />
      </S.Container>

    </Modal>
  )
}

export default CartStarModal;
