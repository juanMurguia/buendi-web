import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import  { HeroContainer,Link, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward,ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover);
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Un buen día empieza la noche anterior</HeroH1>
                <HeroP>
                    Llevá el descanso hacia otro nivel, gracias a la nueva tecnología de Buendi.
                </HeroP>
                <HeroBtnWrapper>
                    <Link href='https://play.google.com/store' target="_blank" exact="true">
                        <Button 
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}
                        >
                        
                            Descargá la app {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </Link>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
