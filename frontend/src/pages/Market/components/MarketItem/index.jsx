import React, { useMemo } from "react";
import { ReactComponent as AddToCart } from "../../../../assets/icon/addToCart.svg";
import * as S from "./style";

function MarketItem({
  emoticon = "⭐️",
  itemId = 0,
  starName = "별 이름",
  userCount = 0,
  setIsCartStarModalOn,
  setItemIdForModal,
  setItemNameForModal,
  setEmoticonForModal,
}) {
  const Margin = useMemo(() => ({
    margin: "0.5rem",
    marginRight: "10rem",
  }));

  const onClickCart = () => {
    setItemIdForModal(() => itemId);
    setEmoticonForModal(() => emoticon);
    setItemNameForModal(() => starName);
    setIsCartStarModalOn(true);
  };

  return (
    <>
      <S.Container>
        <S.EmoticonContainer>
          <S.Emoticon>{emoticon}</S.Emoticon>
        </S.EmoticonContainer>
        <S.Div>
          <h3 style={Margin}>{starName}</h3>
          <p style={Margin}>담은 사람: {userCount}명</p>
        </S.Div>
        <AddToCart onClick={onClickCart} />
      </S.Container>
    </>
  );
}

export default MarketItem;
