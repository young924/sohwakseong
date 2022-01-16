import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import * as S from "./style";
import { useSetRecoilState } from "recoil";
import { loginState } from "../../hooks/useUserInfo";
import { ReactComponent as GoBack } from "../../assets/icon/go-back.svg";

function Signup() {
  const history = useHistory();
  const setIsLogin = useSetRecoilState(loginState);
  const [userInputs, setUserInputs] = useState({
    nickname: "",
    password: "",
    checkPassword: "",
  });

  const onChangeInputs = (e) => {
    e.preventDefault();
    setUserInputs({
      ...userInputs,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = (nickname, password, checkPassword) => {
    let isValid = false;
    if (!nickname) {
      alert("닉네임을 입력해주세요!");
    } else if (nickname.length > 10) {
      alert("닉네임은 10자 이하여야 합니다!");
    } else if (!password) {
      alert("패스워드를 입력해주세요!");
    } else if (!checkPassword) {
      alert("비밀번호를 다시 한 번 입력해주세요!");
    } else if (password !== checkPassword) {
      alert("두 패스워드가 서로 다릅니다!");
    } else if (!/^[a-zA-Z0-9]+$/.test(password)) {
      alert("비밀번호는 영문과 숫자만 포함해야 합니다!");
    } else if (password.length < 8) {
      alert("비밀번호는 8자 이상이어야 합니다!");
    } else {
      isValid = true;
    }
    return isValid;
  };

  const onClickSignupButton = async () => {
    const { nickname, password, checkPassword } = userInputs;
    if (validateForm(nickname, password, checkPassword)) {
      axios
        .post("/account-api/users/", {
          nickname: nickname,
          password: password,
        })
        .then((res) => {
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
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <PageLayout>
      <S.SignupContainer>
        <div className="signup-background"></div>
        <div className="signup-container">
          <div className="signup-header">
            <GoBack className="go-back-btn" onClick={() => history.goBack()} />
            <div className="signup-title">회원가입</div>
          </div>
          <div className="signup-inputs">
            <div className="label">닉네임</div>
            <input
              id="nickname"
              type="text"
              placeholder="닉네임을 입력해 주세요."
              value={userInputs.nickname}
              onChange={onChangeInputs}
            />
            <div className="label">비밀번호</div>
            <input
              id="password"
              type="password"
              placeholder="비밀번호 (숫자,영문 조합 최소 8자)"
              value={userInputs.password}
              onChange={onChangeInputs}
            />
            <input
              id="checkPassword"
              type="password"
              placeholder="비밀번호 확인"
              value={userInputs.checkPassword}
              onChange={onChangeInputs}
            />
          </div>
          <div className="btn-container">
            <div className="btn signup-btn" onClick={onClickSignupButton}>
              회원가입
            </div>
          </div>
        </div>
      </S.SignupContainer>
    </PageLayout>
  );
}

export default Signup;
