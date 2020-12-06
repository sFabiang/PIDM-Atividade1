import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class NomeCurso extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>Nome: {this.props.nome}!</Text>
                <Text>Curso: {this.props.curso}</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('PIDM', () => NomeCurso);