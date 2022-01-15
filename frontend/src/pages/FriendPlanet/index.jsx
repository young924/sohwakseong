import React, { useEffect, useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useToken from "../../hooks/useToken";
import Header from "../../components/Header";
import { Pannellum } from "pannellum-react";
import spaceImg from "../../assets/image/space.jpg";
import Loading from "../../components/Loading";
import Planet from "./components/Planet";
import { useQuery } from "react-query";
import { starApi } from "../../api/star";
import * as S from "./style";
import { userApi } from "../../api/user";

function FriendPlanet() {
  const { id } = useParams();
  const token = useToken();
  const { data: starList } = useQuery(
    ["starList", id, token],
    () => starApi.getStarListByUserId(id, token),
    { enabled: !!(id || token) }
  );

  const { data: nickname } = useQuery(
    ["nickname", id, token],
    () => userApi.getNicknameByUserId(id, token),
    { enabled: !!(id || token) }
  );

  const { data: userInfo } = useQuery(
    ["userInfo", token],
    () => userApi.getUserInfoByToken(token),
    { enabled: !!token }
  );

  useEffect(() => {
    console.log(starList);
  }, [starList]);

  const [isLoading, setIsLoading] = useState(true);
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

  const CreatDoneHotspot = (hotSpotDiv, args) => {
    const starDiv = document.createElement("div");
    starDiv.classList.add("star");
    hotSpotDiv.appendChild(starDiv);
    starDiv.style.width = "2rem";
    starDiv.style.height = "2rem";
    starDiv.style.boxShadow = "0px 0px 6px 2px #8A8686";
    starDiv.style.backgroundColor = "#8A8686";
    starDiv.style.borderRadius = "50%";
    const line = document.createElement("div");
    line.classList.add("line");
    hotSpotDiv.appendChild(line);
    const starInfo = document.createElement("p");
    starInfo.innerHTML = args.title;
    hotSpotDiv.appendChild(starInfo);
    starInfo.style.display = "none";
  };
  return (
    <>
      <Header type="friendPlanet" content={`${nickname}의 행성`} />
      <S.Container clickedIndex={clickedIndex}>
        {isLoading && <Loading />}

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
          onLoad={() => setIsLoading(false)}
          showFullscreenCtrl={false}
          hotSpotDebug
          disabledKeyboardCtrl={false}
        >
          {/* {starList.map((star, index) => (
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
              tooltip={CreatDoneHotspot}
              tooltipArg={{ title: star.item.title }}
            />
          ))} */}
        </Pannellum>
        <Planet />
      </S.Container>
    </>
  );
}

export default FriendPlanet;
