    import styled from "styled-components";

    export const Container = styled.div`
    > h2 {
        margin-top: 3rem;
    }
    `;

    export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    `;

    export const Button = styled.div`
    width: 100%;
    padding: 2rem;
    border-top: 1px solid gray;
    color: #e92f2f;
    font-size: 1.8rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: lightgray;
        border-radius: 0 0 0 12px;
    }

    & + & {
        border-left: 1px solid gray;
        color: #0ba0f3;
        border-radius: 0 0 12px 0;
    }
    `;
