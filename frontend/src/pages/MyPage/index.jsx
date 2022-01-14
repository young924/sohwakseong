import React from "react";
import PageLayout from "../../components/PageLayout";
import planetImg from "../../assets/image/small-planet.png";
import * as S from "./style";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import BottomModal from "./components/BottomModal";

function MyPage() {
  const history = useHistory();
  return (
    <PageLayout>
      <Header
        type="mypage"
        content="당신의 소확성"
        handleButton={() => history.push("/")}
        handleButton2={() => history.push()}
      />
      <S.Container>
        <S.Planet src={planetImg} alt="" />
        <BottomModal></BottomModal>
      </S.Container>
    </PageLayout>
  );
}

export default MyPage;
