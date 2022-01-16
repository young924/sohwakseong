import React from "react";
import { useHistory } from "react-router-dom";
import * as S from "./style";
import welcomePNG from "../../assets/image/welcome.png"

function Welcome() {
    const history = useHistory();

    return (
        <S.Container>
            <img src={welcomePNG} alt="background"></img>
            <div class="btn-container">
                <div
                    className="btn login-btn"
                    onClick={() => history.push("/login")}>
                    로그인
                </div>
                <div className="btn signup-btn" onClick={() => history.push("/signup")}>
                    회원가입
                </div>
            </div>
        </S.Container>
    );
}

export default Welcome;
