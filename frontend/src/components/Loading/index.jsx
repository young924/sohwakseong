import React from "react";
import PageLayout from "../PageLayout";
import loadingImg from "../../assets/image/loading.png";
import * as S from "./style";

function Loading() {
  return (
    <PageLayout>
      <S.Container>
        <img src={loadingImg} />
        로딩 중
      </S.Container>
    </PageLayout>
  );
}

export default Loading;
