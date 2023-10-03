import SliderBox from "./Slider"
import styled from "styled-components"

const SliderContainer = styled.div`
padding: 2rem calc((100vw - 1440px) / 2 + 2rem);

@media (max-width: 480px){
    padding: 1rem;
}

`

const TextContainer = styled.div`
    /* display: none;  operador ternario*/ 
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding-bottom:1rem;
    gap: .5rem;

    @media (max-width: 480px){
    display: flex;
    flex-direction: column;
    padding-bottom: 0.5rem;
    }

    h1{
        font-size: var(--body-big);
        background-color: #6BD1FF; /*props*/
        padding: 1rem;
        border-radius: 10px;
        font-weight: 300;
    }
    `



function Carrousel({data, info}) {


    return <SliderContainer>
        <TextContainer>
            <h1 style={{background:`${info[0].color}`}}>{info[0].name}</h1> {/*props*/}
            <p>{info[0].description}</p>
        </TextContainer>
        <SliderBox data={data}/>
    </SliderContainer>
}

export default Carrousel