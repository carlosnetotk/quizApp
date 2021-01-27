import styled from 'styled-components';

export const Wrapper = styled.div`

    width: 80%;
    text-align: center;

    p {
        font-size: 1rem;
        color: #fff;
        font-weight: bold;
    }

`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`

    transition: all 300ms ease-in;

    :hover {
        opacity: .7;
    }

    button {
        cursor: pointer;
        user-select: none;
        outline: none;
        font-weight: bold;
        border: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({ correct, userClicked }) =>
        correct ? '#00C9A7' : !correct && userClicked ? 'crimson' : '#B0A8B9'
    };

    border-radius: 10px;
    color: #FBEAFF;
    }
    

`;