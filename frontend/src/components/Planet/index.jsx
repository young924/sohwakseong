import React from "react";
import princeImg from "../../assets/image/prince.png";
import foxImg from "../../assets/image/fox.png";
import starImg from "../../assets/image/star.png";
import planetImg from "../../assets/image/planet.png";
import * as S from "./style";

function Planet() {
  return (
    <S.Container>
      <S.Star src={starImg} />
      <S.Prince src={princeImg} />
      <S.Fox src={foxImg} />
      <S.Planet src={planetImg} />
    </S.Container>
  );
}

export default Planet;
