import styled, { css } from "styled-components";

export const Container = styled.div`
    max-height: 100vh;

    > img {
        width: 100%;
    }

    > .btn-container {
        position: fixed;
        bottom: 3rem;
        width: 100%;
        padding: 2rem;
        font-size: 2rem;
        font-weight: 500;
        color: #4C4E5C;

        > .btn {
            background-color: white;
            opacity: 0.7;
            border-radius: 2rem;
            width: 38rem;
            padding: 1.5rem 15.5rem;
            box-shadow: 0 8px 8px -8px black;
        }

        > .login-btn {
            padding: 1.5rem 16.2rem;
        }

        > .signup-btn {
            margin-top: 1.5rem;
        }
    }
    
`;