import { HeaderContainer, Logo, NavBar, Txt } from "./style";
import logo from "../../assets/spacelanding.png";
import {useNavigate} from 'react-router-dom';
import {goToHome, goToContacts} from "../../routes/coordinator";

export function Header({showingCart}) {
    const navigate = useNavigate()

    const alertLogin = () => {
        alert("Sistema Indisponível!")
    }

    return (
        <HeaderContainer>
            <div className="logo">
                <Logo src={logo} alt="Logo Space Landing"/>
            </div>
            
            <NavBar>
                <Txt onClick={() => goToHome(navigate)}>Home</Txt>
                <Txt onClick={()=> alertLogin()}>Login</Txt>
                <Txt onClick={() => goToContacts(navigate)}>Contato</Txt>
                <Txt onClick={showingCart}>Carrinho</Txt>
            </NavBar>
        </HeaderContainer>
    )
}