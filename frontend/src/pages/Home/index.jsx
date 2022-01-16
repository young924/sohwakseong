import React, { useEffect, useRef, useState } from "react";
import { Pannellum } from "pannellum-react";
import spaceImg from "../../assets/image/space1.jpg";
import Loading from "../../components/Loading";
import Planet from "./components/Planet";
import * as S from "./style";
import Header from "../../components/Header";
import SearchModal from "./components/SearchModal";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import useToken from "../../hooks/useToken";
import { starApi } from "../../api/star";
import { makeStarHotspot, StarContainer } from "../../utils/makeStarHotSpot";

function Home() {
  const history = useHistory();
  const token = useToken();
  const [isSearchModalOn, setIsSearchModalOn] = useState(false);
  const [isPannelLoading, setIsPannelLoading] = useState(true);
  const [position, setPosition] = useState({ hfov: 100, pitch: 100, yaw: 100 });

  const { data: starList, isLoading } = useQuery(
    ["starList", token],
    () => starApi.getMyStarList(token),
    { enabled: !!token }
  );
  const [clickedIndex, setClickedIndex] = useState(0);
  const [planetClickedIndex, setPlanetClickedIndex] = useState(0);

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
      <Header type="home" handleButton={() => history.push("/friendsearch")} />
      <SearchModal isOpen={isSearchModalOn} setIsOpen={setIsSearchModalOn} />
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
          onMousedown={(event) => {
            setPlanetClickedIndex(0);
          }}
        >
          {starList.map((star, index) => (
            <Pannellum.Hotspot
              key={star.id}
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
                achvRate: star?.achv_rate ?? "",
              }}
            />
          ))}
        </Pannellum>
        <Planet
          clickedIndex={planetClickedIndex}
          setClickedIndex={setPlanetClickedIndex}
        />
      </StarContainer>
    </>
  );
}

export default Home;
