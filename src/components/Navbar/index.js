import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import {Nav,NavbarContainer,NavLogo,
    MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarElements';


const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
       <>
         <Nav scrollNav={scrollNav}>
             <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}> Buendi </NavLogo>

                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="problematica" 
                        smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                        > Insomnio </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="como"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                        > ¿Cómo? </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="tecnologia"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                        > ¿Por qué? </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="beneficios"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active"
                        > Beneficios </NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Entrar</NavBtnLink>
                </NavBtn>
             </NavbarContainer>
         </Nav>
       </>
    )
}

export default Navbar
