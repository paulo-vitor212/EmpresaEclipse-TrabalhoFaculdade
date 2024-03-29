import React from 'react';

import { Container } from './styles';
import Card from '../card';
import CoordenadorImage from '../../assets/coordenador.png';

const Coordenador = () => {
    return (
        <Container className="animate__animated animate__zoomIn">
            <Card
                title={'Coordenador de Alimentos e Bebidas'}
                text={'Sua função tem como responsabilidade coordenar as boas práticas no departamento de alimentos e bebidas, participar na elaboração dos cardápios juntamente com o chefe de cozinha, acompanha os resultados obtidos e fazer as devidas alterações quando necessário, definir o orçamento da área e controlar os produtos no depósito.'}
                image={CoordenadorImage}
            />
        </Container>
    )
}

export default Coordenador;