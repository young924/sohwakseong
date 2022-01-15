import React, { useCallback } from "react";
import { useMutation } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import { starApi } from "../../../../api/star";
import Modal from "../../../../components/Modal";
import useToken from "../../../../hooks/useToken";
import * as S from "./style";

function ConfirmModal({
  isOpen,
  setIsOpen,
  setNewStar,
  newStar,
  setIsPannelLoading,
}) {
  const { item, target_number } = useParams();
  const history = useHistory();
  const { yaw, pitch } = newStar;
  const token = useToken();
  const { mutateAsync: createStar } = useMutation(
    () => starApi.createMyStar(item, target_number, yaw, pitch, token),
    {
      onSuccess: () => history.push("/"),
    }
  );

  const handleNoButton = useCallback(() => {
    const prevStarList = newStar.pop();
    setIsOpen(false);
    setIsPannelLoading(true);
    setNewStar(...prevStarList);
  }, [newStar]);
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      styleInWhiteBox={{ padding: "0", marginTop: "300px" }}
      backgroundClose={false}
    >
      <S.Container>
        <h2>이 곳에 별을 만드시겠습니까?</h2>
        <S.ButtonWrapper>
          <S.Button onClick={createStar}>네</S.Button>
          <S.Button onClick={handleNoButton}>아니요</S.Button>
        </S.ButtonWrapper>
      </S.Container>
    </Modal>
  );
}

export default ConfirmModal;
