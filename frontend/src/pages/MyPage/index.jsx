import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import planetImg from "../../assets/image/small-planet.png";
import * as S from "./style";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import BottomModal from "./components/BottomModal";
import LogoutModal from "./components/LogoutModal";

function MyPage() {
  const history = useHistory();
  const [isLogoutModalOn, setIsLogoutModalOn] = useState(false);

  return (
    <PageLayout>
      <Header
        type="mypage"
        content="나의 소확성"
        handleButton={() => history.push("/")}
        handleButton2={() => setIsLogoutModalOn(true)}
      />
      <LogoutModal isOpen={isLogoutModalOn} setIsOpen={setIsLogoutModalOn} />
      <S.Container>
        <S.Planet src={planetImg} alt="" />
        <BottomModal></BottomModal>
      </S.Container>
    </PageLayout>
  );
}

export default MyPage;
