import React from 'react';
import { ServicesContainer, ServicesCard, ServicesH1,ServicesH2,ServicesIcon,ServicesP,ServicesWrapper} from './ServicesElements';

import Icon1 from '../../img/icon1.png';
import Icon2 from '../../img/icon2.png';
import Icon3 from '../../img/icon3.png';

const Services = () => {
    return (
        <ServicesContainer id="beneficios">
            <ServicesH1> Beneficios </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2> Aumenta concentracion</ServicesH2>
                    <ServicesP> Nuestro cerebro necesita desconectarse varias horas para procesar toda la información que acumula.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} /> 
                    <ServicesH2> Cuida el corazón</ServicesH2>
                    <ServicesP> Favoreciendo el trabajo de reparación que hacen las células coronarias y los tejidos.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2> Ayuda a la coordinación</ServicesH2>
                    <ServicesP> Una actividad psicomotriz no se puede ejecutar correctamente si nuestro cerebro no está descansado.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services