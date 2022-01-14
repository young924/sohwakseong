import React, { useCallback, useEffect } from "react";
import * as S from "./style";

const numberOfStars = 200;
const twinkleFrequencyMinimum = 2;
const twinkleFrequencyMaximum = 6;

function PageLayout({ children }) {
  const constructUniverse = useCallback(() => {
    const mainWidth = document.getElementsByTagName("main")[0].scrollWidth;
    const mainHeight = document.getElementsByTagName("main")[0].scrollHeight;

    for (let i = 0; i < numberOfStars; i++) {
      const xAxis = Math.floor(Math.random() * mainWidth);
      const yAxis = Math.floor(Math.random() * mainHeight);

      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = yAxis.toString() + "px";
      star.style.left = xAxis.toString() + "px";
      document.getElementsByTagName("main")[0].appendChild(star);
    }

    const randomRange = (min, max) => {
      return Math.floor(Math.random() * (max + 1 - min) + min);
    };

    let stars = document.getElementsByClassName("star");

    for (let i = 0; i < stars.length; i++) {
      let randNum = randomRange(
        twinkleFrequencyMinimum,
        twinkleFrequencyMaximum
      ); // twinkle duration
      stars[i].style.animationDuration = randNum + "s";
    }
  }, []);

  const outputStars = () => {
    let starCollection = document.getElementsByClassName("star");
    if (starCollection.length === 0) {
      constructUniverse();
    } else {
      const removeStars = (starCollection) => {
        starCollection.forEach((el) => el.remove());
      };
      removeStars(document.querySelectorAll(".star"));
      constructUniverse();
    }
  };

  useEffect(() => {
    outputStars();
  }, []);

  return <S.Container>{children}</S.Container>;
}

export default PageLayout;
