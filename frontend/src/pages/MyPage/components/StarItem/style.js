import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
`;

export const StarContainer = styled.div`
    background-color: rgba(255, 255, 255, 1);
    opacity: initial;
    width: 35rem;
    height: 8rem;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const GarbageDivider = styled.div `
    display: flex;
    flex-direction: row;
`;

export const EmoticonContainer = styled.div`
    background-color: rgba(255, 255, 255, 1);
    width: 5rem;
    height: 5rem;
    border-radius: 3rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
`;

export const Emoticon = styled.p`
    font-size: 2.5rem;
`;

export const StarInfoContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #0A0B16;
`;
export const StarName = styled.p`
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
`;

export const StarCountContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const AchievedCountContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 1rem;
`;

export const AchievedCount = styled.p`
    margin-left: 0.5rem;
`;

export const CountDivision = styled.p`
`;

export const TotalCountContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 1rem;
`;

export const TotalCount = styled.p`
    margin-left: 0.5rem;
`;

export const IconBox = styled.div`
    height: 50%;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
