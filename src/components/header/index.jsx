import styled from "styled-components";
import {Btn} from "../btn";
import { useNavigate, useLocation } from "react-router-dom";


const Nav = styled.nav`
display: flex;
justify-content:space-between;
align-items: center;
background-color: var(--bg-black);
padding: 2rem calc((100vw - 1440px) / 2 + 2rem);

img{
  cursor: pointer;
}

@media (max-width: 480px) {
    justify-content: center;
    padding: 1rem;
  }
`
const BtnBox = styled.div`
@media (max-width: 480px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1;
  

  #add{
    width: 100%;
    border-color: var(--color-primary);
    background-color: var(--color-primary);
    border-radius: 0;
  }

  #add:hover{
    background-color: var(--bg-black);
    color:  var(--color-primary) ;
   
  }
}
`

function Header(){

  const navigate = useNavigate();
  const changeHome =() => navigate("/");
  const newVideo = () => navigate("/nuevo");

const getUrl = useLocation()

    return<Nav>
        <img src="/Logo.png" alt="logo" onClick={changeHome} />
        <BtnBox>
          <Btn  
          id="add" 
          type="button" 
          value="Nuevo video" 
          onClick={newVideo} 
          hidden={getUrl.pathname === "/nuevo"}
          />
        </BtnBox>
    </Nav>
}

export default Header