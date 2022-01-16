import React, {useState} from "react";
import * as S from './style';
import { ReactComponent as GarbageSVG } from "../../../../assets/icon/garbage.svg";
import { ReactComponent as DivisionLineSVG } from "../../../../assets/icon/divisionLine.svg";

function StarItem({ handleButton, star, setDeleteStar }) {
    return (
        <S.Container>
            <S.StarContainer isComplete={star.is_completed}>
                <S.GarbageDivider>
                    <S.EmoticonContainer>
                        <S.Emoticon>{ star.item.emoticon }</S.Emoticon>
                    </S.EmoticonContainer>

                    <S.StarInfoContainer>
                        <S.StarName>{ star.item.title }</S.StarName>
                        
                        <S.StarCountContainer>
                            <S.AchievedCountContainer>
                                <p>실행한 횟수:</p>
                                <S.AchievedCount>{ star.achv_count }</S.AchievedCount>
                            </S.AchievedCountContainer>
                            
                            <S.DivisionBox>
                                <DivisionLineSVG />
                            </S.DivisionBox>
                            
                            <S.TotalCountContainer>
                                <p>총 횟수:</p>
                                <S.TotalCount>{ star.target_number }</S.TotalCount>
                            </S.TotalCountContainer>
                        </S.StarCountContainer>
                    </S.StarInfoContainer>
                </S.GarbageDivider>

                <S.IconBox onClick={ handleButton, setDeleteStar(star.item.title) }>
                    {console.log(star.item.title)}
                    <GarbageSVG />
                </S.IconBox>

            </S.StarContainer>
        </S.Container>
    )
}

export default StarItem;