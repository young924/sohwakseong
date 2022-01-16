import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import * as S from "./style";
import { useSetRecoilState } from "recoil";
import { loginState } from "../../hooks/useUserInfo";
import loginStarsPNG from "../../assets/image/login-stars.png";

function Login() {
  const history = useHistory();
  const setIsLogin = useSetRecoilState(loginState);
  const [userInputs, setUserInputs] = useState({
    nickname: "",
    password: "",
  });

  const onChangeInputs = (e) => {
    e.preventDefault();
    setUserInputs({
      ...userInputs,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = (nickname, password) => {
    let isValid = false;
    if (!nickname) {
      alert("닉네임을 입력해주세요!");
    } else if (!password) {
      alert("패스워드를 입력해주세요!");
    } else {
      isValid = true;
    }
    return isValid;
  };

  const onClickLoginButton = async () => {
    const { nickname, password } = userInputs;
    if (validateForm(nickname, password)) {
      axios
        .post("/account-api/token/obtain/", {
          nickname: nickname,
          password: password,
        })
        .then((res) => {
          const { token } = res.data;
          localStorage.setItem("token", token);
          setIsLogin(true);
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onClickSignupButton = () => {
    history.push("/signup");
  };

  return (
    <PageLayout>
      <S.LoginContainer>
        <img className="star-img" src={loginStarsPNG} alt="stars" />
        <h1 className="login-title">갓생살기</h1>
        <div className="login-inputs-background">
          <div className="login-inputs">
            <div className="label">닉네임</div>
            <input
              id="nickname"
              type="text"
              className="login-input"
              placeholder="닉네임을 입력해 주세요."
              value={userInputs.nickname}
              onChange={onChangeInputs}
            />
            <div className="label">비밀번호</div>
            <input
              id="password"
              type="password"
              className="login-input"
              placeholder="비밀번호를 입력해 주세요."
              value={userInputs.password}
              onChange={onChangeInputs}
            />
          </div>
          <div class="btn-container">
            <div
              className="btn login-btn"
              onClick={onClickLoginButton}>
              로그인
            </div>
            <div className="btn signup-btn" onClick={onClickSignupButton}>
              회원가입
            </div>
          </div>
        </div>
      </S.LoginContainer>
    </PageLayout>
  );
}

export default Login;
