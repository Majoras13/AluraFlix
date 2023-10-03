import { Card, CardMedia } from "@mui/material";
import styled from "styled-components";
import Btn from "../btn";

const BannerBox = styled.div`

background: url(/resources/banner.png) no-repeat center/cover;
display: flex;
justify-content: space-between;
gap: 4rem;
padding: 2rem calc((100vw - 1440px) / 2 + 2rem);
padding-top: 22rem;

@media (max-width: 480px) {
    .MuiPaper-root{
        display: none;
    }
    
}

`
const InfoBox = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
width: 50%;
align-items: baseline;
justify-content: center;

h1{
    font-size: var(--title-big);
    background-color: #6BD1FF;
    padding: 1rem;
    border-radius: 10px;
    font-weight:400;
}

button{
    display: none;
}

@media (max-width: 480px){

    width: 100%;
    align-items: center;

    h1{
        display: none;
    }

    p{
        display: none;
    }

    button{
        display: block;
        background-color: white;
        color: black;
    }

    button:hover{
        background-color: transparent;
        color: white;
    }

}
`

function Banner(){
    return <BannerBox>
        <InfoBox>
            <h1>Front End</h1>
            <h2>Challenge React</h2>
            <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            <Btn text={"Ver"}/>
        </InfoBox>
        <Card>
            <CardMedia image="/resources/miniatura1.png" sx={{ height: 375, width:620 , aspectRatio:16/9}} />
        </Card>
    </BannerBox>
}

export default Banner