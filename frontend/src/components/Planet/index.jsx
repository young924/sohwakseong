import React from "react";
import princeImg from "../../assets/image/prince.png";
import foxImg from "../../assets/image/fox.png";
import planetImg from "../../assets/image/planet.png";
import * as S from "./style";

function Planet({ isMobile }) {
  return (
    <S.Container>
      <S.Prince src={princeImg} />
      <S.Fox src={foxImg} />
      <S.Planet src={planetImg} />
      <S.Notice>
        {!isMobile && "더블"}클릭하여 소확성의 위치를 선택해주세요!
      </S.Notice>
    </S.Container>
  );
}

export default Planet;
