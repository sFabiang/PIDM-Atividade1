import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class FotoAluno extends Component {
    render() {
        let foto = {uri: 'https://escoladainteligencia.com.br/wp-content/uploads/2020/04/relacao-professor-aluno-em-tempos-de-coronavirus.jpg'};
        return (<Image source={foto} style={{width: 193, height: 110}}/>
        );
    }
}

AppRegistry.registerComponent('PIDM', () => FotoAluno);