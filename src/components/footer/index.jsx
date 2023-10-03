import styled from "styled-components";

const FootBox = styled.footer`
display: flex;
align-items: center;
flex-direction: column;
gap: 1rem;
padding: 2rem;
border-top: solid 1px var(--color-primary); //variables
`

const Link  =  styled.a`
text-decoration: none;
color: var(--color-primary);
`


function Footer(){
 return <FootBox>
    <img src="/Logo.png" alt="logo"/>
    <div>Sitio hecho en <b>#challenge</b> de <b><Link href="https://www.aluracursos.com/">Alura Latam</Link></b></div>
 </FootBox>
}

export default Footer