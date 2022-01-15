import React, { useEffect, useState } from "react";
import useMount from "../../../../hooks/useMount";

import * as S from "./style";

function BottomModal() {
  const isMount = useMount();
  const [isComplete, setIsComplete] = useState(false);
  const [isNoticeOn, setIsNoticeOn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsNoticeOn(false);
    }, 5000);
  }, []);

  return (
    <S.Container isMount={isMount}>
      <S.TabWrapper>
        <S.Tab isComplete={!isComplete} onClick={() => setIsComplete(false)}>
          진행 중
        </S.Tab>
        <S.Tab isComplete={isComplete} onClick={() => setIsComplete(true)}>
          진행 완료
        </S.Tab>
      </S.TabWrapper>
      <S.Notice isNoticeOn={isNoticeOn}>
        *소확성을 꾸준히 달성하면 행성에 누군가가 놀러옵니다~!
      </S.Notice>
    </S.Container>
  );
}

export default BottomModal;
