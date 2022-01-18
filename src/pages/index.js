import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/data.jsx';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }




    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>  
          <Navbar toggle={toggle}></Navbar>
          <HeroSection></HeroSection>
          <InfoSection {...homeObjThree}></InfoSection>
          <InfoSection {...homeObjOne}></InfoSection>
          <InfoSection {...homeObjTwo}></InfoSection>
          <Services> </Services>
          <Footer> </Footer>
        </>
    )
}

export default Home
