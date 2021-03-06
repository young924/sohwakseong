import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;

    > .star-img {
        width: 35rem;
        margin-left: 3rem;
    }

    > .login-title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 1rem 0;
        color: #F1F1F1;
        font-size: 5.5rem;
        text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.82);
    }

    > .login-inputs-background {
        margin-top: 6rem;
        border-top-left-radius: 3rem;
        border-top-right-radius: 3rem;
        width: 100%;
        height: 65vh;
        bottom: 0;
        background-color: grey;
        opacity: 1;
    

    > .login-inputs {
        height: 30rem;
        color: white;
        padding: 4rem;
        font-size: 2rem;
        font-weight: 600;
        width: 100%;
        max-width: 420px;

        > .label {
            margin-bottom: 1rem;
            color: black;
        }

        > .login-input {
            width: 100%;
            border: none;
            border-bottom: 2px solid white;
            background: none;
            margin-bottom: 4rem;
            color: white;
            font-size: 2rem;
            font-weight: 400;
            padding: 0.8rem 0;
        }

        > .login-input::placeholder {
            color: white;
            font-size: 2rem;
            font-weight: 400;
        }
    }

    > .btn-container {
        position: absolute;
        bottom: 4rem;
        margin: auto;
        left: 0;
        right: 0;
        width: 100%;
        max-width: 420px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        > .btn {
            border-radius: 2rem;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            width: 80%;
            padding: 1.6rem;
            font-size: 2rem;
            text-align: center;
            cursor: pointer;
        }

        > .login-btn {
            background-color: #FFFAD2;
        }

        > .login-btn:hover {
            background-color: #FEDF9D;
        }

        > .signup-btn {
            background-color: white;
            opacity: 1;
        }

        > .signup-btn:hover {
            opacity: 1;
        }
    }
    }

`;
