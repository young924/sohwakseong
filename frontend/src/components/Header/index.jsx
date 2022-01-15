import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as SearchSVG } from "../../assets/icon/search.svg";
import { ReactComponent as HomeSVG } from "../../assets/icon/home.svg";
import { ReactComponent as LogoutSVG } from "../../assets/icon/logout.svg";
import { ReactComponent as PlusSVG } from "../../assets/icon/plus.svg";
import * as S from "./style";

function Header({ type = "home", content = "", handleButton, handleButton2 }) {
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
    case "friendPlanet":
    case "friendSearch":
      return (
        <div className="header">
          <S.HomeBox onClick={() => history.push("/")}>
            <HomeSVG />
          </S.HomeBox>
          <S.FixedTitle>{content}</S.FixedTitle>
          <S.HeaderWhiteSpace />
        </div>
      );
    case "mypage":
      return (
        <>
          <S.HeaderBoard>
            <S.IconsWrapper>
              <S.IconBox onClick={() => history.push("/")}>
                <HomeSVG />
              </S.IconBox>
              <h1>{content}</h1>
              <S.IconBox onClick={handleButton}>
                <LogoutSVG />
              </S.IconBox>
            </S.IconsWrapper>
          </S.HeaderBoard>
          <S.HeaderWhiteSpace />
        </>
      );
    case "achieveCheck":
      return (
        <>
          <S.HeaderBoard>
            <S.IconsWrapper>
              <S.IconBox onClick={() => history.push("/")}>
                <HomeSVG />
              </S.IconBox>
              <h1>{content}</h1>
              <S.IconBox />
            </S.IconsWrapper>
          </S.HeaderBoard>
          <S.HeaderWhiteSpace />
        </>
      );
    case "market":
      return (
        <>
          <S.HeaderBoard>
            <S.IconsWrapper>
              <S.IconBox onClick={() => history.push("/")}>
                <HomeSVG />
              </S.IconBox>
              <h1>{content}</h1>
              <S.IconBox onClick={handleButton}>
                <PlusSVG />
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
