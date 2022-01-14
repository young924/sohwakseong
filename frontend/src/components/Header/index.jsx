import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as SearchSVG } from "../../assets/icon/search.svg";
import * as S from "./style";

function Header({ type = "home", content = "", handleButton }) {
  const history = useHistory();
  switch (type) {
    case "home":
      return (
        <>
          <S.SearchBox onClick={handleButton}>
            <SearchSVG />
          </S.SearchBox>
        </>
      );
    case "":
      return (
        <>
          <S.HeaderBoard>
            <S.IconsWrapper>
              <S.IconBox />
              {content}
              <S.IconBox onClick={() => history.push()}>
                <SearchSVG />
              </S.IconBox>
            </S.IconsWrapper>
          </S.HeaderBoard>
          <S.HeaderWhiteSpace />
        </>
      );

    default:
      return <></>;
  }
}
export default Header;
