import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useToken from "../../hooks/useToken";
import Header from "../../components/Header";
import { Pannellum } from "pannellum-react";
import spaceImg from "../../assets/image/space1.jpg";
import Loading from "../../components/Loading";
import Planet from "../../components/Planet";
import { useQuery } from "react-query";
import { starApi } from "../../api/star";
import * as S from "./style";
import { userApi } from "../../api/user";
import { makeStarHotspot, StarContainer } from "../../utils/makeStarHotSpot";

function FriendPlanet() {
  const { id } = useParams();
  const token = useToken();
  const { data: starList, isLoading } = useQuery(
    ["starList", id, token],
    () => starApi.getStarListByUserId(id),
    { enabled: !!id }
  );

  const { data: nickname } = useQuery(
    ["nickname", id, token],
    () => userApi.getNicknameByUserId(id, token),
    { enabled: !!(id || token) }
  );

  const [isPannelLoading, setIsPannelLoading] = useState(true);
  const [position, setPosition] = useState({ hfov: 100, pitch: 100, yaw: 100 });
  const [clickedIndex, setClickedIndex] = useState(0);

  const panImage = useRef(null);

  useEffect(() => {
    // 별 정보 3초 보여주는 로직
    if (clickedIndex > 0) {
      setTimeout(() => {
        setClickedIndex(0);
      }, [3000]);
    }
  }, [clickedIndex]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Header type="friendPlanet" content={`${nickname}의 행성`} />
      <StarContainer clickedIndex={clickedIndex}>
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
        >
          {starList.map((star, index) => (
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
              tooltipArg={{
                title: star?.item?.title || "",
                achvRate: star?.achv_rate,
              }}
            />
          ))}
        </Pannellum>
        <Planet />
      </StarContainer>
    </>
  );
}

export default FriendPlanet;
