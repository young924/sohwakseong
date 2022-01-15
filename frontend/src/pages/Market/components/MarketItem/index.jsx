import React, { useMemo } from 'react';
import { ReactComponent as AddToCart } from '../../../../assets/icon/addToCart.svg';
import * as S from './style'

function MarketItem({ emoticon='⭐️', starName='별 이름', userCount=0 }) {
  const Margin = useMemo(() => ({
    margin: '0.5rem',
    marginRight: '10rem',
  }));

  return (
  <>
    <S.Container>
      <S.EmoticonContainer>
        <S.Emoticon>
          {emoticon}
        </S.Emoticon>
      </S.EmoticonContainer>
        <S.Div>
          <h3 style={Margin}>{starName}</h3>
          <p style={Margin}>담은 사람: {userCount}명</p>
        </S.Div>
        <AddToCart />
    </S.Container>
  </>
  );
}

export default MarketItem;
