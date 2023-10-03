import styled from "styled-components";

    export const Btn = styled.input`
    border-radius: 0.25rem;
    font-size: var(--body-medium);
    padding: 1rem 2rem;
    font-weight: 600;
    transition: all ease-in-out 0.3s;
    text-align: center;
    cursor: pointer;

    color: var(--font-color);
    border-color: var(--font-color);
    background-color: inherit;

    &:hover{
        background-color: var(--font-color);
        color: var(--bg-black);
    }
    `

    /* color: ${(props) => props.color === undefined ? "white": props.color}
     function <Button color={color} >{text}</Button>
    
     function Btn ({text,id}){

    
    return<Button id={id} > {text} </Button>
}

export default Btn */