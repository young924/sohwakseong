import React, { useEffect, useRef, useState } from "react";
import { Pannellum } from "pannellum-react";
import spaceImg from "../../assets/image/space.jpg";
import Loading from "./components/Loading";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [position, setPosition] = useState({ hfov: 100, pitch: 100, yaw: 100 });
  const [starList, setStarList] = useState([
    { yaw: 10, pitch: 100 },
    { yaw: 10, pitch: 120 },
  ]);

  const panImage = useRef(null);
  // useEffect(() => {
  //   console.log(position);
  // }, [position]);

  return (
    <>
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
        onMouseup={(event) => {
          setPosition(() => ({
            hfov: panImage.current.getViewer().getConfig().hfov,
            pitch: panImage.current.getViewer().getConfig().pitch,
            yaw: panImage.current.getViewer().getConfig().yaw,
          }));

          setStarList((prev) => [
            ...prev,
            {
              pitch: panImage.current.getViewer().mouseEventToCoords(event)[0],
              yaw: panImage.current.getViewer().mouseEventToCoords(event)[1],
            },
          ]);

          setIsLoading(true);
        }}
      >
        {starList.map((star) => (
          <Pannellum.Hotspot
            type="custom"
            pitch={star.pitch}
            yaw={star.yaw}
            handleClick={(evt, name) => console.log(name)}
            handleClickArg={"냠냠"}
            cssClass={"Ryoung"}
          />
        ))}
      </Pannellum>
    </>
  );
}

export default Home;
