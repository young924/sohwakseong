import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import Loading from "../../components/Loading";
import useToken from "../../hooks/useToken";
import PageLayout from "../../components/PageLayout";
import planetImg from "../../assets/image/small-planet.png";
import * as S from "./style";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import BottomModal from "./components/BottomModal";
import LogoutModal from "./components/LogoutModal";
import DeleteModal from "./components/DeleteModal";
import { starApi } from "../../api/star";

function MyPage() {
  const [isLogoutModalOn, setIsLogoutModalOn] = useState(false);
  const [isDeleteModalOn, setIsDeleteModalOn] = useState(false);
  const [deleteStarId, setDeleteStarID] = useState(null);
  const token = useToken();

  const {
    data: starList,
    isLoading,
    refetch,
  } = useQuery(["starList", token], () => starApi.getMyStarList(token), {
    enabled: !!token,
  });

  const { mutateAsync: deleteStar } = useMutation(
    (starId) => starApi.deleteStar(starId, token),
    {
      onSuccess: () => {
        refetch();
        setIsDeleteModalOn(false);
      },
    }
  );

  if (isLoading) {
    return <Loading />;
  }

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
        <BottomModal
          handleButton={() => setIsDeleteModalOn(true)}
          starList={starList}
          setDeleteStarID={setDeleteStarID}
        />
      </S.Container>
      <DeleteModal
        isOpen={isDeleteModalOn}
        setIsOpen={setIsDeleteModalOn}
        deleteStarId={deleteStarId}
        deleteStar={deleteStar}
        deleteStarId={deleteStarId}
      />
    </PageLayout>
  );
}

export default MyPage;
