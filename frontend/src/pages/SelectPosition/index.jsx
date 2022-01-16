import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import { userApi } from "../../api/user";
import { starApi } from "../../api/star";
import { useQuery } from "react-query";
import * as S from "./style";
import useToken from "../../hooks/useToken";
import { Pannellum } from "pannellum-react";
import spaceImg from "../../assets/image/space5.png";
import Loading from "../../components/Loading";
import Planet from "../../components/Planet";
import ConfirmModal from "./components/ConfirmModal";
import useMobileCheck from "../../hooks/useMobileCheck";
import { makeStarHotspot, StarContainer } from "../../utils/makeStarHotSpot";

function SelectPosition() {
  const token = useToken();
  const isMobile = useMobileCheck();
  const { data: userInfo, isLoading: isUserLoading } = useQuery(
    ["userInfo", token],
    () => userApi.getUserInfoByToken(token),
    { enabled: !!token }
  );
  const { data: starList, isLoading } = useQuery(
    ["starList", token],
    () => starApi.getMyStarList(token),
    { enabled: !!token }
  );

  const [isPannelLoading, setIsPannelLoading] = useState(true);
  const [position, setPosition] = useState({ hfov: 100, pitch: 100, yaw: 100 });
  const [clickedIndex, setClickedIndex] = useState(0);
  const [newStar, setNewStar] = useState([]);

  const panImage = useRef(null);

  useEffect(() => {
    // 별 정보 3초 보여주는 로직
    if (clickedIndex > 0) {
      setTimeout(() => {
        setClickedIndex(0);
      }, [3000]);
    }
  }, [clickedIndex]);

  useEffect(() => {
    if (starList) {
      setNewStar(() => starList);
    }
  }, [starList]);

  useEffect(() => {
    if (isMobile) return;
    window.addEventListener("dblclick", handleNewStar);
  }, []);

  const [isConfirmModalOn, setIsConfirmModalOn] = useState(false);

  const onMousedown = (event) => {
    if (isMobile) {
      handleNewStar(event);
    }
  };

  const handleNewStar = (event) => {
    setPosition(() => ({
      hfov: panImage.current.getViewer().getConfig().hfov,
      pitch: panImage.current.getViewer().getConfig().pitch,
      yaw: panImage.current.getViewer().getConfig().yaw,
    }));
    setNewStar((prev) => [
      ...prev,
      {
        pitch: panImage.current.getViewer().mouseEventToCoords(event)[0],
        yaw: panImage.current.getViewer().mouseEventToCoords(event)[1],
      },
    ]);
    setIsConfirmModalOn(true);
    setIsPannelLoading(true);
  };

  if (isLoading || isUserLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header type="select" content={`${userInfo.nickname}의 행성`} />
      <ConfirmModal
        isOpen={isConfirmModalOn}
        setIsOpen={setIsConfirmModalOn}
        setNewStar={setNewStar}
        newStar={newStar}
        setIsPannelLoading={setIsPannelLoading}
        position={position}
      />
      <StarContainer clickedIndex={clickedIndex} isOpen={isConfirmModalOn}>
        {isPannelLoading && <Loading />}

        <Pannellum
          ref={panImage}
          width="420px"
          height="100vh"
          image={spaceImg}
          pitch={position.pitch}
          yaw={position.yaw}
          hfov={position.hfov}
          maxHfov={130}
          minHfov={50}
          autoLoad
          showZoomCtrl={false}
          onLoad={() => setIsPannelLoading(false)}
          showFullscreenCtrl={false}
          hotSpotDebug
          disabledKeyboardCtrl={false}
          newStar={newStar}
          onMousedown={onMousedown}
        >
          {newStar.map((star, index) => (
            <Pannellum.Hotspot
              key={index}
              type="custom"
              pitch={star.pitch}
              yaw={star.yaw}
              handleClick={(evt, index) => setClickedIndex(() => index)}
              handleClickArg={Number(index + 1)}
              cssClass={
                star.is_completed
                  ? `done${String(index + 1)} done`
                  : `ing${String(index + 1)} ing`
              }
              tooltip={makeStarHotspot}
              tooltipArg={{ title: star?.item?.title || "" }}
            />
          ))}
        </Pannellum>
        <Planet isMobile={isMobile} />
      </StarContainer>
    </>
  );
}

export default SelectPosition;
