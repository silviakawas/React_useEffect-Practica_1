import { useEffect, useState } from "react";
import { StyledAdviceCont, StyledDiceCont, StyledDiceIcon, StyledH1, StyledHr, StyledImage, StyledImageCont, StyledP } from "./styles";

const AdviceGenerator = ()=>{

    const [advice, setAdvice] = useState('');

    useEffect(()=>{
        fetchAdvice(setAdvice);
    }, []);

    const handleFetchAdvice = () => {
        fetchAdvice(setAdvice);
    };

    return(
        <>
            <StyledAdviceCont>
                <StyledH1>ADVICE #{advice.id}</StyledH1>
                <StyledP>{'"' + advice.advice + '"'}</StyledP>
                <StyledImageCont>
                    <StyledHr/>
                    <StyledImage src='../public/pattern-divider-mobile.svg'/>
                    <StyledHr/>
                </StyledImageCont>
                <StyledDiceCont onClick={handleFetchAdvice}>
                    <StyledDiceIcon src='../public/icon-dice.svg'/>
                </StyledDiceCont>
            </StyledAdviceCont>
        </>
    );

};

const fetchAdvice = async setAdvice => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip);
}

export default AdviceGenerator;