import React, { useEffect, useRef, useState } from "react";
import { Pannellum } from "pannellum-react";
import spaceImg from "../../assets/image/space.jpg";
import Loading from "./components/Loading";
import Planet from "./components/Planet";
import * as S from "./style";
import Header from "../../components/Header";
import SearchModal from "./components/SearchModal";

function Home() {
  const [isSearchModalOn, setIsSearchModalOn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [position, setPosition] = useState({ hfov: 100, pitch: 100, yaw: 100 });
  const [starList, setStarList] = useState([
    { yaw: 10, pitch: 100 },
    { yaw: 10, pitch: 120 },
  ]);
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
      <Header type="home" handleButton={() => setIsSearchModalOn(true)} />
      <SearchModal isOpen={isSearchModalOn} setIsOpen={setIsSearchModalOn} />
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
          // onMousedown={(event) => {
          //   setPosition(() => ({
          //     hfov: panImage.current.getViewer().getConfig().hfov,
          //     pitch: panImage.current.getViewer().getConfig().pitch,
          //     yaw: panImage.current.getViewer().getConfig().yaw,
          //   }));
          //   setStarList((prev) => [
          //     ...prev,
          //     {
          //       pitch: panImage.current
          //         .getViewer()
          //         .mouseEventToCoords(event)[0],
          //       yaw: panImage.current.getViewer().mouseEventToCoords(event)[1],
          //     },
          //   ]);
          //   setIsLoading(true);
          // }}
        >
          {starList.map((star, index) => (
            <Pannellum.Hotspot
              type="custom"
              pitch={star.pitch}
              yaw={star.yaw}
              handleClick={(evt, index) => setClickedIndex(() => index)}
              handleClickArg={Number(index + 1)}
              cssClass={`done${String(index + 1)} done`}
              tooltip={CreatDoneHotspot}
              tooltipArg={{ title: "미라클 모닝 7am" }}
            />
          ))}
        </Pannellum>
        <Planet />
      </S.Container>
    </>
  );
}

export default Home;
