import {styled} from "styled-components";

const StyledAdviceCont = styled.div`
    width: 540px;
    background-color: #4F5D74;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
`;

const StyledH1 = styled.h1`
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 2px;
    color: #53FFAA;
    padding-top: 20px;
`;

const StyledP = styled.p`
    font-size: 22px;
    font-weight: 500;
    color: white;
    padding: 30px 0;
    margin: 0 20px;
    text-align: center;
`;

const StyledImageCont = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

const StyledHr = styled.hr`
    width: 100%;
    background-color: #CEE3E9;
    border: 1px solid #CEE3E9;
`;

const StyledImage = styled.img`
    width: 40px;
    height: 16px;
    object-fit: cover;
`;

const StyledDiceCont = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: #53FFAA;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 60px;
    cursor: pointer;
    transform: all 0.5s ease;
    :hover{
        box-shadow: 1px 1px 30px #53FFAA;
    }
`;

const StyledDiceIcon = styled.img`

`;

export {StyledAdviceCont, StyledH1, StyledP, StyledImageCont, StyledHr, StyledImage, StyledDiceCont, StyledDiceIcon};