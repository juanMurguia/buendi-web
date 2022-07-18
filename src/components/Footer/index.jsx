import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'
import { FooterContainer,FooterLinksContainer, FooterLinksWrapper,FooterWrap,FooterLink,FooterLinkTitle,FooterLinkItems, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink, SocialLogo  } from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}> Buendi</SocialLogo>
                        <WebsiteRights> {new Date().getFullYear()} © Todos los derechos reservados</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/" target="_blank" aria-label="Facebook">
                                <FaFacebook></FaFacebook>
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/" target="_blank" aria-label="Instagram">
                                <FaInstagram></FaInstagram>
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/" target="_blank" aria-label="YouTube">
                                <FaYoutube></FaYoutube>
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Twitter">
                                <FaTwitter></FaTwitter>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
