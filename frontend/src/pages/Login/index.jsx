import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [userInputs, setUserInputs] = useState({
    nickname: '',
    password: '',
  });

  const onChangeInputs = (e) => {
    e.preventDefault();
    setUserInputs({
      ...userInputs,
      [e.target.id]: e.target.value
    });
  }

  const validateForm = (nickname, password) => {
    let isValid = false;
    if (!nickname) {
      alert('닉네임을 입력해주세요!');
    } else if (!password) {
      alert('패스워드를 입력해주세요!');
    } else {
      isValid = true;
    }
    return isValid;
  }

  const onClickLoginButton = async () => {
    const { nickname, password } = userInputs;
    if (validateForm(nickname, password)) {
      axios.post('/account-api/token/obtain/', {
        nickname: nickname,
        password: password
      })
        .then((res) => {
          const { token } = res.data;
          localStorage.setItem("token", token);
          history.push("/");
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }

  const onClickSignupButton = () => {
    history.push("/signup");
  }

  return (
    <div className="signup-container">
      <div>회원가입</div>
      <input
        id="nickname"
        type="text"
        placeholder="닉네임을 입력해 주세요."
        value={userInputs.nickname}
        onChange={onChangeInputs}
      />
      <input
        id="password"
        type="password"
        placeholder="비밀번호를 입력해 주세요."
        value={userInputs.password}
        onChange={onChangeInputs}
      />

      <div
        className="signup-btn"
        onClick={onClickLoginButton}
      >
        로그인
      </div>
      <div
        className="signup-btn"
        onClick={onClickSignupButton}
      >
        회원가입
      </div>
    </div>);
}

export default Login;
