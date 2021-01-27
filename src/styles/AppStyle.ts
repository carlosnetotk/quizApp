import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 2.5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    height: 95vh;
    background: rgba(0,0,0,.4);
    border-radius: 10px;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
    }

    h1 {
        background-image: linear-gradient(180deg, #845EC2, #FF6F91);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip:text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #845EC2);
        font-size: 70px;
        text-align:center;
        margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        background: #00C9A7;
        border: none;
        outline: none;
        border-radius: 5px;
        height: 40px;
        color: #FBEAFF;
        font-weight: 500;
        font-size: 18px;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
        margin-bottom: 20px;
    }

    .next {
        margin-top: 20px;
    }

`;