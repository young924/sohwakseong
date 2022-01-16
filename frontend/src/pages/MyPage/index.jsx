import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import planetImg from "../../assets/image/small-planet.png";
import * as S from "./style";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import BottomModal from "./components/BottomModal";
import LogoutModal from "./components/LogoutModal";
import DeleteModal from "./components/DeleteModal";

function MyPage() {
  const history = useHistory();
  const [isLogoutModalOn, setIsLogoutModalOn] = useState(false);
  const [isDeleteModalOn, setIsDeleteModalOn] = useState(false);

  return (
    <PageLayout>
      <Header
        type="mypage"
        content="나의 소확성"
        handleButton={() => setIsLogoutModalOn(true)}
      />
      <LogoutModal isOpen={isLogoutModalOn} setIsOpen={setIsLogoutModalOn} />
      <S.Container>
        <S.Planet src={planetImg} alt="" />
        <BottomModal handleButton={() => setIsDeleteModalOn(true)}/>
      </S.Container>
      <DeleteModal isOpen={isDeleteModalOn} setIsOpen={setIsDeleteModalOn} />
    </PageLayout>
  );
}

export default MyPage;
