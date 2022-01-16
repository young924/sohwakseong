import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../../components/Loading";
import useMount from "../../../../hooks/useMount";
import useToken from "../../../../hooks/useToken";
import StarItem from "../StarItem";

import * as S from "./style";
import {starApi} from '../../../../api/star'


function BottomModal({ handleButton }) {
  const isMount = useMount();
  const [isComplete, setIsComplete] = useState(false);
  const [isNoticeOn, setIsNoticeOn] = useState(true);
  const token = useToken()

  const { data: starList, isLoading } = useQuery(['starList', token], () => starApi.getMyStarList(token), {enabled: !!token})
  useEffect(() => {
    setTimeout(() => {
      setIsNoticeOn(false);
    }, 5000);
    
  }, []);

  if(isLoading) {
    return <Loading />
  }

  return (
    <S.Container isMount={isMount}>
      <S.TabWrapper>
        <S.Tab isComplete={!isComplete} onClick={() => setIsComplete(false)}>진행 중</S.Tab>
        <S.Tab isComplete={isComplete} onClick={() => setIsComplete(true)}>진행 완료</S.Tab>
      </S.TabWrapper>

      {
        isComplete === false
        ? (starList.map((star, index) => <StarItem handleButton={ handleButton }  star={ star } index={ index }/>))
        : null
      }

      {starList.map((star, index) => <StarItem handleButton={ handleButton }  star={ star } index={ index }/>)}

      {/* {starList.map((star, index) => {<StarItem handleButton={ handleButton }  star={ star } index={ index }/>})} */}
      <S.Notice isNoticeOn={isNoticeOn}>
        *소확성을 꾸준히 달성하면 행성에 누군가가 놀러옵니다~!
      </S.Notice>
    </S.Container>
  );
}

export default BottomModal;
