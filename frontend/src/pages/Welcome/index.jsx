import React from "react";
import { useHistory } from "react-router-dom";
import welcomeImg from "../../assets/image/welcome.png";
import * as S from "./style";

function Welcome() {
  const history = useHistory();
  return (
    <S.Container>
      <img src={welcomeImg} alt="" />
      <S.ButtonWrapper>
        <S.Button onClick={() => history.push("/login")}>로그인</S.Button>
        <S.Button onClick={() => history.push("/signup")}>회원가입</S.Button>
      </S.ButtonWrapper>
    </S.Container>
  );
}

export default Welcome;
