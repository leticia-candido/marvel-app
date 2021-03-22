import { Link } from 'react-router-dom';
import MarvelImg from '../../assets/marvel-topnav.png';
import {Nav, TopNav} from './styles';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function NavBar() {

    return (
        <>
        <Nav>
            <TopNav>
                <img src={MarvelImg} alt="Marvel logo"/>
                <Link to= "/">
                    <button type="button">Home <FontAwesomeIcon icon={faHome} color="#fff"/>
                    </button>
                </Link>
            </TopNav>
        </Nav>
        </>
    )
}