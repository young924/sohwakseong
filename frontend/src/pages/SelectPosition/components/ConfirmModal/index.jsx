import React, { useCallback, useEffect, useState } from "react";
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
  position,
}) {
  const { item, target_number } = useParams();
  const history = useHistory();
  const [lastStar, setLastStar] = useState({ pitch: "", yaw: "" });
  const token = useToken();
  const { mutateAsync: createStar } = useMutation(
    async (yaw, pitch) =>
      await starApi.createMyStar(
        Number(item),
        Number(target_number),
        yaw,
        pitch,
        token
      ),
    {
      onSuccess: () =>
        history.push({
          pathname: "/",
          state: {
            pitch: lastStar.pitch,
            yaw: lastStar.yaw,
          },
        }),
    }
  );

  useEffect(() => {
    if (newStar) {
      setLastStar(() => newStar[newStar.length - 1]);
    }
  }, [newStar]);

  useEffect(() => {
    console.log(lastStar);
  }, [lastStar]);

  const handleNoButton = () => {
    newStar.pop();
    setIsOpen(false);
    setIsPannelLoading(true);
    setNewStar(() => [...newStar]);
  };

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
          <S.Button onClick={() => createStar(lastStar.yaw, 150)}>네</S.Button>
          <S.Button onClick={handleNoButton}>아니요</S.Button>
        </S.ButtonWrapper>
      </S.Container>
    </Modal>
  );
}

export default ConfirmModal;
