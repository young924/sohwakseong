import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StarContainer = styled.div`
    background-color: rgba(255, 255, 255, 1);
    opacity: initial;
    width: 34rem;
    height: 8rem;
    border-radius: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    margin-bottom: 2rem;
`;

export const AddDivider = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

export const StarName = styled.div`
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
`;

export const StarAddedCount = styled.div`
    font-size: 1.6rem;
    height: 1.8rem;
    margin-bottom: 0.5rem;
`;

export const IconBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    cursor: pointer;
    &:hover {
        background: #dfdfdf;
    }
    > svg {
        width: 2.8rem;
        height: 2.8rem;
    }
`;
