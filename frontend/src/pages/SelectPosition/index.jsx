import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { userApi } from "../../api/user";
import { starApi } from "../../api/star";
import { useQuery } from "react-query";
import * as S from "./style";
import useToken from "../../hooks/useToken";
import { Pannellum } from "pannellum-react";
import spaceImg from "../../assets/image/space1.jpg";
import Loading from "../../components/Loading";
import Planet from "../../components/Planet";

function SelectPosition() {
  const { item, target_number } = useParams();
  const token = useToken();
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
  const [newStar, setNewStar] = useState(null);

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
    console.log(newStar);
  }, [newStar]);

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

  if (isLoading || isUserLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header type="select" content={`${userInfo.nickname}의 행성`} />
      <S.Container clickedIndex={clickedIndex}>
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
          onMousedown={(event) => {
            setPosition(() => ({
              hfov: panImage.current.getViewer().getConfig().hfov,
              pitch: panImage.current.getViewer().getConfig().pitch,
              yaw: panImage.current.getViewer().getConfig().yaw,
            }));
            setNewStar(() => ({
              pitch: panImage.current.getViewer().mouseEventToCoords(event)[0],
              yaw: panImage.current.getViewer().mouseEventToCoords(event)[1],
            }));
            // setIsPannelLoading(true);
          }}
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
              tooltip={CreatDoneHotspot}
              tooltipArg={{ title: "미라클 모닝" }}
            />
          ))}
          {newStar !== null && (
            <Pannellum.Hotspot
              type="custom"
              pitch={newStar.pitch}
              yaw={newStar.yaw}
              handleClick={(evt, index) => setClickedIndex(() => index)}
              handleClickArg={Number(1)}
              cssClass={"done"}
              tooltip={CreatDoneHotspot}
              tooltipArg={{ title: "미라클 모닝" }}
            />
          )}
        </Pannellum>
        <Planet />
      </S.Container>
    </>
  );
}

export default SelectPosition;
