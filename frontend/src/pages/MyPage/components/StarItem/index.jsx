import React from "react";
import * as S from './style';
import { ReactComponent as GarbageSVG } from "../../../../assets/icon/garbage.svg";
import { ReactComponent as DivisionLineSVG } from "../../../../assets/icon/divisionLine.svg";

function StarItem() {
    return (
        <S.Container>
            <S.StarContainer>
                <S.GarbageDivider>
                    <S.EmoticonContainer>
                        <S.Emoticon>💦</S.Emoticon>
                    </S.EmoticonContainer>

                    <S.StarInfoContainer>
                        <S.StarName>물 8잔 마시기</S.StarName>
                        
                        <S.StarCountContainer>
                            <S.AchievedCountContainer>
                                <p>실행한 횟수:</p>
                                <S.AchievedCount>4</S.AchievedCount>
                            </S.AchievedCountContainer>
                            
                            <DivisionLineSVG />
                            
                            <S.TotalCountContainer>
                                <p>총 횟수:</p>
                                <S.TotalCount>20</S.TotalCount>
                            </S.TotalCountContainer>
                        </S.StarCountContainer>
                    </S.StarInfoContainer>
                </S.GarbageDivider>

                <S.IconBox>
                    <GarbageSVG />
                </S.IconBox>

            </S.StarContainer>
        </S.Container>
    )
}

export default StarItem;