import styled from "styled-components";

export const SignupContainer = styled.div`
    width: 100%;
    max-height: 100vh;

    .signup-background {
        width: 100%;
        height: 100vh;
        background-color: white;
        opacity: 0.4;
    }

    > .signup-container {
        position: fixed;
        top: 0;
        width: 100%;
        max-width: 420px;

        > .signup-header {
            width: 100%;
            height: 5rem;
            padding: 2rem;
            display: flex;
            align-items: center;
            font-size: 2rem;
            .go-back-btn {
                cursor: pointer;
            }

            .signup-title {
                margin-left: 2rem;
            }
        }

        > .signup-inputs {
            color: white;
            padding: 2rem 3rem;
            font-size: 2rem;
            font-weight: 600;
            width: 100%;
            max-width: 420px;

            > .label {
                margin-bottom: 1rem;
                color: #0A0B16;
            }

            > input {
                width: 100%;
                border: none;
                border-bottom: 2px solid white;
                background: none;
                margin-bottom: 2rem;
                color: white;
                font-size: 2rem;
                font-weight: 400;
                padding: 0.8rem 0;
            }

            > input::placeholder {
                color: white;
                font-size: 2rem;
                font-weight: 400;
            }
        }

        > .btn-container {
            position: fixed;
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

            > .signup-btn {
                background-color: #FFFAD2;
            }

            > .signup-btn:hover {
                background-color: #FEDF9D;
            }
        }
    } 
`;
