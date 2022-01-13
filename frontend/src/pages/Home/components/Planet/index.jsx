import React, { useState } from "react";
import princeImg from "../../../../assets/image/prince.png";
import foxImg from "../../../../assets/image/fox.png";
import starImg from "../../../../assets/image/star.png";
import planetImg from "../../../../assets/image/planet.png";
import * as S from "./style";

function Planet() {
  const [clickedIndex, setClickedIndex] = useState(0);
  return (
    <S.Container clickedIndex={clickedIndex}>
      <S.Star src={starImg} onClick={() => setClickedIndex(1)} />
      <S.Prince src={princeImg} onClick={() => setClickedIndex(2)} />
      <S.Fox src={foxImg} onClick={() => setClickedIndex(3)} />
      <S.Planet src={planetImg} />
    </S.Container>
  );
}

export default Planet;
