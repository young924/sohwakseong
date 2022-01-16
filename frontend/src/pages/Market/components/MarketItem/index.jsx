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
    <S.Container>
      <S.StarContainer>
        <S.AddDivider>
          <S.EmoticonContainer>
            <S.Emoticon>{emoticon}</S.Emoticon>
          </S.EmoticonContainer>

          <S.StarInfoContainer>
            <S.StarName style={Margin}>{starName}</S.StarName>
            <S.StarAddedCount style={Margin}>담은 사람: {userCount}명</S.StarAddedCount>
          </S.StarInfoContainer>
        </S.AddDivider>

        <S.IconBox>
          <AddToCart onClick={onClickCart}/>
        </S.IconBox>
      </S.StarContainer>
    </S.Container>
  );
}

export default MarketItem;
