import React, { useCallback, useEffect, useState } from "react";
import princeImg from "../../../../assets/image/prince.png";
import foxImg from "../../../../assets/image/fox.png";
import starImg from "../../../../assets/image/star.png";
import planetImg from "../../../../assets/image/planet.png";
import * as S from "./style";
import { useHistory } from "react-router-dom";

function Planet() {
  const [clickedIndex, setClickedIndex] = useState(0);
  const history = useHistory();
  const handleClick = useCallback(
    (index) => {
      console.log("클릭");
      if (index !== clickedIndex) {
        setClickedIndex(() => index);
        return;
      }
      switch (index) {
        case 1:
          history.push("/market");
          break;
        case 2:
          history.push("/mypage");
          break;
        case 3:
          history.push("/achievecheck");
          break;
        default:
          break;
      }
    },
    [clickedIndex]
  );

  return (
    <S.Container clickedIndex={clickedIndex}>
      <S.Star src={starImg} onClick={() => handleClick(1)} />
      <S.Prince src={princeImg} onClick={() => handleClick(2)} />
      <S.Fox src={foxImg} onClick={() => handleClick(3)} />
      <S.Planet src={planetImg} />
    </S.Container>
  );
}

export default Planet;
